import React from "react";
import { Share2, MapPin, Clock, ExternalLink, ChevronLeft, Coffee, Euro, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const CAFES = [
  {
    id: 1,
    name: "The Greens",
    district: "Mitte",
    address: "Am Krögel 2, 10179 Berlin",
    hours: "Mon–Fri 9–17",
    price: "€€",
    highlights: "Botanical, plant-filled oasis in historic vaults; in-house pastries, natural light",
    imageUrl: "https://the-greens-berlin.de/images/bg.jpg",
    website: "https://the-greens-berlin.de",
    hasInstagram: false
  },
  {
    id: 2,
    name: "Bonanza Coffee Roasters",
    district: "Kreuzberg",
    address: "Adalbertstr. 70, 10999 Berlin",
    hours: "Daily 9–18",
    price: "€€",
    highlights: "Berlin's third-wave pioneer; industrial-chic roastery, exceptional espresso",
    imageUrl: "https://bonanzacoffee.de/cdn/shop/files/Screenshot_2025-07-24_at_15.24.14.png?v=1753363485&width=1024",
    website: "https://bonanzacoffee.de",
    hasInstagram: false
  },
  {
    id: 3,
    name: "The Barn",
    district: "Mitte",
    address: "Auguststr. 58, 10119 Berlin",
    hours: "Daily 8–18",
    price: "€€€",
    highlights: "Minimalist icon of precision brewing; single-origin beans roasted on-site",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipMaBB0en5TvjefkvJ73TANfVdI_dTJlju6IJT8a=s680-w680-h510-rw",
    website: "https://thebarn.de",
    hasInstagram: false
  },
  {
    id: 4,
    name: "Cafelix Coffee Roasters",
    district: "Prenzlauer Berg",
    address: "Winsstr. 47, 10405 Berlin",
    hours: "Tue–Sun 10–18",
    price: "€€",
    highlights: "Small roastery with Middle-Eastern flair; beans roasted weekly",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrBK_Ytyae7I73z52jFrs7WmXx5Nl9TJS1x7_S9SLQhq6pmYq21mQIwxHvmLhT1m_pEU6eQeBLBlWTVlctdQuEgKLA-QdsIJYMHQdSytQnY2Rsb2-xKXU8DpFBHMKHUOcO0i_RHy8yY1as=s680-w680-h510-rw",
    website: "https://cafelix.de",
    hasInstagram: false
  },
  {
    id: 5,
    name: "Five Elephant",
    district: "Kreuzberg",
    address: "Reichenberger Str. 101, 10999 Berlin",
    hours: "Mon–Sun 9–18",
    price: "€€",
    highlights: "Bright modern space; famed for creamy cheesecake & direct-trade coffee",
    imageUrl: "https://www.fiveelephant.com/cdn/shop/files/Five_Elephant_Mitte.jpg?v=1708344297&width=1296",
    website: "https://fiveelephant.com",
    hasInstagram: false
  },
  {
    id: 6,
    name: "Father Carpenter",
    district: "Mitte",
    address: "Münzstr. 21 (Courtyard), 10178 Berlin",
    hours: "Mon–Sun 9–17",
    price: "€€",
    highlights: "Hidden courtyard café; Aussie-style brunch, top-notch flat whites",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPz5XY704Do0czIkixCnIKgWjevZcWRA5pLs04g=s680-w680-h510-rw",
    website: "https://fathercarpenter.com",
    instagram: "https://www.instagram.com/fathercarpenter/",
    hasInstagram: true
  },
  {
    id: 7,
    name: "Isla Coffee",
    district: "Neukölln",
    address: "Hermannstr. 37, 12049 Berlin",
    hours: "Mon–Sun 9–17",
    price: "€€",
    highlights: "Circular-economy concept; calm minimalist space with local pastries",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no86Cljv3koCSaUx7sMRz_TYMkVD91F60mDiTCNhU9NXxi5mBTBRN6zHWYO03RyrKzCezKvN9o9czy2rR1o0GQljar0mwkIek3aJ2Y5FFG2jhxfVwYzd4TyxmO6Qajb-mFvhpOJaSq824RQ=s680-w680-h510-rw",
    website: "https://islacoffeeberlin.com",
    instagram: "https://www.instagram.com/islacoffeeberlin/",
    hasInstagram: true
  },
  {
    id: 8,
    name: "Companion Coffee",
    district: "Kreuzberg",
    address: "Weserstr. 166, 12045 Berlin",
    hours: "Tue–Sun 10–18",
    price: "€€",
    highlights: "Tea & coffee specialists; refined design, transparent sourcing",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npWk0JKdMzaiTOD3BepwxByWeOTB5pctb_5J-_DWc_4dcDARcGJDrO4qvhg0UZZjb7HOcqbiKjUwLn_498dY6KMLQG9Gtq2d7iJ32PPCwAivhJq6PaPBfYIYQjQhSHPu3sUNMQ=s680-w680-h510-rw",
    website: "https://companioncoffee.com",
    instagram: "https://www.instagram.com/companioncoffee/",
    hasInstagram: true
  },
  {
    id: 9,
    name: "19grams Schlesi",
    district: "Kreuzberg",
    address: "Schlesische Str. 38, 10997 Berlin",
    hours: "Mon–Sun 8–18",
    price: "€€",
    highlights: "Energetic espresso bar; experimental roasts, brunch & baked goods",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipPFZrcU7yKfck5d7xf0GbnFBm1NhP3UigFLe-kU=s680-w680-h510-rw",
    website: "https://19grams.coffee",
    instagram: "https://www.instagram.com/19gramscoffee/",
    hasInstagram: true
  },
  {
    id: 10,
    name: "Chapter One Coffee",
    district: "Kreuzberg",
    address: "Mittenwalder Str. 30, 10961 Berlin",
    hours: "Mon–Sun 9–18",
    price: "€€",
    highlights: "Filter-coffee haven; quiet atmosphere, V60 specialists since 2011",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npMEnfoOlS-oOJLWpM2fVvJ-JfL24L60ndb9a3poAem9lntJV-z9o_t9F_BxjJtmlirRwc2tkYiPV4DuBTjc4e2mn3j6j7ac0Yie-inAMA44gF45iiLHQIHjnV3jPGEyS6JRQqpHjoxL8M=s680-w680-h510-rw",
    website: "https://chapter-one-coffee.com",
    instagram: "https://www.instagram.com/chapteronecoffee/",
    hasInstagram: true
  }
];

function mapsSearchUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function Cafes() {
  const handleShare = async () => {
    const url = window.location.href;
    const title = "Berlin Cafés Guide";
    const text = "10 remarkable cafés in Berlin (2025)";
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
            <h1 className="text-lg font-semibold tracking-tight">Berlin Cafés</h1>
            <Coffee className="w-5 h-5 text-amber-700" />
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
            Curated list of 10 <strong>remarkable cafés</strong> across Berlin for 2025. 
            From third-wave pioneers to hidden courtyard gems, explore the best specialty coffee spots in the city.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-700">
            <div className="inline-flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              <span>10 cafés</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Euro className="w-4 h-4" />
              <span>€€–€€€</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mitte, Kreuzberg, Neukölln +</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-4 pb-3">
        <p className="text-xs text-amber-800 bg-amber-50 rounded-lg px-3 py-2 border border-amber-200">
          <strong>☕ Pro tip:</strong> Many cafés roast their own beans on-site. Perfect time to visit is weekday mornings for a quieter atmosphere!
        </p>
      </div>

      <ol className="max-w-screen-md mx-auto px-4 pb-16 space-y-4">
        {CAFES.map((cafe) => (
          <li key={cafe.id}>
            <div className="rounded-2xl border border-amber-200 bg-white shadow-sm overflow-hidden">
              <a 
                href={cafe.imageUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden group"
              >
                <img 
                  src={cafe.imageUrl} 
                  alt={cafe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-white font-semibold shadow-lg">
                  {cafe.id}
                </div>
              </a>

              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-base font-semibold leading-tight mb-1">{cafe.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs rounded-full bg-amber-100 px-2 py-0.5 border border-amber-300">
                      {cafe.district}
                    </span>
                    <span className="text-xs rounded-full bg-orange-50 px-2 py-0.5 border border-orange-200">
                      {cafe.price}
                    </span>
                  </div>
                </div>

                <div className="mb-2 flex items-start gap-2 text-sm text-zinc-700">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{cafe.address}</span>
                </div>

                <div className="mb-2 flex items-start gap-2 text-sm text-zinc-700">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{cafe.hours}</span>
                </div>

                <p className="mb-3 text-sm text-zinc-700 leading-relaxed">
                  {cafe.highlights}
                </p>

                <div className="flex flex-wrap gap-2">
                  <a 
                    href={mapsSearchUrl(cafe.address)} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-amber-50"
                  >
                    <MapPin className="w-4 h-4" /> Maps
                  </a>
                  {cafe.hasInstagram && (
                    <a 
                      href={cafe.instagram} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-amber-50"
                    >
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                  )}
                  <a 
                    href={cafe.website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white shadow hover:bg-amber-50"
                  >
                    <ExternalLink className="w-4 h-4" /> Website
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="max-w-screen-md mx-auto px-4 pb-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Coffee className="w-4 h-4" /> Notes
          </h3>
          <ul className="space-y-1 text-xs text-zinc-700">
            <li><strong>Quality over quantity:</strong> All cafés on this list are known for specialty coffee with transparent sourcing.</li>
            <li><strong>Hot spots:</strong> Kreuzberg leads with 5 cafés, followed by Mitte with 3. Prenzlauer Berg and Neukölln each have 1.</li>
            <li><strong>Third-wave culture:</strong> Many of these cafés (Bonanza, The Barn, Five Elephant) helped pioneer Berlin's specialty coffee scene.</li>
          </ul>
        </div>
      </section>

      <footer className="max-w-screen-md mx-auto px-4 pb-24 text-center text-xs text-zinc-500">
        Built for friends ✨ — Optimized for phones. Tap "Share" to post into WhatsApp.
      </footer>
    </main>
  );
}

