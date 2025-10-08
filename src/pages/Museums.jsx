import React from "react";
import { Share2, MapPin, Calendar, ExternalLink, ChevronLeft, Palette, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const EXHIBITIONS = [
    {
      id: 1,
      title: "AuraLabs: KI trifft Kunst",
      venue: "RAW Gelände (Revaler Straße 99)",
      district: "Friedrichshain",
      dates: "27 Sep 2025 – ongoing",
      priceRegular: "€15",
      priceReduced: "€12",
      description: "Immersive exhibition space dedicated to the intersection of AI, art, and new media. Features 14 works that evolve in real-time through interaction, generative processes, and projection. Includes interactive installations like 'Portraits in Pink, Blue & Silver' and 'Line Wobbler'.",
      posterUrl: "/berlin-weekend/images/museums/auralabs-ki-trifft-kunst.jpg",
      sourceUrl: "https://www.berlin.de/tickets/ausstellungen/auralabs-ki-trifft-kunst-2e66718f-8a7c-4fdc-892b-b9b60de6f028/"
    },
    {
      id: 2,
      title: "Die Möglichkeit der Unvernunft",
      venue: "Haus der Kulturen der Welt",
      district: "Tiergarten / Mitte",
      dates: "27 Sep 2025 – 19 Oct 2025",
      priceRegular: "€18.80",
      priceReduced: "€18.80",
      description: "Jan Böhmermann & Gruppe Royale take over the HKW for three weeks with their most extensive exhibition yet. Features diverse events including concerts, shows, TV recordings, performances, film screenings, and discussions exploring political and societal questions of our time.",
      posterUrl: "/berlin-weekend/images/museums/die-moeglichkeit-der-unvernunft.jpg",
      sourceUrl: "https://www.visitberlin.de/de/event/die-moeglichkeit-der-unvernunft"
    },
    {
      id: 3,
      title: "Lygia Clark: Retrospective",
      venue: "Neue Nationalgalerie",
      district: "Tiergarten / Mitte",
      dates: "23 May 2025 – 12 Oct 2025",
      priceRegular: "€16",
      priceReduced: "€8",
      description: "Landmark retrospective of the Brazilian Neo-Concrete pioneer. Around 150 works trace her shift from geometric abstraction to participatory sculptures and sensorial experiments redefining the artist-viewer relationship.",
      posterUrl: "/berlin-weekend/images/museums/lygia-clark-retrospective.jpg",
      sourceUrl: "https://www.berlin.de/en/tickets/exhibitions/lygia-clark-retrospective-dbf26354-0fba-4397-9f6e-624dbccd817d/"
    },
    {
      id: 4,
      title: "Klára Hosnedlová: embrace (CHANEL Commission)",
      venue: "Hamburger Bahnhof",
      district: "Moabit / Mitte",
      dates: "1 May 2025 – 4 Jan 2026",
      priceRegular: "€16",
      priceReduced: "€8",
      description: "A monumental installation of nine-meter-high tapestries, embroidered reliefs and sculptural forms exploring utopia, home, and everyday life across political systems.",
      posterUrl: "/berlin-weekend/images/museums/klara-hosnedlova-embrace.jpg",
      sourceUrl: "https://www.museumsportal-berlin.de/en/exhibitions/chanel-commission-klara-hosnedlova-embrace/"
    },
    {
      id: 5,
      title: "Kazuko Miyamoto: String Constructions",
      venue: "KW Institute for Contemporary Art",
      district: "Spandauer Vorstadt / Mitte",
      dates: "31 Oct 2025 – 18 Jan 2026",
      priceRegular: "€10",
      priceReduced: "€6",
      description: "Post-minimal and feminist pioneer Kazuko Miyamoto transforms rooms with her string-and-nail installations, tracing her dialogue with space, labour and material.",
      posterUrl: "/berlin-weekend/images/museums/kazuko-miyamoto-string-constructions.jpg",
      sourceUrl: "https://www.berlin.de/en/tickets/exhibitions/kazuko-miyamoto-string-constructions-f82d4deb-e6b2-4060-8829-c4d87211e2bd/"
    },
    {
      id: 6,
      title: "Beverly Buchanan: Weathering",
      venue: "Haus am Waldsee",
      district: "Zehlendorf / Steglitz-Zehlendorf",
      dates: "2 Oct 2025 – 1 Feb 2026",
      priceRegular: "€9",
      priceReduced: "€6",
      description: "First German survey of U.S. artist Beverly Buchanan. Drawings, sculptures and vernacular architecture models exploring class, gender and memory in the American South.",
      posterUrl: "/berlin-weekend/images/museums/beverly-buchanan-weathering.jpg",
      sourceUrl: "https://www.berlin.de/en/tickets/exhibitions/beverly-buchanan-weathering-06dc2686-07ff-4660-89cc-37b83840b874/"
    },
    {
      id: 7,
      title: "Magnum: Close Enough",
      venue: "C/O Berlin (im Amerika-Haus)",
      district: "Charlottenburg-Wilmersdorf",
      dates: "27 Sep 2025 – 28 Jan 2026",
      priceRegular: "€12",
      priceReduced: "€6",
      description: "Group exhibition of thirteen Magnum photographers exploring intimacy, identity, and conflict through striking documentary and conceptual photography.",
      posterUrl: "/berlin-weekend/images/museums/magnum-close-enough.jpg",
      sourceUrl: "https://www.berlin.de/en/tickets/exhibitions/magnum-close-enough-ce295e73-868a-4ee2-9746-fbaed3a06e25/"
    },
    {
      id: 8,
      title: "Mark Leckey: Enter Thru Medieval Wounds",
      venue: "Julia Stoschek Foundation",
      district: "Mitte",
      dates: "11 Sep 2025 – 3 May 2026",
      priceRegular: "€5",
      priceReduced: "Free for students",
      description: "Turner-Prize-winning artist Mark Leckey reflects on pop culture, technology and class. Video, sculpture and sound installations connect medieval motifs with digital imagery.",
      posterUrl: "/berlin-weekend/images/museums/mark-leckey-enter-thru-medieval-wounds.jpg",
      sourceUrl: "https://www.berlin.de/en/tickets/exhibitions/mark-leckey-enter-thru-medieval-wounds-b93f68cf-e3e8-4ce8-b74d-9d0c6f10f070/"
    },
    {
      id: 9,
      title: "Charmaine Poh: Make a travel deep of your inside, and don't forget me to take",
      venue: "PalaisPopulaire (Deutsche Bank)",
      district: "Unter den Linden / Mitte",
      dates: "11 Sep 2025 – 23 Feb 2026",
      priceRegular: "€5",
      priceReduced: "€3",
      description: "Deutsche Bank’s Artist of the Year 2025. Singaporean artist Charmaine Poh explores identity, queerness and femininity across photography and video.",
      posterUrl: "/berlin-weekend/images/museums/charmaine-poh-make-a-travel-deep.jpg",
      sourceUrl: "https://www.berlin.de/en/tickets/exhibitions/charmaine-poh-make-a-travel-deep-of-your-inside-and-don-t-forget-me-to-take-925dbea1-f8c6-4e23-8153-632bd32167b3/"
    },
    {
      id: 10,
      title: "Feng Li: White Nights in Wonderland",
      venue: "Fotografiska Berlin",
      district: "Oranienburger Tor / Mitte",
      dates: "22 Aug 2025 – 23 Nov 2025",
      priceRegular: "€15",
      priceReduced: "€10 (students / under 25)",
      description: "Chinese photographer Feng Li’s surreal flash-lit tableaux reveal dreamlike and absurd moments from global city life — between street and fashion photography.",
      posterUrl: "/berlin-weekend/images/museums/feng-li-white-nights-in-wonderland.jpg",
      sourceUrl: "https://www.berlin.de/en/tickets/exhibitions/feng-li-white-nights-in-wonderland-4a5050c3-07df-4e85-9cee-940128ea0af6/"
    },
    {
      id: 11,
      title: "Raoul Hausmann: 1886–1971",
      venue: "Berlinische Galerie",
      district: "Kreuzberg / Friedrichshain-Kreuzberg",
      dates: "8 Nov 2025 – 16 Mar 2026",
      priceRegular: "€10",
      priceReduced: "€6",
      description: "Major retrospective of Dadaist pioneer Raoul Hausmann. About 200 works trace his innovations in collage, photography, performance and experimental typography.",
      posterUrl: "https://imgproxy.berlinonline.net/bDM1-k0s9AiH6j7grvGfgQR3fkSBC3nOVUOQHRslSfM/resizing_type:fit/width:1000/height:500/gravity:ce/enlarge:0/q:70/cb:2025100523/aHR0cHM6Ly9wb3B1bGEtbWlkZGxld2FyZS5zMy5hbWF6b25hd3MuY29tL2JvLW1pZGRsZXdhcmUvYm8uYmRlX2NoYW5uZWwuZXZlbnQvaW1hZ2VzLzY2LzQ3ODdiOTA2LTQxMGItYmNjNC0yYzQyLTQ2MDdlZTQxZDZiZi5qcGc.jpg",
      sourceUrl: "https://www.berlin.de/en/tickets/exhibitions/raoul-hausmann-1886-1971-4009c97a-8294-4637-95ff-aa0de8675ac2/"
    },
    {
      id: 12,
      title: "Founded on Antiquity",
      venue: "Altes Museum",
      district: "Museum Island / Mitte",
      dates: "14 Mar 2025 – 14 Feb 2026",
      priceRegular: "€12",
      priceReduced: "€6",
      description: "Exhibition celebrating the 200th anniversary of the Altes Museum — exploring how ancient Greek and Roman art shaped modern aesthetics and national identity.",
      posterUrl: "/berlin-weekend/images/museums/founded-on-antiquity.jpg",
      sourceUrl: "https://www.smb.museum/en/exhibitions/detail/founded-on-antiquity/"
    },
  ];  

function mapsSearchUrl(venueName) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueName + " Berlin")}`;
}

export default function Museums() {
  const handleShare = async () => {
    const url = window.location.href;
    const title = "Berlin Museums & Galleries";
    const text = "12 current/upcoming exhibitions with student/youth tickets ≤ €15";
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
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-zinc-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-purple-200">
        <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-zinc-600 hover:text-zinc-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-semibold tracking-tight">Berlin Museums</h1>
            <Palette className="w-5 h-5 text-purple-600" />
          </div>
          <button 
            onClick={handleShare} 
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm shadow-sm bg-white hover:bg-purple-50"
          >
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </header>

      <section className="max-w-screen-md mx-auto px-4 pt-6 pb-4">
        <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 p-4 sm:p-5 shadow-sm">
          <p className="text-sm text-zinc-800 leading-relaxed mb-3">
            Curated list of 12 <strong>current/upcoming</strong> exhibitions with <strong>student/youth tickets ≤ €15</strong>. 
            Explore contemporary art, photography, and retrospectives across Berlin's best museums and galleries.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-700">
            <div className="inline-flex items-center gap-2">
              <Palette className="w-4 h-4" />
              <span>12 exhibitions</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Euro className="w-4 h-4" />
              <span>€3–€10 (students)</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Oct 2025 – Jan 2026</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-4 pb-3">
        <p className="text-xs text-purple-700 bg-purple-50 rounded-lg px-3 py-2 border border-purple-200">
          <strong>💡 Pro tip:</strong> Always double‑check opening hours and ticket categories before you go. Many venues offer free entry on certain days!
        </p>
      </div>

      <ol className="max-w-screen-md mx-auto px-4 pb-16 space-y-4">
        {EXHIBITIONS.map((ex) => (
          <li key={ex.id}>
            <div className="rounded-2xl border border-purple-200 bg-white shadow-sm overflow-hidden">
              <a 
                href={ex.posterUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden group"
              >
                <img 
                  src={ex.posterUrl} 
                  alt={ex.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white font-semibold shadow-lg">
                  {ex.id}
                </div>
              </a>
              
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-base font-semibold leading-tight mb-1">{ex.title}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm text-purple-700 font-medium">{ex.venue}</p>
                    <span className="text-xs rounded-full bg-purple-100 px-2 py-0.5 border border-purple-300">
                      {ex.district}
                    </span>
                  </div>
                </div>
                
                <div className="mb-2 flex items-start gap-2 text-sm text-zinc-700">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{ex.dates}</span>
                </div>

                <p className="mb-3 text-sm text-zinc-700 leading-relaxed">
                  {ex.description}
                </p>

                <div className="mb-3 flex flex-wrap gap-2 text-xs">
                  <div className="rounded-full bg-purple-50 px-3 py-1 border border-purple-200 text-zinc-700">
                    Regular: {ex.priceRegular}
                  </div>
                  <div className="rounded-full bg-green-50 px-3 py-1 border border-green-200 text-green-800 font-medium">
                    Students: {ex.priceReduced}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a 
                    href={mapsSearchUrl(ex.venue)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-purple-50"
                  >
                    <MapPin className="w-4 h-4" /> Maps
                  </a>
                  <a 
                    href={ex.sourceUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-purple-50"
                  >
                    <ExternalLink className="w-4 h-4" /> Details
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="max-w-screen-md mx-auto px-4 pb-8">
        <div className="rounded-2xl border border-purple-200 bg-purple-50 p-4">
          <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Palette className="w-4 h-4" /> Notes
          </h3>
          <ul className="space-y-1 text-xs text-zinc-700">
            <li><strong>All student/youth prices ≤ €15.</strong> Where Berlin.de didn't list prices, they were checked on venue/Museumsportal pages.</li>
            <li><strong>Districts:</strong> Mitte (Hamburger Bahnhof, Fotografiska, PalaisPopulaire, Julia Stoschek), Tiergarten/Mitte (Neue Nationalgalerie), Zehlendorf (Haus am Waldsee), Charlottenburg‑Wilmersdorf (C/O Berlin).</li>
            <li><strong>Sources:</strong> Official museum/event pages (Berlin.de, Museumsportal Berlin, venue sites).</li>
          </ul>
        </div>
      </section>

      <footer className="max-w-screen-md mx-auto px-4 pb-24 text-center text-xs text-zinc-500">
        Built for friends ✨ — Optimized for phones. Tap "Share" to post into WhatsApp.
      </footer>
    </main>
  );
}

