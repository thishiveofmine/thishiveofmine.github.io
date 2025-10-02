import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetAttributify } from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetWind3(), presetAttributify()],
      theme: {
        colors: {
          hive: { gold: '#FFCA40', dark: '#212529' },
        },
        fontFamily: {
          // Bootstrap 5 system stack
          sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
          serif: "Georgia, Cambria, 'Times New Roman', Times, serif",
          mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        },
      },
      shortcuts: {
        'hr-gold': 'h-[3px] bg-hive-gold opacity-80 border-0',
        'container': 'max-w-7xl mx-auto px-4',
      },
    }),
  ],
})
