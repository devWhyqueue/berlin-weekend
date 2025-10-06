import React from "react";
import { Link } from "react-router-dom";
import { Share2, ChevronLeft, Music2, Ticket, Clock, BadgeEuro, Sparkles, ExternalLink } from "lucide-react";

/**
 * @typedef {Object} ClubEvent
 * @property {number} id
 * @property {string} title
 * @property {string} venueDistrict
 * @property {string} dateTime
 * @property {string} genre
 * @property {string} lineup
 * @property {string} price
 * @property {string} posterUrl
 * @property {string} notes
 */

/**
 * Build the curated list of club events from clubs.md research.
 * @returns {ClubEvent[]}
 */
function getClubEvents() {
  return [
    {
      id: 1,
      title: "HIVE × Devoted — DSTRKT (Berlin-North / Prenzlauer Berg)",
      venueDistrict: "Prenzlauer Berg area",
      dateTime: "Sat 11 Oct 2025 · 23:00 – late",
      genre: "Industrial / groovy techno, warehouse",
      lineup: "OMAKS · Kø:lab · Arman John · 4NOUK · SIKOTI · Laviena · SEKTOR69 · DJ Achim Feuervogel · DJ Tallboy · Amo (IT) · GEORGE aka Dr.Radsport",
      price: "€25",
      posterUrl: "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYmFmYjVkMDVlOGY1N2JiODMwZGRkNGVhNDQzMTJkMzZjNTBhNTU4MS5qcGc=",
      url: "https://de.ra.co/events/2089552",
      notes: "Massive underground night; slightly above €20 budget but strong independent lineup."
    },
    {
      id: 2,
      title: "Tresor meets Klasse Wrecks — Tresor (Mitte)",
      venueDistrict: "Mitte",
      dateTime: "Fri 10 Oct 2025 · 23:00 – late",
      genre: "Raw techno / electro / live sets",
      lineup: "Globus: Luca Lozano · Mr. Ho · B.AI · Tresor: Aoife · Boston 168 (LIVE) · DJ Plant Texture",
      price: "€20",
      posterUrl: "https://imgproxy.ra.co/_/quality:66/w:1028/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vY2EyY2IwMDZiNDkxMDAyM2ExOTgzOGI5YmRiOGIyYjkyYjE0OGNkZC5qcGc=",
      url: "https://de.ra.co/events/2249629",
      notes: "Label-night synergy — core Berlin techno energy across Globus & Tresor floors."
    },
    {
      id: 3,
      title: "We Are Not Alone — RSO.BERLIN (Treptow)",
      venueDistrict: "Treptow",
      dateTime: "Fri 10 Oct 2025 · 23:00 – ≈ Sun 15:00 (56 h)",
      genre: "Hard techno / industrial",
      lineup: "Curated by Ellen Allien · Juliana Huxtable · Slimfit · Alizée Gavory + many more across 4 floors",
      price: "€20.5",
      posterUrl: "https://imgproxy.ra.co/_/quality:66/w:1028/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vNWQ5OWExYjk1NjE1ZmYwZTE1Yzc2NThiYTRiZjAwNDIxOWNhZDY4NC5qcGc=",
      url: "https://de.ra.co/events/2244274",
      notes: "RA Pick · 56 hours of nonstop techno — massive crowd, flagship of the weekend."
    },
    {
      id: 4,
      title: "20 YEARS VISION — Gretchen (Kreuzberg)",
      venueDistrict: "Kreuzberg",
      dateTime: "Sat 11 Oct 2025 · 23:00 – late",
      genre: "Drum & Bass / Breakbeat Anniversary",
      lineup: "Box 1: VIER · Ivy Lab · gyrofield · Bukez Finezt · Box 2: Fire at Work (LIVE) · KaraKara · SKVLLFACE · Kenzura b2b Rabbi Green · GRAU · Saint Popsy b2b SKVLLFACE b2b Jesh b2b Dubshroud",
      price: "€20.35 (door)",
      posterUrl: "https://imgproxy.ra.co/_/quality:66/w:1028/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYzQ3YmZhMzhiMjU2NmRjOGQ3MzFlMjNhNjJjOTk1ZDMyZDY2NzUwYS5qcGc=",
      url: "https://de.ra.co/events/2254699",
      notes: "Major D&B birthday bash — two rooms of international headliners, tight €20 cap."
    },
    {
      id: 5,
      title: "Particles at Night — Zenner (Treptower Park)",
      venueDistrict: "Treptower Park",
      dateTime: "Sat 11 Oct 2025 · 22:00 – late",
      genre: "Deep / hypnotic techno · house",
      lineup: "Jane Fitz b2b Marco Shuttle (8-hour set) + Particles crew",
      price: "€26",
      posterUrl: "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vNWNmMTRjZjM4ZjRlMzA1MTVkN2VlNTk0N2Y0NDBkMmI4ZjRlY2Y2MS5qcGc=",
      url: "https://de.ra.co/events/2201958",
      notes: "Lakeside venue; long journey set for heads — above budget but outstanding musical quality."
    }
  ];
}

