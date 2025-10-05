import React from "react";
import { Share2, MapPin, Clock, ExternalLink, ChevronLeft, Wine, Euro, Bike } from "lucide-react";
import { Link } from "react-router-dom";

const BARS = [
  {
    id: 1,
    name: "Fabelei",
    district: "Schöneberg",
    address: "Kyffhäuserstraße 21, 10781 Berlin",
    hours: "Tue–Sat 18:00–01:00",
    price: "€€",
    highlights: "Creative signature drinks; warm lighting and marble bar; no smoking",
    type: "Cocktail bar / elegant",
    website: "https://fabelei.com",
    hasWebsite: true,
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipMSSERVQ44SfBq3JWuSC3xgS5QXgHB5FPC1fX0C=s680-w680-h510-rw"
  },
  {
    id: 2,
    name: "Bar Nonno",
    district: "Schöneberg", 
    address: "Akazienstraße 7A, 10823 Berlin",
    hours: "Mon–Thu 17:00–00:00 · Fri–Sat 17:00–01:00",
    price: "€€",
    highlights: "Aperitivo plates, Lambrusco, \"Nonno Spritz\"; laid-back Italian vibe; no smoking",
    type: "Italian aperitivo / cozy wine bar",
    website: null,
    hasWebsite: false,
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNzo--Q1Nebh8UbD2JpKi7k-g6_7jCoYYcOXpxY=s680-w680-h510-rw"
  },
  {
    id: 3,
    name: "ORA",
    district: "Kreuzberg",
    address: "Oranienplatz 14, 10999 Berlin", 
    hours: "Tue–Sat 17:00–00:00",
    price: "€€",
    highlights: "Seasonal cocktails & wines; candlelight in old pharmacy; no smoking",
    type: "Wine bar / historic apothecary",
    website: "https://ora.berlin",
    hasWebsite: true,
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPIVKan8q36OQePIPYVL4sqPOJIL9kkFgF0of7U=s680-w680-h510-rw"
  },
  {
    id: 4,
    name: "Hopfenreich",
    district: "Wrangelkiez",
    address: "Sorauer Str. 31, 10997 Berlin",
    hours: "Daily 17:00–01:00", 
    price: "€",
    highlights: "22 taps of German & international craft beer; first craft beer bar in Berlin; non-smoking inside",
    type: "Craft beer bar / casual pub",
    website: "https://hopfenreich.de",
    hasWebsite: true,
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nregGDzVFdyXWsVZF8qAegeV-3RuahdIVM3vHTBKJJabABx8jN4XvYclDk4NqUxpruqIRdlFxC8Xba4cKsPXLfiGywHB2MGo96EBgJILjM-XDrrUlH2x196b49z2FabcLNfbARD=s680-w680-h510-rw"
  },
  {
    id: 5,
    name: "Bar Milano",
    district: "Mitte",
    address: "Brunnenstraße 11, 10119 Berlin",
    hours: "Tue–Sun 18:00–01:00",
    price: "€€", 
    highlights: "Classic Italian aperitifs & negronis; intimate retro interior; non-smoking",
    type: "Aperitivo / cocktail bar",
    website: "https://www.barmilanoberlin.com",
    hasWebsite: true,
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npF2mwyP3KStgaanf6tdEP3fN_PpFK50K5wcsTXDkqn3q23ov0h5DHRVOSyy6a1N2AWSISHweFAcDdfQ24GK8s3nzPnnL4JhAzjx_RLSpzwUDf1UlcIgn2WTvrpk5ty3NAz58F5Cg=s680-w680-h510-rw"
  }
];

const ROUTE_LEGS = [
  { from: "Fabelei", to: "Bar Nonno", time: "≈ 10 min", mode: "Bike / U7" },
  { from: "Bar Nonno", to: "ORA", time: "≈ 15 min", mode: "Bike / U1" },
  { from: "ORA", to: "Hopfenreich", time: "≈ 5 min", mode: "Walk" },
  { from: "Hopfenreich", to: "Bar Milano", time: "≈ 18 min", mode: "Bike / U1 → U8" }
];

function mapsSearchUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function BarHopping() {
  const handleShare = async () => {
    const url = window.location.href;
    const title = "Berlin Bar-Hopping Route";
    const text = "5 non-smoking bars across Schöneberg → Kreuzberg → Wrangelkiez → Mitte";
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
            <h1 className="text-lg font-semibold tracking-tight">Bar-Hopping Route</h1>
            <Wine className="w-5 h-5 text-rose-700" />
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
            Curated <strong>bar-hopping route</strong> across 5 non-smoking bars from Schöneberg to Mitte. 
            All legs ≤ 20 min by bike or BVG. Perfect for Friday or Saturday night starting around 19:30.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-700">
            <div className="inline-flex items-center gap-2">
              <Wine className="w-4 h-4" />
              <span>5 bars</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Euro className="w-4 h-4" />
              <span>€–€€</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Bike className="w-4 h-4" />
              <span>40 min total bike time</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-4 pb-3">
        <p className="text-xs text-rose-800 bg-rose-50 rounded-lg px-3 py-2 border border-rose-200">
          <strong>🍸 Pro tip:</strong> Start at Fabelei around 19:30 for a relaxed beginning. All bars are non-smoking indoors!
        </p>
      </div>

      <ol className="max-w-screen-md mx-auto px-4 pb-16 space-y-4">
        {BARS.map((bar) => (
          <li key={bar.id}>
             <div className="rounded-2xl border border-rose-200 bg-white shadow-sm overflow-hidden">
               <a 
                 href={bar.imageUrl} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden group"
               >
                 <img 
                   src={bar.imageUrl} 
                   alt={bar.name}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                   loading="lazy"
                   onError={(e) => {
                     e.target.style.display = 'none';
                   }}
                 />
                 <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white font-semibold shadow-lg">
                   {bar.id}
                 </div>
               </a>

              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-base font-semibold leading-tight mb-1">{bar.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs rounded-full bg-rose-100 px-2 py-0.5 border border-rose-300">
                      {bar.district}
                    </span>
                    <span className="text-xs rounded-full bg-pink-50 px-2 py-0.5 border border-pink-200">
                      {bar.price}
                    </span>
                    <span className="text-xs rounded-full bg-rose-50 px-2 py-0.5 border border-rose-200">
                      {bar.type}
                    </span>
                  </div>
                </div>

                <div className="mb-2 flex items-start gap-2 text-sm text-zinc-700">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{bar.address}</span>
                </div>

                <div className="mb-2 flex items-start gap-2 text-sm text-zinc-700">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{bar.hours}</span>
                </div>

                <p className="mb-3 text-sm text-zinc-700 leading-relaxed">
                  {bar.highlights}
                </p>

                <div className="flex flex-wrap gap-2">
                  <a 
                    href={mapsSearchUrl(bar.address)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-rose-50"
                  >
                    <MapPin className="w-4 h-4" /> Maps
                  </a>
                  {bar.hasWebsite && (
                    <a 
                      href={bar.website} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-rose-50"
                    >
                      <ExternalLink className="w-4 h-4" /> Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="max-w-screen-md mx-auto px-4 pb-8">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <Bike className="w-4 h-4" /> Route Overview
          </h3>
          <div className="space-y-2">
            {ROUTE_LEGS.map((leg, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-rose-200 text-rose-800 text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                  <span className="text-zinc-700">{leg.from} → {leg.to}</span>
                </div>
                <div className="text-right">
                  <div className="text-zinc-600">{leg.time}</div>
                  <div className="text-xs text-zinc-500">{leg.mode}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-rose-200">
            <a 
              href="https://www.google.com/maps/dir/Fabelei,+Kyffh%C3%A4userstra%C3%9Fe+21,+10781+Berlin/Bar+Nonno,+Akazienstra%C3%9Fe+7A,+10823+Berlin/ORA,+Oranienplatz+14,+10999+Berlin/Hopfenreich,+Sorauer+Str.+31,+10997+Berlin/Bar+Milano,+Brunnenstra%C3%9Fe+11,+10119+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-rose-50"
            >
              <MapPin className="w-4 h-4" /> View Full Route
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-screen-md mx-auto px-4 pb-8">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Wine className="w-4 h-4" /> Notes
          </h3>
          <ul className="space-y-1 text-xs text-zinc-700">
            <li><strong>Non-smoking:</strong> All bars on this route are non-smoking indoors, perfect for those who prefer clean air.</li>
            <li><strong>Transportation:</strong> Route optimized for bike and BVG. Total bike time ≈ 40 minutes across all legs.</li>
            <li><strong>Timing:</strong> Suggested start around 19:30 at Fabelei for a relaxed evening progression.</li>
          </ul>
        </div>
      </section>

      <footer className="max-w-screen-md mx-auto px-4 pb-24 text-center text-xs text-zinc-500">
        Built for friends ✨ — Optimized for phones. Tap "Share" to post into WhatsApp.
      </footer>
    </main>
  );
}
