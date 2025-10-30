export default function Page() {
  const videos = [
    {
      title: "Projekt 1",
      desc: "Beispiel-Ad für Social Media Kampagne.",
      url: "https://player.vimeo.com/video/123456789?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&controls=0"
    },
    {
      title: "Projekt 2",
      desc: "Beispiel-Ad mit Hook-Test & Untertiteln.",
      url: "https://player.vimeo.com/video/987654321?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&controls=0"
    },
    {
      title: "Projekt 3",
      desc: "Beispiel-Reel: schnelle Cuts, Beat-Sync.",
      url: "https://player.vimeo.com/video/543216789?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&controls=0"
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-roseAccent/60 selection:text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-neutral-950/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-roseAccent to-roseAccent/70" />
            <span className="tracking-[0.25em] text-sm md:text-base font-semibold">
              RENÉ LAMBERTI <span className="opacity-60">STUDIO</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a href="#services" className="hover:text-roseAccent">Leistungen</a>
            <a href="#work" className="hover:text-roseAccent">Projekte</a>
            <a href="#pricing" className="hover:text-roseAccent">Preise</a>
            <a href="#about" className="hover:text-roseAccent">Über mich</a>
            <a href="#contact" className="hover:text-roseAccent">Kontakt</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-xl bg-roseAccent px-4 py-2 text-neutral-950 font-medium hover:bg-roseAccent/80 transition">
            Angebot anfragen
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(216,165,169,0.15),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-roseAccent/80">Kreativagentur für Social Media</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Scroll-stoppende <span className="text-roseAccent">Video-Ads</span>, die <span className="underline decoration-roseAccent/60">verkaufen</span>
            </h1>
            <p className="mt-5 text-neutral-300 max-w-xl">
              Wir verwandeln UGC, Produkt- und Brand-Footage in performante Meta-, TikTok- und Reels-Ads – mit Creative-Director-Blick für Story, Hook und Taktung.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-roseAccent px-5 py-3 text-neutral-900 font-semibold hover:bg-roseAccent/80 transition">Projekt starten</a>
              <a href="#work" className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 font-medium hover:border-roseAccent/60 hover:text-roseAccent transition">Beispiele ansehen</a>
            </div>
          </div>
          <div className="md:col-span-6 flex justify-center">
            {/* Lege /public/team.jpg ab (oder ersetze src durch eine URL) */}
            <img src="/team.jpg" alt="Team arbeitet an Kampagnen" className="rounded-3xl shadow-2xl border border-white/10 max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Performance-Editing" desc="Präzise Schnitte, Plattform-Pacing, starke Openings für bessere KPIs." />
          <ServiceCard title="Hook & Copy" desc="Konzeption, Winkel, Claims & CTAs – aus der Perspektive eines Creative Directors." />
          <ServiceCard title="UGC-Regie" desc="Remote-Briefings, Script-Outlines & Shotlists für authentische Creator-Clips." />
          <ServiceCard title="Motion & Captions" desc="Kinetische Typo, klare Untertitel, saubere Brand-Integration." />
          <ServiceCard title="A/B-Varianten" desc="3–10 Varianten: unterschiedliche Hooks, Story-Angles oder Taktungen." />
          <ServiceCard title="Brand-Systeme" desc="Wiederverwendbare Templates für wöchentliche Produktion in Serie." />
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Projekte & Kampagnen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-neutral-900 hover:border-roseAccent/40 transition overflow-hidden">
              <div className="aspect-[9/16] rounded-b-none overflow-hidden border-b border-white/10">
                <iframe
                  src={v.url}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-sm">
                <p className="font-semibold">{v.title}</p>
                <p className="text-neutral-400">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Preise</h2>
        <p className="text-neutral-400 mb-10">Transparente Pakete für Marken & Agenturen. Monatliche Retainer möglich.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <PriceCard tier="Starter" price="€180" tagline="1 Ad-Schnitt" bullets={["1× 15–20s Video","Musik, Untertitel, Logo","1 Korrekturschleife"]} />
          <PriceCard tier="Growth" price="€450" tagline="3 Varianten" emphasized bullets={["3 Hooks oder Produkt-Angles","Testing-fertige Exporte","2 Korrekturschleifen"]} />
          <PriceCard tier="Scale" price="€900" tagline="5 Ads + Direction" bullets={["Vollschnitt & Copy-Support","Hook & Pacing-Optimierung","3 Korrekturschleifen"]} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10" />
        </div>
        <div className="md:col-span-7">
          <h2 className="text-3xl font-bold">Geführt von Creative Director René Lamberti</h2>
          <p className="mt-4 text-neutral-300">Ausgezeichnete Kreation für Marken wie Meta, Audi, VW, Zalando und NIVEA. Wir verbinden Brand-Craft mit Performance: starke Openings, klare Story, Conversion-Psychologie.</p>
          <ul className="mt-6 space-y-2 text-neutral-300">
            <li><Check /> 20+ Jahre Erfahrung in Werbung & Content</li>
            <li><Check /> Creative Direction + Hands-on Editing</li>
            <li><Check /> EU-basiert, datenschutzbewusste Abläufe</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-neutral-300 mb-6">Schick mir ein kurzes Briefing oder eine Frage. Du bekommst Timing, ein klares Angebot und einen Test-Plan.</p>
              <p className="text-sm text-neutral-400 mb-2"><span className="opacity-60">E-Mail</span> · <a href="mailto:post@renelamberti.de" className="hover:text-roseAccent">post@renelamberti.de</a></p>
              <p className="text-sm text-neutral-400 mb-2"><span className="opacity-60">Website</span> · <a href="https://renelamberti.de" className="hover:text-roseAccent">renelamberti.de</a></p>
              <p className="text-sm text-neutral-400"><span className="opacity-60">Standort</span> · Berlin, DE</p>
            </div>
            <form className="space-y-4">
              <input placeholder="Dein Name" className="w-full rounded-xl bg-neutral-800 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-roseAccent/60" />
              <input placeholder="Deine E-Mail" className="w-full rounded-xl bg-neutral-800 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-roseAccent/60" />
              <textarea rows={4} placeholder="Projekt, Ziele, Assets, Deadline…" className="w-full rounded-xl bg-neutral-800 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-roseAccent/60" />
              <a href="mailto:post@renelamberti.de?subject=Projektanfrage%20—%20Ren%C3%A9%20Lamberti%20Studio" className="inline-flex items-center rounded-xl bg-roseAccent px-5 py-3 text-neutral-900 font-semibold hover:bg-roseAccent/80 transition">Per E-Mail senden</a>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} René Lamberti Studio – Kreativagentur für Social Media.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Impressum</a>
            <a className="hover:text-white" href="#">Datenschutz</a>
            <a className="hover:text-white" href="#">AGB</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Check() {
  return <span className="text-roseAccent">✔</span>;
}
function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 hover:border-roseAccent/40 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400">{desc}</p>
    </div>
  );
}
function PriceCard({ tier, price, tagline, bullets = [], emphasized = false }) {
  return (
    <div className={`rounded-2xl border bg-neutral-900 p-6 ${emphasized ? "border-roseAccent/60 ring-1 ring-roseAccent/30" : "border-white/10"}`}>
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl font-semibold">{tier}</h3>
        <span className="text-3xl font-extrabold text-roseAccent">{price}</span>
      </div>
      <p className="text-neutral-300 mb-4">{tagline}</p>
      <ul className="space-y-2 text-neutral-300 text-sm">
        {bullets.map((b, i) => (
          <li key={i}><Check /> {b}</li>
        ))}
      </ul>
      <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-roseAccent px-4 py-3 text-neutral-900 font-semibold hover:bg-roseAccent/80 transition">Jetzt starten</a>
    </div>
  );
}
