import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useMedia = (queries, values, defaultValue) => {
    const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;

    const [value, setValue] = useState(get);

    useEffect(() => {
        const handler = () => setValue(get);
        queries.forEach(q => matchMedia(q).addEventListener('change', handler));
        return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queries]);

    return value;
};

const useMeasure = () => {
    const ref = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size];
};

const preloadImages = async urls => {
    const meta = {};
    await Promise.all(
        urls.map(
            src =>
                new Promise(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                        meta[src] = { w: img.naturalWidth || img.width || 1, h: img.naturalHeight || img.height || 1 };
                        resolve();
                    };
                    img.onerror = () => resolve();
                })
        )
    );
    return meta;
};

const Masonry = ({
    items,
    ease = 'power3.out',
    duration = 0.6,
    stagger = 0.05,
    animateFrom = 'bottom',
    scaleOnHover = true,
    hoverScale = 0.95,
    blurToFocus = true,
    colorShiftOnHover = false,
    gapX = 16,
    gapY = 16
}) => {
    const columns = useMedia(
        ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
        [5, 4, 3, 2],
        1
    );

    const [containerRef, { width }] = useMeasure();
    const [imagesReady, setImagesReady] = useState(false);
    const [imageMeta, setImageMeta] = useState({});

    const getInitialPosition = item => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return { x: item.x, y: item.y };

        let direction = animateFrom;

        if (animateFrom === 'random') {
            const directions = ['top', 'bottom', 'left', 'right'];
            direction = directions[Math.floor(Math.random() * directions.length)];
        }

        switch (direction) {
            case 'top':
                return { x: item.x, y: -200 };
            case 'bottom':
                return { x: item.x, y: window.innerHeight + 200 };
            case 'left':
                return { x: -200, y: item.y };
            case 'right':
                return { x: window.innerWidth + 200, y: item.y };
            case 'center':
                return {
                    x: containerRect.width / 2 - item.w / 2,
                    y: containerRect.height / 2 - item.h / 2
                };
            default:
                return { x: item.x, y: item.y + 100 };
        }
    };

    useEffect(() => {
        let alive = true;
        preloadImages(items.map(i => i.img)).then(meta => {
            if (!alive) return;
            setImageMeta(meta || {});
            setImagesReady(true);
        });
        return () => {
            alive = false;
        };
    }, [items]);

    const grid = useMemo(() => {
        if (!width) return { list: [], containerHeight: 0 };

        const colHeights = new Array(columns).fill(0);
        const columnWidth = (width - (columns - 1) * gapX) / columns;

        const list = items.map(child => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = col * (columnWidth + gapX);
            const meta = imageMeta[child.img];
            const ratio = meta && meta.w ? meta.h / meta.w : (typeof child.height === 'number' ? child.height / columnWidth : 0.75);
            const height = columnWidth * ratio;
            const y = colHeights[col];

            colHeights[col] += height + gapY;

            return { ...child, x, y, w: columnWidth, h: height };
        });

        const containerHeight = Math.max(0, ...colHeights) - gapY; // remove last added gap
        return { list, containerHeight };
    }, [columns, items, width, gapX, gapY, imageMeta]);

    const hasMounted = useRef(false);

    useLayoutEffect(() => {
        if (!imagesReady) return;

        grid.list.forEach((item, index) => {
            const selector = `[data-key="${item.id}"]`;
            const animationProps = {
                x: item.x,
                y: item.y,
                width: item.w,
                height: item.h
            };

            if (!hasMounted.current) {
                const initialPos = getInitialPosition(item, index);
                const initialState = {
                    opacity: 0,
                    x: initialPos.x,
                    y: initialPos.y,
                    width: item.w,
                    height: item.h,
                    ...(blurToFocus && { filter: 'blur(10px)' })
                };

                gsap.fromTo(selector, initialState, {
                    opacity: 1,
                    ...animationProps,
                    ...(blurToFocus && { filter: 'blur(0px)' }),
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: index * stagger
                });
            } else {
                gsap.to(selector, {
                    ...animationProps,
                    duration: duration,
                    ease: ease,
                    overwrite: 'auto'
                });
            }
        });

        hasMounted.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [grid.list, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

    const handleMouseEnter = (e, item) => {
        const element = e.currentTarget;
        const selector = `[data-key="${item.id}"]`;

        if (scaleOnHover) {
            gsap.to(selector, {
                scale: hoverScale,
                duration: 0.3,
                ease: 'power2.out'
            });
        }

        if (colorShiftOnHover) {
            const overlay = element.querySelector('.color-overlay');
            if (overlay) {
                gsap.to(overlay, {
                    opacity: 0.3,
                    duration: 0.3
                });
            }
        }
    };

    const handleMouseLeave = (e, item) => {
        const element = e.currentTarget;
        const selector = `[data-key="${item.id}"]`;

        if (scaleOnHover) {
            gsap.to(selector, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }

        if (colorShiftOnHover) {
            const overlay = element.querySelector('.color-overlay');
            if (overlay) {
                gsap.to(overlay, {
                    opacity: 0,
                    duration: 0.3
                });
            }
        }
    };

    return (
        <div ref={containerRef} className="relative" style={{ height: grid.containerHeight }}>
            {grid.list.map(item => {
                return (
                    <div
                        key={item.id}
                        data-key={item.id}
                        className="item-wrapper absolute overflow-hidden rounded cursor-pointer"
                        onClick={() => window.open(item.url, '_blank', 'noopener')}
                        onMouseEnter={e => handleMouseEnter(e, item)}
                        onMouseLeave={e => handleMouseLeave(e, item)}
                    >
                        <img
                            src={item.img}
                            alt=""
                            className="w-full h-full object-cover object-center block"
                            loading="lazy"
                        />
                        {colorShiftOnHover && (
                            <div
                                className="color-overlay"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    borderRadius: '8px'
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Masonry;
