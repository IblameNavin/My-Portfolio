import React from 'react';

const Hero = () => {
  const icons = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', alt: 'HTML5' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', alt: 'CSS3' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg', alt: 'Bootstrap' },
    { src: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', alt: 'Tailwind CSS' } ,
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', alt: 'JavaScript' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[100px] lg:pt-0 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1170px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

          {/* Left Content */}
          <div className="w-full lg:w-3/5 z-10">
            <div className="relative mb-6">
              <h1 className="text-[45px] md:text-[60px] lg:text-[72px] font-black font-display text-black uppercase leading-tight">
                Web Developer
              </h1>
            </div>

            <div className="max-w-[500px] mb-12">
              <p className="text-[#767676] text-base md:text-lg leading-[1.6] font-body">
                Hi, I'm Navin Ayer. A passionate Web Developer based In Chabahil, Kathmandu. and working with a frontend team.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <div className="border-r border-[#eeeeee] pr-6 py-1">
                <span className="text-[14px] leading-[1.4] text-[#767676] font-display uppercase font-semibold">
                  High knowledge on<br />softwares
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <img src={icon.src} alt={icon.alt} className="w-6 h-6 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <div className="relative w-full h-full rounded-full overflow-hidden grayscale-img">
                <img
                  src="https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Krushal Sonani Profile"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-[#f9f9f9]/30 -z-20 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default Hero;
