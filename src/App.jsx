import React, { useMemo, useState } from "react";
import { Share2, MapPin, Clock, Bike, Footprints, ExternalLink } from "lucide-react";

const STOPS = [
  { name: "Not Too Sweet – Neukölln", category: "Curated vintage", price: "€€", address: "Bürknerstraße 6, 12047 Berlin", kiez: "Neukölln", highlights: ["Flagship store", "Y2K & designer upcycling"], officialUrl: "https://www.nottoosweetvintage.com/pages/neukoelln" },
  { name: "Sing Blackbird", category: "Vintage clothing", price: "€€", address: "Sanderstraße 11, 12047 Berlin", kiez: "Neukölln", highlights: ["Local favorite", "90s–00s pieces"], officialUrl: "https://www.instagram.com/singblackbirdvintage/" },
  { name: "Let Them Eat Cake", category: "Vintage clothing", price: "€€", address: "Weserstraße 164, 12045 Berlin", kiez: "Neukölln", highlights: ["Swedish-run boutique", "Coats, denim & accessories"], officialUrl: "https://letthemeatcakeberlin.wordpress.com/" },
  { name: "Ironic Gallery", category: "Designer & Y2K", price: "€€€", address: "Flughafenstraße 24, 12053 Berlin", kiez: "Neukölln", highlights: ["Bold designer mix", "Magazines & art books"], officialUrl: "https://ironicgallery.com/" },
  { name: "Not Too Sweet – Kreuzberg", category: "Curated vintage", price: "€€", address: "Oranienstraße 196, 10999 Berlin", kiez: "Kreuzberg", highlights: ["Second location", "Emerging designers"], officialUrl: "https://www.nottoosweetvintage.com/pages/kreuzberg" },
  { name: "Paul’s Chapter Mitte", category: "Streetwear & denim", price: "€€", address: "Torstraße 70/76, 10119 Berlin", kiez: "Mitte", highlights: ["90s streetwear", "Levi’s & jackets"], officialUrl: "https://www.instagram.com/paulschaptermitte/" },
  { name: "rack ’n white (charity club)", category: "Charity vintage", price: "€", address: "Brunnenstraße 12, 10119 Berlin", kiez: "Mitte", highlights: ["All profit to charity", "Great basics"], officialUrl: "https://www.instagram.com/racknwhite/" },
  { name: "Paul’s Boutique & GOO", category: "Vintage & designer", price: "€€–€€€", address: "Oderberger Straße 47, 10435 Berlin", kiez: "Prenzlauer Berg", highlights: ["Huge sneaker/denim wall (Paul’s)", "Curated designer next door (GOO)"], officialUrl: "https://www.instagram.com/paulsboutiqueberlin/" },
  { name: "No Socks No Panties", category: "Consignment & vintage", price: "€", address: "Stargarder Straße 10, 10437 Berlin", kiez: "Prenzlauer Berg", highlights: ["Rotating local consignments", "Bags & dresses"], officialUrl: "https://www.nosocksnopanties.de/" },
  { name: "V Vintage Fashion", category: "Mixed vintage", price: "€€", address: "Warschauer Straße 76, 10243 Berlin", kiez: "Friedrichshain", highlights: ["Jeans & jackets", "Sneakers upstairs"], officialUrl: "https://www.instagram.com/vvintage_fashion/" }
];

function mapsSearchUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function mapsRouteUrl(stops) {
  const waypoints = stops.slice(0, -1).map(s => encodeURIComponent(s.address)).join("%7C");
  const destination = encodeURIComponent(stops[stops.length - 1].address);
  return `https://www.google.com/maps/dir/?api=1&travelmode=bicycling&waypoints=${waypoints}&destination=${destination}`;
}

export default function App() {
  const [mode, setMode] = useState("bike");
  const routeUrl = useMemo(() => mapsRouteUrl(STOPS), []);

  const handleShare = async () => {
    const url = window.location.href;
    const title = "Berlin Vintage Tour";
    const text = "Up to 10 great second‑hand & vintage shops – optimized for biking/walking.";
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
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Berlin Vintage Tour</h1>
          <button onClick={handleShare} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm shadow-sm bg-white hover:bg-zinc-50">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </header>

      <section className="max-w-screen-md mx-auto px-4 pt-6 pb-4">
        <div className="rounded-2xl bg-zinc-100 p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-zinc-700 leading-relaxed">
            A compact, bike‑friendly loop through Neukölln → Kreuzberg → Mitte → Prenzlauer Berg → Friedrichshain. 
            Expect ~3–4 hours by bike (a bit longer on foot). Tap any stop to open it in Google Maps.
          </p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => setMode("bike")} className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border ${mode === "bike" ? "bg-white shadow" : "bg-zinc-200"}`}>
              <Bike className="w-4 h-4" /> Bike
            </button>
            <button onClick={() => setMode("walk")} className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border ${mode === "walk" ? "bg-white shadow" : "bg-zinc-200"}`}>
              <Footprints className="w-4 h-4" /> Walk
            </button>
            <a href={routeUrl} target="_blank" className="ml-auto inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-zinc-50">
              <MapPin className="w-4 h-4" /> Open full route
            </a>
          </div>
        </div>
      </section>

      <ol className="max-w-screen-md mx-auto px-4 pb-16 space-y-4">
        {STOPS.map((s, i) => (
          <li key={s.name}>
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white font-semibold">{i + 1}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold leading-tight">{s.name}</h3>
                    <span className="text-xs rounded-full bg-zinc-100 px-2 py-0.5 border">{s.category}</span>
                    <span className="text-xs rounded-full bg-zinc-100 px-2 py-0.5 border">{s.price}</span>
                    <span className="text-xs rounded-full bg-zinc-100 px-2 py-0.5 border">{s.kiez}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-zinc-700 flex-wrap">
                    <MapPin className="w-4 h-4" />
                    <span>{s.address}</span>
                  </div>
                  <ul className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-700">
                    {s.highlights.map(h => (
                      <li key={h} className="rounded-full bg-zinc-100 px-2 py-0.5 border">{h}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex gap-2">
                    <a href={mapsSearchUrl(s.address)} target="_blank" className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-zinc-50">
                      <MapPin className="w-4 h-4" /> Open in Maps
                    </a>
                    {s.officialUrl && (
                      <a href={s.officialUrl} target="_blank" className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-zinc-50">
                        <ExternalLink className="w-4 h-4" /> Official
                      </a>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1 text-xs text-zinc-500">
                      <Clock className="w-4 h-4" /> ~{mode === "bike" ? "10–15 min" : "12–20 min"} to next
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <footer className="max-w-screen-md mx-auto px-4 pb-24 text-center text-xs text-zinc-500">
        Built for friends ✨ — optimized for phones. Tap “Share” above to post into WhatsApp.
      </footer>
    </main>
  );
}


