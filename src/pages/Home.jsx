import React from "react";
import { Link } from "react-router-dom";
import { Beer, ShoppingBag, Palette, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-amber-50">
      <div className="max-w-screen-md mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-3">
            Berlin Weekend Tours
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base">
            Curated walking & biking tours through Berlin's best spots
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-500">
            <MapPin className="w-4 h-4" />
            <span>Made for friends ✨</span>
          </div>
        </header>

        <div className="space-y-4">
          <Link
            to="/späti-tour"
            className="block rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Beer className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Späti Walking Tour
                  </h2>
                </div>
                <p className="text-sm text-zinc-700 mb-3">
                  Evening walk through Prenzlauer Berg → Mitte → Kreuzberg. 
                  Visit 5 iconic spätis and enjoy Berlin's unique late-night culture.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 border border-amber-200">
                    ~2.5–3 hours
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-amber-200">
                    6 km walking
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-amber-200">
                    5 stops
                  </span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-amber-600 shrink-0 ml-4" />
            </div>
          </Link>

          <Link
            to="/vintage-tour"
            className="block rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-slate-50 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <ShoppingBag className="w-6 h-6 text-zinc-700" />
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Vintage Shopping Tour
                  </h2>
                </div>
                <p className="text-sm text-zinc-700 mb-3">
                  Bike-friendly loop through Neukölln → Kreuzberg → Mitte → Prenzlauer Berg → Friedrichshain. 
                  10 curated second-hand & vintage shops.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 border border-zinc-200">
                    3–4 hours by bike
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-zinc-200">
                    10 stops
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-zinc-200">
                    €–€€€
                  </span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-zinc-700 shrink-0 ml-4" />
            </div>
          </Link>

          <Link
            to="/museums"
            className="block rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Palette className="w-6 h-6 text-purple-600" />
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Museums & Galleries
                  </h2>
                </div>
                <p className="text-sm text-zinc-700 mb-3">
                  10 current/upcoming exhibitions with affordable student tickets (≤ €15). 
                  Contemporary art, photography, and major retrospectives.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 border border-purple-200">
                    10 exhibitions
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-purple-200">
                    €3–€10 (students)
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-purple-200">
                    Oct 2025 – Jan 2026
                  </span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 shrink-0 ml-4" />
            </div>
          </Link>
        </div>

        <footer className="mt-16 text-center text-xs text-zinc-500">
          <p>Optimized for mobile 📱 — Share with friends via WhatsApp</p>
        </footer>
      </div>
    </main>
  );
}
