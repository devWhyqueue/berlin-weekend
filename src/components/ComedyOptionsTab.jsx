import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, Star } from "lucide-react";

const ComedyOptionsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const comedyOptions = [
    {
      id: 0,
      title: "Spree vom Weizen",
      subtitle: "Poetry Slam & Stand Up Show",
      time: "20:00 - 22:00",
      location: "Modus Berlin",
      price: "€18",
      description: "The cheekiest rascal of Berlin's live literature. Poetry slam stars, stand-up comedians and musicians mix in the techno club between fog and strobe.",
      image: "/berlin-weekend/images/weekend-plan/spree-vom-weizen.jpg",
      link: "https://modus-berlin.de/event/111025-SpreevomWeizen-PoetrySlam-Stand-UpShowmitLuisaCharlotteSchulz",
      maps: "https://www.google.com/maps/search/?api=1&query=Modus+Berlin",
      recommended: true
    },
    {
      id: 1,
      title: "Prime Theater",
      subtitle: "Gutes Wedding, Schlechtes Wedding",
      time: "19:30",
      location: "Prime Time Theater, Berlin",
      price: "€30-40",
      description: "A chaotic weekend at a riding stable in the Uckermark becomes an unexpected stage for city guests. Follow the adventures of cheese fermenter Habibi, climate technician Tina, and columnist Marc as they navigate mysterious neighborhood gossip, writing blocks, and the legendary 'Gottliebsweg' trail. A comedic tale of friendship, dreams, and finding happiness.",
      image: "https://static.wixstatic.com/media/46b05c_3358e0e44b034fa2a5d8ca860605e94d~mv2.jpg/v1/fill/w_1624,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/46b05c_3358e0e44b034fa2a5d8ca860605e94d~mv2.jpg",
      link: "https://www.primetimetheater.de/",
      maps: "https://www.google.com/maps/search/?api=1&query=Prime+Time+Theater+Berlin",
      recommended: false
    },
    {
      id: 2,
      title: "Kallefornia Comedy",
      subtitle: "Weekend Special",
      time: "20:30",
      location: "MAD MONKEY ROOM, Danziger Straße 1, 10435 Berlin",
      price: "€23",
      description: "Underground legend Kalle Zilske serves up crispy comedy bits and hot stand-up bangers from Berlin's underground scene.",
      image: "https://www.eventim-light.com/de/api/image/6709089805a8d6717b36dec3/shop_cover_v3/webp",
      link: "https://www.eventim-light.com/de/a/5a27cfaeae5a6404dbec11ee/s/6709093005a8d6717b36dedd",
      maps: "https://www.google.com/maps/search/?api=1&query=MAD+MONKEY+ROOM+Berlin",
      recommended: false
    }
  ];

  const activeOption = comedyOptions[activeTab];

  return (
    <div className="bg-white/70 rounded-2xl p-4 shadow-sm border border-white/50">
      {/* Tab Headers */}
      <div className="flex gap-1 mb-4 bg-zinc-100 rounded-xl p-1">
        {comedyOptions.map((option, index) => (
          <button
            key={option.id}
            onClick={() => setActiveTab(index)}
            className={`flex-1 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
              activeTab === index
                ? 'bg-white shadow-sm text-indigo-700 border border-indigo-200'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-1">
              {option.recommended && <Star className="w-3 h-3 text-yellow-500" />}
              <span className="truncate">{option.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-indigo-100 text-indigo-700 border-indigo-200">
              <Star className="w-4 h-4" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                {activeOption.time}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full border bg-indigo-100 text-indigo-700 border-indigo-200">
                comedy
              </span>
              {activeOption.recommended && (
                <span className="text-xs px-2 py-0.5 rounded-full border bg-yellow-100 text-yellow-700 border-yellow-200 flex items-center gap-1">
                  <Star className="w-3 h-3" /> Recommended
                </span>
              )}
            </div>
            <h4 className="font-semibold text-zinc-900 mb-1">{activeOption.title}</h4>
            <p className="text-sm text-zinc-600 mb-2">{activeOption.subtitle}</p>
            <p className="text-sm text-zinc-700 mb-2">{activeOption.description}</p>
          </div>
        </div>

        {/* Image */}
        {activeOption.image && (
          <div className="mb-3">
            <img 
              src={activeOption.image} 
              alt={activeOption.title}
              className="w-full h-48 object-cover rounded-xl shadow-sm"
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {activeOption.maps && (
            <a 
              href={activeOption.maps} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs bg-white shadow hover:bg-zinc-50"
            >
              <MapPin className="w-3 h-3" /> Maps
            </a>
          )}
          {activeOption.link && (
            <a 
              href={activeOption.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs bg-white shadow hover:bg-zinc-50"
            >
              <ExternalLink className="w-3 h-3" /> Website
            </a>
          )}
          <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs bg-zinc-50 text-zinc-600">
            <Clock className="w-3 h-3" /> {activeOption.price}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs bg-zinc-50 text-zinc-600">
            <MapPin className="w-3 h-3" /> {activeOption.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComedyOptionsTab;
