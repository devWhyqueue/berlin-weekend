import React from "react";
import { Link } from "react-router-dom";
import { Beer, ShoppingBag, Palette, MapPin, ArrowRight, Coffee, Wine, Music2, Utensils, Calendar, Star } from "lucide-react";

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
            to="/weekend-plan"
            className="block rounded-3xl border-4 border-gradient-to-r from-purple-300 via-pink-300 to-rose-300 bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 p-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-1">
                      Weekend Plan
                    </h2>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-purple-700">Featured</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-7 h-7 text-purple-600 shrink-0" />
              </div>
              <p className="text-base text-zinc-800 mb-4 leading-relaxed">
                Complete 3-day itinerary for October 11-13, 2024. Tiergarten walks, food festivals, 
                vintage shopping, comedy shows, and Berlin's best spots all planned out.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-white/80 px-3 py-1.5 border border-purple-200 font-medium text-purple-800">
                  3 days planned
                </span>
                <span className="rounded-full bg-white/80 px-3 py-1.5 border border-pink-200 font-medium text-pink-800">
                  Oct 11-13, 2024
                </span>
                <span className="rounded-full bg-white/80 px-3 py-1.5 border border-rose-200 font-medium text-rose-800">
                  All activities included
                </span>
              </div>
            </div>
          </Link>

          <Link
            to="/restaurants"
            className="block rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Utensils className="w-6 h-6 text-rose-700" />
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Restaurants — Veggie-Friendly Picks
                  </h2>
                </div>
                <p className="text-sm text-zinc-700 mb-3">
                  6 curated spots: döner classic, vegan pizza, Sichuan, Uzbek, and more.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 border border-rose-200">
                    6 places
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-rose-200">
                    €–€€
                  </span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-rose-700 shrink-0 ml-4" />
            </div>
          </Link>
          <Link
            to="/clubbing"
            className="block rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Music2 className="w-6 h-6 text-indigo-700" />
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Clubbing — This Weekend
                  </h2>
                </div>
                <p className="text-sm text-zinc-700 mb-3">
                  Curated electronic music events for Oct 10–11, 2025 — strong lineups near €20.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 border border-indigo-200">
                    5 picks
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-indigo-200">
                    Techno · Electro · DnB
                  </span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-indigo-700 shrink-0 ml-4" />
            </div>
          </Link>
          <Link
            to="/spaeti-tour"
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
                  12 current/upcoming exhibitions with affordable student tickets (≤ €15). 
                  Contemporary art, photography, and major retrospectives.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 border border-purple-200">
                    12 exhibitions
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

          <Link
            to="/cafes"
            className="block rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Coffee className="w-6 h-6 text-amber-700" />
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Remarkable Cafés
                  </h2>
                </div>
                <p className="text-sm text-zinc-700 mb-3">
                  10 outstanding specialty coffee spots across Berlin. 
                  Third-wave pioneers, hidden gems, and the best beans in town.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 border border-amber-200">
                    10 cafés
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-amber-200">
                    €€–€€€
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-amber-200">
                    Specialty coffee
                  </span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-amber-700 shrink-0 ml-4" />
            </div>
          </Link>

          <Link
            to="/bar-hopping"
            className="block rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Wine className="w-6 h-6 text-rose-700" />
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Bar-Hopping Route
                  </h2>
                </div>
                <p className="text-sm text-zinc-700 mb-3">
                  5 non-smoking bars from Schöneberg → Kreuzberg → Wrangelkiez → Mitte. 
                  Perfect Friday/Saturday night route with bike & BVG connections.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                  <span className="rounded-full bg-white px-2 py-1 border border-rose-200">
                    5 bars
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-rose-200">
                    €–€€
                  </span>
                  <span className="rounded-full bg-white px-2 py-1 border border-rose-200">
                    40 min bike time
                  </span>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-rose-700 shrink-0 ml-4" />
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
