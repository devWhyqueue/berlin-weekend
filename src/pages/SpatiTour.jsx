import React, { useMemo } from "react";
import { Share2, MapPin, Clock, Beer, ExternalLink, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const STOPS = [
  {
    name: "Spätkauf Choriner Straße",
    subtitle: "Nostalgic neighbourhood späti",
    address: "Choriner Straße 12, 10119 Berlin",
    kiez: "Prenzlauer Berg",
    highlights: ["Quaint nostalgic charm", "Date-night vibes", "Outdoor seating"],
    hours: "Mon–Sat 11:00–00:00, Sun 11:00–23:00",
    description: "Corner-späti known for its nostalgic charm right on the border between Mitte and Prenzlauer Berg. Locals enjoy beers or aperitifs on chairs outside.",
    walkToNext: "~7 min (0.5 km)"
  },
  {
    name: "Rosenthaler Späti",
    subtitle: "Classic Mitte corner shop",
    address: "Rosenthaler Straße 51, 10178 Berlin",
    kiez: "Mitte",
    highlights: ["Echt Klassiker in Mitte", "Familial atmosphere", "Popular meeting point"],
    hours: "Mo–Fr until 00:00, Sa until 02:00, Su 09:00–23:00",
    description: "Classic späti that has been supplying the neighbourhood for years. The familial atmosphere makes it a popular meeting point.",
    walkToNext: "~22 min (1.7 km)"
  },
  {
    name: "East Shop Berlin Späti Kiosk",
    subtitle: "Scenic canal-side späti",
    address: "Fischerinsel 6, 10179 Berlin",
    kiez: "Mitte / Fischerinsel",
    highlights: ["Canal-side location", "Friendly staff", "Outdoor seating"],
    hours: "Daily 08:00–00:00",
    description: "Beloved local kiosk praised for its friendly atmosphere and good selection at reasonable prices. Outdoor seating lets you enjoy drinks by the canal.",
    officialUrl: "https://eastshopberlin.de",
    walkToNext: "~29 min (2.2 km)"
  },
  {
    name: "Admirals Kiosk",
    subtitle: "Cult späti by the Landwehrkanal",
    address: "Grimmstraße 29, 10967 Berlin",
    kiez: "Kreuzberg",
    highlights: ["Legendary Admiralbrücke spot", "20+ years institution", "Best beer selection"],
    hours: "Daily 08:00–00:00",
    description: "One of Berlin's best späti spots for 20+ years. The place to stock up before relaxing on Admiralbrücke. Seven wooden ships hang from the walls.",
    walkToNext: "~26 min (2.0 km)"
  },
  {
    name: "Café Tinto",
    subtitle: "24-hour café-cum-späti",
    address: "Mehringdamm 39, 10961 Berlin",
    kiez: "Kreuzberg",
    highlights: ["Open 24/7", "Coffee & beer combo", "Night-owl friendly"],
    hours: "24/7",
    description: "Run by Ertan Sönmez since 2010. Choose between coffee and cake or beer. Tables outside for watching bustling Mehringdamm. Popular with taxi drivers and night-owls.",
    walkToNext: "Tour complete! 🎉"
  }
];

function mapsSearchUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function mapsRouteUrl(stops) {
  const addresses = stops.map(s => s.address);
  const waypoints = addresses.slice(0, -1).map(a => encodeURIComponent(a)).join("%7C");
  const destination = encodeURIComponent(addresses[addresses.length - 1]);
  return `https://www.google.com/maps/dir/?api=1&travelmode=walking&waypoints=${waypoints}&destination=${destination}`;
}

export default function SpatiTour() {
  const routeUrl = useMemo(() => mapsRouteUrl(STOPS), []);

  const handleShare = async () => {
    const url = window.location.href;
    const title = "Berlin Späti Walking Tour";
    const text = "Evening späti tour through Prenzlauer Berg → Mitte → Kreuzberg (~2.5–3 hours)";
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
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-zinc-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-amber-200">
        <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-zinc-600 hover:text-zinc-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-semibold tracking-tight">Berlin Späti Tour</h1>
            <Beer className="w-5 h-5 text-amber-600" />
          </div>
          <button 
            onClick={handleShare} 
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm shadow-sm bg-white hover:bg-amber-50"
          >
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </header>

      <section className="max-w-screen-md mx-auto px-4 pt-6 pb-4">
        <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-zinc-800 leading-relaxed mb-3">
            An evening walking tour through <strong>Prenzlauer Berg → Mitte → Kreuzberg</strong>. 
            Visit 5 iconic spätis and enjoy Berlin's unique late-night culture.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-700">
            <div className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>~2.5–3 hours</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>~6 km walking</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Beer className="w-4 h-4" />
              <span>5 stops</span>
            </div>
          </div>
          <div className="mt-3">
            <a 
              href={routeUrl} 
              target="_blank" 
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-amber-50"
            >
              <MapPin className="w-4 h-4" /> Open full route in Maps
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-4 pb-3">
        <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 border border-amber-200">
          <strong>💡 Pro tip:</strong> Start around 20:00 as evening light fades. Most spätis close at midnight, so pace yourself!
        </p>
      </div>

      <ol className="max-w-screen-md mx-auto px-4 pb-16 space-y-4">
        {STOPS.map((s, i) => (
          <li key={s.name}>
            <div className="rounded-2xl border border-amber-200 bg-white shadow-sm p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white font-semibold">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold leading-tight">{s.name}</h3>
                      <p className="text-sm text-amber-700 font-medium">{s.subtitle}</p>
                    </div>
                    <span className="text-xs rounded-full bg-amber-100 px-2 py-0.5 border border-amber-300 whitespace-nowrap">
                      {s.kiez}
                    </span>
                  </div>
                  
                  <div className="mt-2 flex items-start gap-2 text-sm text-zinc-700">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{s.address}</span>
                  </div>

                  <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                    {s.highlights.map(h => (
                      <li key={h} className="rounded-full bg-amber-50 px-2 py-1 border border-amber-200 text-zinc-700">
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 text-xs text-zinc-600">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {s.hours}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <a 
                      href={mapsSearchUrl(s.address)} 
                      target="_blank" 
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-amber-50"
                    >
                      <MapPin className="w-4 h-4" /> Maps
                    </a>
                    {s.officialUrl && (
                      <a 
                        href={s.officialUrl} 
                        target="_blank" 
                        className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-amber-50"
                      >
                        <ExternalLink className="w-4 h-4" /> Website
                      </a>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1 text-xs text-zinc-500">
                      {s.walkToNext}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="max-w-screen-md mx-auto px-4 pb-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Beer className="w-4 h-4" /> Backup Spätis
          </h3>
          <p className="text-xs text-zinc-700 mb-2">If a stop is closed, try these:</p>
          <ul className="space-y-1 text-xs text-zinc-700">
            <li><strong>E4 Späti</strong> — Eberswalder Str. 4, Prenzlauer Berg (€1 beers, open until 02:00)</li>
            <li><strong>Der Laden</strong> — Bänschstraße 51, Friedrichshain (24h weekdays, large selection)</li>
            <li><strong>Späti International</strong> — Weserstraße 190, Neukölln (community vibe, 10:00–02:00)</li>
          </ul>
        </div>
      </section>

      <footer className="max-w-screen-md mx-auto px-4 pb-24 text-center text-xs text-zinc-500">
        Built for friends ✨ — Optimized for phones. Tap "Share" to post into WhatsApp.
      </footer>
    </main>
  );
}
