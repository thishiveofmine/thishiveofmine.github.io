import React from "react";

export default function Datenschutz() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-4xl md:text-5xl mb-6">Datenschutzerklärung</h1>

      <h3 className="text-2xl md:text-3xl mt-3">Hosting</h3>
      <p className="text-gray-100">Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:</p>

      <p className="text-gray-100">
        IP-Adresse, die Adresse der vorher besuchten Website (Referer Anfrage-Header), Datum und Uhrzeit der Anfrage, Zeitzonendifferenz
        zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung
        kommt und Informationen zu Browser und Betriebssystem.
      </p>

      <p className="text-gray-100">
        Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem
        berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
      </p>

      <p className="text-gray-100">
        Es erfolgt kein Tracking und wir haben auf diese Daten keinen direkten Zugriff, sondern erhalten lediglich eine anonymisierte,
        statistische Zusammenfassung. Diese beinhaltet die Adresse der vorher besuchten Seite, die Häufigkeit der jeweils aufgerufenen
        Seiten und die Anzahl eindeutiger Besucher. Diese Daten führen wir nicht mit anderen Daten zusammen.
      </p>

      <p className="text-gray-100">Wir setzen für die Zurverfügungstellung unserer Website folgenden Hoster ein:</p>
      <p className="text-gray-100">
        GitHub Inc.<br />
        88 Colin P Kelly Jr St<br />
        San Francisco, CA 94107<br />
        United States
      </p>

      <p className="text-gray-100">
        Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S.
        1 lit. f DSGVO, selbst keinen Server in unseren Räumlichkeiten vorhalten zu müssen. Serverstandort ist USA.
      </p>

      <p className="text-gray-100">
        Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten gegenüber GitHub finden Sie unter:{" "}
        <a
          href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages"
          className="text-hive-gold hover:underline"
        >
          GitHub Privacy Statement
        </a>
      </p>

      <p className="text-gray-100">
        Sie haben das Recht der Verarbeitung zu widersprechen. Ob der Widerspruch erfolgreich ist, ist im Rahmen einer Interessenabwägung
        zu ermitteln.
      </p>

      <p className="text-gray-100">Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt.</p>

      <p className="text-gray-100">
        Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Die
        Funktionsfähigkeit der Website ist ohne die Verarbeitung nicht gewährleistet.
      </p>

      <p className="text-gray-100">
        GitHub hat Compliance-Maßnahmen für internationale Datenübermittlungen umgesetzt. Diese gelten für alle weltweiten Aktivitäten,
        bei denen GitHub personenbezogene Daten von natürlichen Personen in der EU verarbeitet. Diese Maßnahmen basieren auf den
        EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie unter:{" "}
        <a
          href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors"
          className="text-hive-gold hover:underline"
        >
          GitHub Data Protection Addendum
        </a>
      </p>
    </div>
  );
}