// src/App.jsx
import React from "react";

// Hauptkomponente deiner Website
function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
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
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tig
