import React, { useState } from "react";
import { Share2, MapPin, Clock, ExternalLink, ChevronLeft, Calendar, Star, Coffee, Utensils, Music2, Palette, Beer, ShoppingBag, Wine } from "lucide-react";
import { Link } from "react-router-dom";
import ComedyOptionsTab from "../components/ComedyOptionsTab";

const WEEKEND_PLAN = {
  title: "Berlin Weekend Plan",
  date: "October 11-13, 2024",
  description: "A complete 3-day itinerary through Berlin's best spots, from morning walks to late-night adventures.",
  days: [
    {
      day: "Friday, October 11",
      theme: "Arrival & Exploration",
      color: "from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      activities: [
         {
           time: "10:30 AM",
           title: "Rike arrives",
           type: "arrival",
           description: "Welcome to Berlin!",
           profileImage: "/berlin-weekend/images/people/rike.png"
         },
        {
          time: "11:00 AM",
          title: "Tiergarten Walk",
          type: "walk",
          description: "From Neuer See to Siegessäule through Tiergarten",
          image: "/berlin-weekend/images/weekend-plan/tiergarten-walk.jpg",
          details: "A leisurely walk through Berlin's central park, passing the Tiergarten spring, Landwehrkanal lock, and gas lantern open-air museum. Stop at Café am Neuen See for a cozy break by the water, then continue past the Roon monument to the Victory Column.",
          maps: "https://maps.app.goo.gl/hYVPDakHfhzCMdqV8"
        },
         {
           time: "1:00 PM",
           title: "Hot Chocolate at Rausch Schokoladen",
           type: "food",
           description: "Warm up with premium hot chocolate",
           image: "/berlin-weekend/images/weekend-plan/rausch-schokoladen.jpg",
           maps: "https://www.google.com/maps/search/?api=1&query=Rausch+Schokoladen+Berlin"
         },
         {
           time: "2:00 PM",
           title: "Visit Dussmann",
           type: "culture",
           description: "Berlin's largest bookstore",
           image: "/berlin-weekend/images/weekend-plan/dussmann-bookstore.jpg",
           maps: "https://www.google.com/maps/search/?api=1&query=Dussmann+Berlin"
         },
         {
           time: "3:00 PM",
           title: "Snack at Little Chinese Dumplings",
           type: "food",
           description: "Quick bite before Pauline arrives",
           image: "/berlin-weekend/images/weekend-plan/little-chinese-dumplings.jpg",
           maps: "https://www.google.com/maps/search/?api=1&query=Little+Chinese+Dumplings+Berlin"
         },
         {
           time: "4:30 PM",
           title: "Pauline arrives",
           type: "arrival",
           description: "The gang's all here!",
           profileImage: "/berlin-weekend/images/people/pauline.png"
         },
         {
           time: "5:30 PM",
           title: "Berlin Food Week",
           type: "event",
           description: "Location: Bikini Berlin",
           image: "/berlin-weekend/images/weekend-plan/berlin-food-week.jpg",
           link: "https://www.berlinfoodweek.de/festival/",
           maps: "https://www.google.com/maps/search/?api=1&query=Bikini+Berlin"
         },
         {
           time: "7:00 PM",
           title: "Festival of Lights",
           type: "event",
           description: "Highlights: Bebelplatz, Potsdamer Platz",
           image: "/berlin-weekend/images/weekend-plan/festival-of-lights.jpg",
           link: "https://www.berlin.de/events/2097286-2229501-festival-of-lights.html",
           maps: [
             { name: "Bebelplatz", url: "https://www.google.com/maps/search/?api=1&query=Bebelplatz+Berlin" },
             { name: "Potsdamer Platz", url: "https://www.google.com/maps/search/?api=1&query=Potsdamer+Platz+Berlin" }
           ]
         },
         {
           time: "9:00 PM",
           title: "Dinner",
           type: "food",
           description: "Rüyam (Döner) or options at Eberswalder/Schönhauser",
           image: "/berlin-weekend/images/restaurants/ruya-gemuse-kebap.jpg",
           maps: "https://www.google.com/maps/search/?api=1&query=Eberswalder+Straße+Schönhauser+Allee+Berlin"
         },
         {
           time: "10:30 PM",
           title: "Drinks",
           type: "nightlife",
           description: "Weinerei, Atopia, or An einem Sonntag im August",
           image: "https://lh3.googleusercontent.com/p/AF1QipOWwQcEnqidxw8WoEjHceCvdUa8eg2u8rxnalvk=s1600-w640",
           details: "End the evening with drinks at one of these cozy spots",
           maps: [
             { name: "Weinerei", url: "https://maps.app.goo.gl/bPFcDkemHwxCUn6d8" },
             { name: "Atopia", url: "https://www.google.com/maps/search/?api=1&query=Atopia+Berlin" },
             { name: "An einem Sonntag im August", url: "https://www.google.com/maps/search/?api=1&query=An+einem+Sonntag+im+August+Berlin" }
           ]
         }
      ]
    },
    {
      day: "Saturday, October 12",
      theme: "Markets & Comedy",
      color: "from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      activities: [
         {
           time: "10:00 AM",
           title: "Kieztour Schöneberg",
           type: "walk",
           description: "Winterfeldtmarkt - Berlin's largest market",
           image: "/berlin-weekend/images/weekend-plan/winterfeldtmarkt.jpg",
           details: "Includes: Winterfeldtmarkt (Saturday 08:00-16:00), hot chocolate at Winterfeldt Schokoladen, market highlights: Churros, Maultaschen-Burger from Teig & Füllung, grilled mackerel from Fischgriller Jürgen Fürgut",
           link: "https://mitvergnuegen.com/2018/kieztour-so-verbringt-ihr-einen-tollen-tag-im-akazienkiez/",
           maps: "https://maps.app.goo.gl/BG75xsZqDtDMXbpa7"
         },
         {
           time: "12:30 PM",
           title: "Vintage Shopping Tour",
           type: "shopping",
           description: "See vintage tour for details",
           image: "/berlin-weekend/images/weekend-plan/vintage-tour.jpg",
           link: "/berlin-weekend/vintage-tour"
         },
         {
           time: "4:00 PM",
           title: "Spreemarkt x Holzmarkt-Crew",
           type: "event",
           description: "Time: 12:00 - 20:00 (arriving at 16:00)",
           image: "/berlin-weekend/images/weekend-plan/spreemarkt-holzmarkt.jpg",
           details: "Location: Holzmarkt Str. 25, Entry: €3. The Spreemarkt goes into the next round! This time 100% Holzmarkt! Our in-house crew takes over the complete programming.",
           address: "Holzmarkt Str. 25",
           maps: "https://www.google.com/maps/search/?api=1&query=Holzmarkt+Str.+25+Berlin"
         },
        {
          time: "Evening",
          title: "Dinner Options",
          type: "food",
          description: "Dervish, Vegd Vegan Burgers, or Yoyo Foodworld",
          image: "/berlin-weekend/images/restaurants/dervish.jpg",
          link: "/berlin-weekend/restaurants"
        },
         {
           time: "8:00 PM",
           title: "Comedy Options",
           type: "comedy",
           description: "Choose from three great comedy shows",
           isTabComponent: true
         },
         {
           time: "11:00 PM",
           title: "Drinks",
           type: "nightlife",
           description: "Multilayerladen, Cafe Luzia, Mano Cafe",
           image: "/berlin-weekend/images/weekend-plan/cafe-luzia.jpg",
           details: "Pre-clubbing drinks at cozy Berlin spots",
           maps: [
             { name: "Multilayerladen", url: "https://www.google.com/maps/search/?api=1&query=Multilayerladen+Berlin" },
             { name: "Cafe Luzia", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Luzia+Berlin" },
             { name: "Mano Cafe", url: "https://www.google.com/maps/search/?api=1&query=Mano+Cafe+Berlin" }
           ]
         },
         {
           time: "12:30 AM",
           title: "Clubbing",
           type: "nightlife",
           description: "See clubbing options for details",
           image: "/berlin-weekend/images/weekend-plan/clubbing.jpg",
           link: "/berlin-weekend/clubbing",
           details: "Berlin's legendary nightlife scene"
         }
      ]
    },
    {
      day: "Sunday, October 13",
      theme: "Culture & Reflection",
      color: "from-purple-50 to-violet-100",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      activities: [
         {
           time: "11:00 AM",
           title: "Hangover Brunch",
           type: "food",
           description: "Cafe Friedrichs or Father Carpenter",
           image: "/berlin-weekend/images/cafes/father-carpenter.jpg",
           maps: [
             { name: "Cafe Friedrichs", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Friedrichs+Berlin" },
             { name: "Father Carpenter", url: "https://www.google.com/maps/search/?api=1&query=Father+Carpenter+Berlin" }
           ]
         },
        {
          time: "1:00 PM",
          title: "Exhibition Visit",
          type: "culture",
          description: "Die Möglichkeit der Unvernunft or AuraLabs",
          image: "/berlin-weekend/images/museums/auralabs-ki-trifft-kunst.jpg",
          link: "/berlin-weekend/museums"
        },
         {
           time: "3:00 PM",
           title: "Nova Music Festival Exhibition",
           type: "exhibition",
           description: "WITNESS. REFLECT. HEAL.",
           image: "/berlin-weekend/images/weekend-plan/nova-music-festival.jpg",
           details: "Time: 11:00 - 20:00 (arriving at 15:00), Location: Flughafen Tempelhof, Price: €7.40. In Berlin, a city of great historical significance, the exhibition offers a profound space for remembrance and reflection, honoring the victims of October 7th while bringing together people from all walks of life.",
           address: "Flughafen Tempelhof",
           maps: "https://www.google.com/maps/search/?api=1&query=Tempelhofer+Feld+Berlin"
         },
         {
           time: "5:00 PM",
           title: "Spaeti Tour",
           type: "walk",
           description: "If weather allows",
           image: "/berlin-weekend/images/weekend-plan/spaeti-tour.jpg",
           link: "/berlin-weekend/spaeti-tour"
         },
         {
           time: "7:00 PM",
           title: "Dinner",
           type: "food",
           description: "Försters, Cocodrillo, or Amrit",
           image: "/berlin-weekend/images/weekend-plan/cocodrillo.jpg",
           maps: [
             { name: "Försters", url: "https://www.google.com/maps/search/?api=1&query=Försters+Berlin" },
             { name: "Cocodrillo", url: "https://www.google.com/maps/search/?api=1&query=Cocodrillo+Berlin" },
             { name: "Amrit", url: "https://www.google.com/maps/search/?api=1&query=Amrit+Berlin" }
           ]
         },
         {
           time: "9:00 PM",
           title: "Mein Haus am See",
           type: "nightlife",
           description: "Final drinks to end the weekend",
           image: "/berlin-weekend/images/weekend-plan/mein-haus-am-see.jpg",
           maps: "https://www.google.com/maps/search/?api=1&query=Mein+Haus+am+See+Berlin"
         }
      ]
    }
  ]
};

