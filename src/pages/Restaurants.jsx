import React from "react";
import { Share2, MapPin, Clock, ExternalLink, ChevronLeft, Utensils, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const RESTAURANTS = [
  {
    id: 1,
    name: "Dervish",
    district: "Friedrichshain",
    address: "Krossener Straße 16, 10245 Berlin",
    hours: "Tue–Thu 17:00–23:00, Fri 14:00–23:00, Sat & Sun 10:00–23:00, Mon closed",
    price: "€€",
    highlights: "Vegan Uzbek / Central Asian cuisine; set menus, nomadic flavors, brunch weekends",
    imageUrl: "/berlin-weekend/images/restaurants/dervish.jpg",
    website: "https://dervish.eu",
  },
  {
    id: 2,
    name: "VEG'D – Vegan Burgers",
    district: "Friedrichshain (Boxhagener Str. branch)",
    address: "Boxhagener Str. 21, 10245 Berlin",
    hours: "Daily ~12:00–21:30 / 22:00",
    price: "€€",
    highlights: "Vegan gourmet burgers, homemade sauces, variety of patties & sides",
    imageUrl: "/berlin-weekend/images/restaurants/vegd-vegan-burgers.jpg",
    website: "https://www.vegd.eu",
  },
  {
    id: 3,
    name: "Yoyo Foodworld",
    district: "Friedrichshain",
    address: "Gärtnerstraße 27, 10245 Berlin",
    hours: "Mon–Sun 12:00–22:00",
    price: "€",
    highlights: "Vegan fast food: burgers, wraps, vegan currywurst, fried snacks & pizzas",
    imageUrl: "/berlin-weekend/images/restaurants/yoyo-foodworld.jpg",
    website: "https://www.yoyofoodworld-berlin.de",
  },
  {
    id: 4,
    name: "Rüya Gemüse Kebap",
    district: "Charlottenburg",
    address: "Otto-Suhr-Allee 19, 10585 Berlin",
    hours: "Mon–Sat ~ 11:30–20:00, Sun closed (verify locally)",
    price: "€",
    highlights: "Popular chicken & vegetable döner; fresh ingredients, multiple bread choices",
    imageUrl: "/berlin-weekend/images/restaurants/ruya-gemuse-kebap.jpg",
    website: "",
  },
  {
    id: 5,
    name: "La Stella Nera",
    district: "Neukölln",
    address: "Leykestraße 18, 12053 Berlin",
    hours: "Tue–Sun 17:00–23:00, closed Mon",
    price: "€€",
    highlights: "Vegan Neapolitan pizza from wood-oven, vegan desserts, cozy vegan spot",
    imageUrl: "/berlin-weekend/images/restaurants/la-stella-nera.jpg",
    website: "https://www.lastellanera.de",
  },
  {
    id: 6,
    name: "Tianfuzius",
    district: "Schöneberg",
    address: "Regensburger Straße 1, 10777 Berlin",
    hours: "Tue–Fri 12:00–15:30 & 17:30–23:00, Sat–Sun 12:00–23:00, Mon closed",
    price: "€€",
    highlights: "Vegetarian / vegan Chinese / Sichuan style; dim sum, spicy & mild options",
    imageUrl: "/berlin-weekend/images/restaurants/tianfuzius.jpg",
    website: "https://tianfuzius.de",
  },
];

function mapsSearchUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function Restaurants() {
  const handleShare = async () => {
    const url = window.location.href;
    const title = "Berlin Restaurants Guide";
    const text = "6 great restaurants in Berlin (veggie-friendly)";
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      }
    } catch (_) {}
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-zinc-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-rose-200">
        <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-zinc-600 hover:text-zinc-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-semibold tracking-tight">Berlin Restaurants</h1>
            <Utensils className="w-5 h-5 text-rose-700" />
          </div>
          <button 
            onClick={handleShare} 
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm shadow-sm bg-white hover:bg-rose-50"
          >
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </header>

      <section className="max-w-screen-md mx-auto px-4 pt-6 pb-4">
        <div className="rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-zinc-800 leading-relaxed mb-3">
            Curated list of veggie-friendly restaurants across Berlin: kebap legends, vegan pizza, Sichuan classics, and more.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-700">
            <div className="inline-flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              <span>{RESTAURANTS.length} places</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Euro className="w-4 h-4" />
              <span>€–€€</span>
            </div>
          </div>
        </div>
      </section>

      <ol className="max-w-screen-md mx-auto px-4 pb-16 space-y-4">
        {RESTAURANTS.map((r) => (
          <li key={r.id}>
            <div className="rounded-2xl border border-rose-200 bg-white shadow-sm overflow-hidden">
              <a 
                href={r.imageUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden group"
              >
                <img 
                  src={r.imageUrl} 
                  alt={r.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white font-semibold shadow-lg">
                  {r.id}
                </div>
              </a>

              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-base font-semibold leading-tight mb-1">{r.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs rounded-full bg-rose-100 px-2 py-0.5 border border-rose-300">
                      {r.district}
                    </span>
                    <span className="text-xs rounded-full bg-pink-50 px-2 py-0.5 border border-pink-200">
                      {r.price}
                    </span>
                  </div>
                </div>

                <div className="mb-2 flex items-start gap-2 text-sm text-zinc-700">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{r.address}</span>
                </div>

                <div className="mb-2 flex items-start gap-2 text-sm text-zinc-700">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{r.hours}</span>
                </div>

                <p className="mb-3 text-sm text-zinc-700 leading-relaxed">
                  {r.highlights}
                </p>

                <div className="flex flex-wrap gap-2">
                  <a 
                    href={mapsSearchUrl(r.address)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-rose-50"
                  >
                    <MapPin className="w-4 h-4" /> Maps
                  </a>
                  <a 
                    href={r.website || mapsSearchUrl(r.name)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-rose-50"
                  >
                    <ExternalLink className="w-4 h-4" /> Website
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <footer className="max-w-screen-md mx-auto px-4 pb-24 text-center text-xs text-zinc-500">
        Built for friends ✨ — Optimized for phones.
      </footer>
    </main>
  );
}


