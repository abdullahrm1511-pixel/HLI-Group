import Image from 'next/image';

export default function Home() {
  return (
    <main className="construction-page">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <section className="construction-card" aria-labelledby="page-title">
        <div className="logo-frame">
          <Image
            src="/hli-logo.png"
            alt="HLI Holland Load & Inspection Group — Testing, Inspection, Certification"
            width={1254}
            height={1254}
            className="brand-logo"
            priority
          />
        </div>

        <div className="divider" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <p className="eyebrow">Binnenkort online</p>
        <h1 id="page-title">Website Under Construction</h1>
        <p className="intro">
          We werken momenteel aan onze nieuwe website.
          <br />
          Binnenkort vindt u hier meer informatie over HLI Group.
        </p>
      </section>

      <footer>Safe <b>•</b> Strong <b>•</b> Certified</footer>
    </main>
  );
}