/**
 * Share the current page URL or fall back to copy.
 * @returns {Promise<void>}
 */
async function sharePage() {
  const url = window.location.href;
  const title = "Berlin Clubbing Picks";
  const text = "Curated electronic music events in Berlin — this weekend";
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  } catch (_) {}
}

/**
 * Mobile-friendly clubbing page with curated events.
 * @returns {JSX.Element}
 */
export default function Clubbing() {
  const events = getClubEvents();

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white text-zinc-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-indigo-200">
        <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-zinc-600 hover:text-zinc-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-semibold tracking-tight">Clubbing — This Weekend</h1>
            <Music2 className="w-5 h-5 text-indigo-700" />
          </div>
          <button 
            onClick={sharePage} 
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm shadow-sm bg-white hover:bg-indigo-50"
          >
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </header>

      <section className="max-w-screen-md mx-auto px-4 pt-6 pb-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-zinc-800 leading-relaxed mb-3">
            Handpicked <strong>electronic music & club events</strong> across Berlin for Oct 10–11, 2025. 
            Focus on value (≈ €20) and strong lineups; a few picks stretch the budget for exceptional quality.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-700">
            <div className="inline-flex items-center gap-2">
              <Music2 className="w-4 h-4" />
              <span>{events.length} events</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <BadgeEuro className="w-4 h-4" />
              <span>Target ≈ €20</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Curated, not exhaustive</span>
            </div>
          </div>
        </div>
      </section>

      <ol className="max-w-screen-md mx-auto px-4 pb-16 space-y-4">
        {events.map((ev) => (
          <li key={ev.id}>
            <div className="rounded-2xl border border-indigo-200 bg-white shadow-sm overflow-hidden">
              <a 
                href={ev.posterUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-br from-indigo-100 to-blue-100 overflow-hidden group"
              >
                <img 
                  src={ev.posterUrl} 
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold shadow-lg">
                  {ev.id}
                </div>
              </a>

              <div className="p-4">
                <h3 className="text-base font-semibold leading-tight mb-1">
                  {ev.title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-xs rounded-full bg-indigo-100 px-2 py-0.5 border border-indigo-300">
                    {ev.venueDistrict}
                  </span>
                  <span className="text-xs rounded-full bg-blue-50 px-2 py-0.5 border border-blue-200">
                    {ev.genre}
                  </span>
                </div>

                <div className="mb-2 flex items-start gap-2 text-sm text-zinc-700">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{ev.dateTime}</span>
                </div>

                <p className="mb-3 text-sm text-zinc-700 leading-relaxed">
                  {ev.lineup}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow">
                    <Ticket className="w-4 h-4" /> {ev.price}
                  </span>
                  {ev.url && (
                    <a
                      href={ev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-indigo-50"
                    >
                      <ExternalLink className="w-4 h-4" /> Event
                    </a>
                  )}
                </div>

                {ev.notes && (
                  <p className="mt-3 text-xs text-zinc-600">
                    {ev.notes}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="max-w-screen-md mx-auto px-4 pb-12">
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
          <h3 className="font-semibold text-sm mb-2">Notes</h3>
          <ul className="space-y-1 text-xs text-zinc-700">
            <li><strong>Budget:</strong> Aim for ≤ €20; some exceptional nights exceed slightly.</li>
            <li><strong>Arrival:</strong> Prime entry window is 00:00–02:00 for most venues.</li>
            <li><strong>Marathon:</strong> RSO runs all weekend — plan rest and hydration.</li>
          </ul>
        </div>
      </section>

      <footer className="max-w-screen-md mx-auto px-4 pb-24 text-center text-xs text-zinc-500">
        Built for friends ✨ — Optimized for phones. Tap "Share" to post into WhatsApp.
      </footer>
    </main>
  );
}


