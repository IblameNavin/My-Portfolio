import React from 'react';
import ChatbotAI from "../../../assets/Chatbot-AI.png"
import MoviePilot from "../../../assets/Movie-Pilot.png"
import DiceGame from "../../../assets/Dice-Game.png"
import FirebaseApp from "../../../assets/Firebase-App.png"
import foodyZone from "../../../assets/foodyZone.png"
import GrothSite from "../../../assets/GrothSite.png"

const portfolioItems = [
  {
    id: 1,
    title: 'Movie Pilot',
    category: 'Movie Pilot, A Movie Booking App',
    imageUrl: MoviePilot,
    url: "https://movie-pilot-ten.vercel.app/"
  },
  {
    id: 2,
    title: 'Firebase Contact App',
    category: 'A Firebase Contact App',
    imageUrl: FirebaseApp,
    url: "https://firebase-contact-app-inky.vercel.app/"
  },
  {
    id: 3,
    title: 'Chatbot AI',
    category: 'Chatbot-AI, A Chatting System With AI',
    imageUrl: ChatbotAI,
    url: "https://react-final-project-pi.vercel.app/"
  },
  {
    id: 4,
    title: 'Dice Game',
    category: 'Dice Game, Fun With Friends',
    imageUrl: DiceGame,
    url: "https://dice-game-phi-blond.vercel.app/"
  },
  {
    id: 5,
    title: 'Foody Zone',
    category: 'A Place For your Favourite Food',
    imageUrl: foodyZone,
    url: "https://foody-zone-site.vercel.app/"
  },
  {
    id: 6,
    title: 'Groth Site',
    category: 'A Static Site For Groth',
    imageUrl: GrothSite,
    url: "https://groth-site.vercel.app/"
  },
  {
    id: 7,
    title: 'Wing Trendz',
    category: 'Order Management System',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/880a6d93-e697-44e4-8b6e-cc353a922359-krushal-sonani-web-app/assets/images/1-9.png',
    url: "https"
  },
];

const Portfolio = () => {
  return (
    <section className="section-padding bg-white" id="portfolio">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="mb-[60px]">
          <span className="text-accent mb-[15px] block">Portfolio</span>
          <h2 className="text-[36px] font-bold text-black max-w-[500px] leading-[1.2]">
            Each project is a unique piece of development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href= {item.url}
              className="group relative overflow-hidden rounded-[10px] bg-white transition-all duration-300 transform hover:-translate-y-1"
              style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-[20px] font-bold font-display mb-2">
                      {item.title}
                    </h3>
                    <span className="text-white/80 text-[14px] font-body block">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
