function App()
export default App;   // ← genau diese Zeile am Ende hinzufügen

{/* HERO */}
<section className="relative overflow-hidden">
  {/* Hintergrundbild */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
    }}
  />
  {/* Farbverlauf-Overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-neutral-950" />

  <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-12 gap-8 items-center">
    <div className="md:col-span-7">
      <p className="text-xs uppercase tracking-[0.3em] text-roseAccent/80">
        Kreativagentur für Social Media
      </p>
      <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
        Scroll-stoppende{" "}
        <span className="text-roseAccent">Video-Ads</span>, die{" "}
        <span className="underline decoration-roseAccent/60">verkaufen</span>
      </h1>
      <p className="mt-5 text-neutral-300 max-w-xl">
        Wir verwandeln UGC, Produkt- und Brand-Footage in performante Meta-,
        TikTok- und Reels-Ads – mit Creative-Director-Blick für Story, Hook und
        Taktung.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="inline-flex items-center rounded-xl bg-roseAccent px-5 py-3 text-neutral-900 font-semibold hover:bg-roseAccent/80 transition"
        >
          Projekt starten
        </a>
        <a
          href="#work"
          className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 font-medium hover:border-roseAccent/60 hover:text-roseAccent transition"
        >
          Beispiele ansehen
        </a>
      </div>
    </div>

    <div className="md:col-span-5 flex justify-center">
      <img
        src="/team.jpg"
        alt="Team arbeitet an Kampagnen"
        className="rounded-3xl shadow-2xl border border-white/10 max-w-full h-auto"
        export default App;  
      />
    </div>
  </div>
</section>