const getActivityIcon = (type) => {
  switch (type) {
    case 'walk': return <MapPin className="w-4 h-4" />;
    case 'food': return <Utensils className="w-4 h-4" />;
    case 'culture': return <Palette className="w-4 h-4" />;
    case 'event': return <Calendar className="w-4 h-4" />;
    case 'nightlife': return <Wine className="w-4 h-4" />;
    case 'shopping': return <ShoppingBag className="w-4 h-4" />;
    case 'comedy': return <Music2 className="w-4 h-4" />;
    case 'exhibition': return <Palette className="w-4 h-4" />;
    case 'arrival': return <Star className="w-4 h-4" />;
    default: return <Clock className="w-4 h-4" />;
  }
};

const getActivityColor = (type) => {
  switch (type) {
    case 'walk': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'food': return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'culture': return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'event': return 'bg-green-100 text-green-700 border-green-200';
    case 'nightlife': return 'bg-pink-100 text-pink-700 border-pink-200';
    case 'shopping': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'comedy': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
    case 'exhibition': return 'bg-violet-100 text-violet-700 border-violet-200';
    case 'arrival': return 'bg-rose-100 text-rose-700 border-rose-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export default function WeekendPlan() {
  const [activeDay, setActiveDay] = useState(0);

  const handleShare = async () => {
    const url = window.location.href;
    const title = "Berlin Weekend Plan";
    const text = "Complete 3-day itinerary for October 11-13, 2024";
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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-purple-200">
        <div className="max-w-screen-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-zinc-600 hover:text-zinc-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-zinc-900">Weekend Plan</h1>
              <p className="text-xs text-purple-600 font-medium">Oct 11-13, 2024</p>
            </div>
            <Calendar className="w-5 h-5 text-purple-600" />
          </div>
          <button 
            onClick={handleShare} 
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-3 py-1.5 text-sm shadow-sm bg-white hover:bg-purple-50"
          >
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </header>

      <section className="max-w-screen-md mx-auto px-4 pt-6 pb-4">
        <div className="rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-6 shadow-lg border border-purple-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900">{WEEKEND_PLAN.title}</h2>
              <p className="text-sm text-purple-700 font-medium">{WEEKEND_PLAN.date}</p>
            </div>
          </div>
          <p className="text-sm text-zinc-800 leading-relaxed mb-4">
            {WEEKEND_PLAN.description}
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-white/80 px-3 py-1.5 border border-purple-200 font-medium text-purple-800">
              3 days planned
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1.5 border border-pink-200 font-medium text-pink-800">
              All activities included
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1.5 border border-rose-200 font-medium text-rose-800">
              Ready to go
            </span>
          </div>
        </div>
      </section>

      {/* Day Tabs */}
      <section className="max-w-screen-md mx-auto px-4 pb-4">
        <div className="flex gap-2 bg-white/70 rounded-2xl p-2 shadow-sm border border-white/50">
          {WEEKEND_PLAN.days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                activeDay === index
                  ? `bg-gradient-to-r ${day.color} ${day.iconColor} shadow-md border ${day.borderColor}`
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
              }`}
            >
              <div className="text-center">
                <div className="font-semibold">{day.day.split(',')[0]}</div>
                <div className="text-xs opacity-75">{day.day.split(',')[1].trim()}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-4 pb-16">
        {WEEKEND_PLAN.days.map((day, dayIndex) => (
          <div 
            key={dayIndex} 
            className={`rounded-3xl border-2 ${day.borderColor} bg-gradient-to-br ${day.color} p-6 shadow-lg transition-all duration-300 ${
              activeDay === dayIndex ? 'block' : 'hidden'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-white shadow-md ${day.iconColor}`}>
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">{day.day}</h3>
                <p className="text-sm font-medium text-zinc-700">{day.theme}</p>
              </div>
            </div>

            <div className="space-y-4">
              {day.activities.map((activity, activityIndex) => (
                activity.isTabComponent ? (
                  <div key={activityIndex}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                        {activity.time}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${getActivityColor(activity.type)}`}>
                        {activity.type}
                      </span>
                    </div>
                    <ComedyOptionsTab />
                  </div>
                ) : (
                  <div key={activityIndex} className="bg-white/70 rounded-2xl p-4 shadow-sm border border-white/50">
                    <div className="flex items-start gap-3">
                      {activity.profileImage ? (
                        <div className="flex-shrink-0">
                          <img 
                            src={activity.profileImage} 
                            alt={activity.title}
                            className="w-20 h-20 object-cover rounded-xl shadow-sm border-2 border-white"
                            loading="lazy"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        </div>
                      ) : (
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${getActivityColor(activity.type)}`}>
                            {getActivityIcon(activity.type)}
                          </div>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                            {activity.time}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${getActivityColor(activity.type)}`}>
                            {activity.type}
                          </span>
                        </div>
                        <h4 className="font-semibold text-zinc-900 mb-1">{activity.title}</h4>
                        <p className="text-sm text-zinc-700 mb-2">{activity.description}</p>
                        
                        {activity.details && (
                          <p className="text-xs text-zinc-600 leading-relaxed mb-2">{activity.details}</p>
                        )}
                        
                        {activity.image && (
                          <div className="mb-3">
                            <img 
                              src={activity.image} 
                              alt={activity.title}
                              className="w-full h-48 object-cover rounded-xl shadow-sm"
                              loading="lazy"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {activity.maps && (
                            Array.isArray(activity.maps) ? (
                              activity.maps.map((mapItem, index) => (
                                <a 
                                  key={index}
                                  href={typeof mapItem === 'string' ? mapItem : mapItem.url} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs bg-white shadow hover:bg-zinc-50"
                                >
                                  <MapPin className="w-3 h-3" /> {typeof mapItem === 'string' ? `Maps ${index + 1}` : mapItem.name}
                                </a>
                              ))
                            ) : (
                              <a 
                                href={activity.maps} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs bg-white shadow hover:bg-zinc-50"
                              >
                                <MapPin className="w-3 h-3" /> Maps
                              </a>
                            )
                          )}
                          {activity.link && (
                            <a 
                              href={activity.link} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs bg-white shadow hover:bg-zinc-50"
                            >
                              <ExternalLink className="w-3 h-3" /> 
                              {activity.link.startsWith('/') ? 'View Details' : 'Website'}
                            </a>
                          )}
                          {activity.address && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs bg-zinc-50 text-zinc-600">
                              <MapPin className="w-3 h-3" /> {activity.address}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="max-w-screen-md mx-auto px-4 pb-24 text-center text-xs text-zinc-500">
        <p>Built for friends ✨ — Optimized for phones. Have an amazing weekend!</p>
      </footer>
    </main>
  );
}
