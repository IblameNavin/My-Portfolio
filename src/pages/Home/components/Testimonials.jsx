import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: 'The quality of the design is very high, and with a bit of knowledge about HTML and CSS also very easy to customize. Overall a good design, supportive team, that I am quite happy with. Really appreciate that.',
    name: 'Hiren Gohel',
    company: 'Freelancer',
    rating: 5,
  },
  {
    id: 2,
    text: 'I rarely like to write reviews, but the developer truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Very satisfying!!!',
    name: 'Piyush Nathani',
    company: 'Maxlink IT solutions pvt. ltd',
    rating: 5,
  },
  {
    id: 3,
    text: 'The person who has worked for this that developer should be very talented i m very happy with the service provided by the website, able to see the creativity and talent of the developer so well, when having query i drop the message and get reply within a 60second so happy with all the support and service.',
    name: 'Nishi Patel',
    company: 'Freelancer',
    rating: 5,
  },
  {
    id: 4,
    text: 'I had a problem finding something, asked the support team, got a reply and a solution within a few minutes. Brilliant support! very happy with the website I bought. Thank you developers!!',
    name: 'Vijay Sardhara',
    company: 'Rainloops Technolabs',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="relative overflow-hidden section-padding bg-white" id="testimonials">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center select-none pointer-events-none z-0">
        <span className="watermark-text tracking-[-0.05em] whitespace-nowrap">
          Testimonials
        </span>
      </div>

      <div className="container mx-auto px-[15px] max-w-[1170px] relative z-10">
        <div className="flex justify-center items-center py-10">
          <div
            className="relative bg-white p-8 md:p-14 rounded-[10px] w-full max-w-[800px] flex flex-col md:flex-row items-center md:items-start gap-10"
            style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)', border: '1px solid #eeeeee' }}
          >
            {/* Profile */}
            <div className="flex-shrink-0">
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f9f9f9] rounded-full overflow-hidden flex items-end justify-center">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/880a6d93-e697-44e4-8b6e-cc353a922359-krushal-sonani-web-app/assets/images/default-profile-11.png"
                  alt="Reviewer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col text-center md:text-left flex-1">
              <div className="flex justify-center md:justify-start gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#d27328" color="#d27328" />
                ))}
              </div>

              <p className="font-body text-[16px] leading-[1.8] text-[#767676] mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div>
                <h3 className="font-display text-[18px] font-bold text-black mb-1">{t.name}</h3>
                <span className="font-display text-[14px] font-semibold text-[#d27328] uppercase tracking-wider">
                  {t.company}
                </span>
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-6 justify-center md:justify-start">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#eeeeee] flex items-center justify-center text-[#767676] hover:bg-[#d27328] hover:text-white hover:border-[#d27328] transition-all duration-300"
                  aria-label="Previous"
                >
                 <span className='cursor-pointer'> <ChevronLeft size={18} /></span>
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#eeeeee] flex items-center justify-center text-[#767676] hover:bg-[#d27328] hover:text-white hover:border-[#d27328] transition-all duration-300"
                  aria-label="Next"
                >
                  <span className='cursor-pointer'><ChevronRight size={18} /></span>
                </button>
              </div>
            </div>

            {/* Quote decoration */}
            <div className="absolute bottom-4 right-8 opacity-[0.05] pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="#000000" className="rotate-180">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H20.017C21.1216 4 22.017 4.89543 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H4C3.44772 8 3 7.55228 3 7V5C3 4.44772 3.44772 4 4 4H9C10.1046 4 11 4.89543 11 6V15C11 18.3137 8.31371 21 5 21H3Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
