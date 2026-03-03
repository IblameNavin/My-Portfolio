import React from 'react';
import Navinayer from "../../../assets/Navinayer-removebg-preview.png"

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px] lg:gap-[100px]">

          {/* Left: Profile Image + Experience Badge */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative inline-block w-full max-w-[500px] mx-auto lg:mx-0">
              <div className="relative z-10 w-full rounded-[10px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Krushal Sonani Profile"
                  className="grayscale-img w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-[-20px] right-[-20px] lg:bottom-[-40px] lg:right-[-40px] z-20 bg-white rounded-full p-4 shadow-[0px_0px_20px_rgba(0,0,0,0.05)]">
                <div className="relative w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
                  <h3 className="text-[48px] lg:text-[64px] font-bold text-[#2d8659] leading-none mb-2 z-10">4</h3>

                  {/* Circular spinning text */}
                  <div className="absolute inset-0" style={{ animation: 'spin 12s linear infinite' }}>
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <path
                          id="circlePath"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                      </defs>
                      <text style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '10px', fill: '#767676', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        <textPath href="#circlePath">
                          Years of best and successful work experience.{' '}
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 pt-[20px] lg:pt-0">
            <div className="mb-[35px]">
              <span className="text-accent mb-[10px] block">About Me</span>
              <h2 className="text-[36px] lg:text-[45px] font-bold text-black leading-[1.2]">
                Web Developer
              </h2>
            </div>

            <div className="text-[#767676] font-body text-[16px] leading-[1.6]">
              <p className="mb-[15px]">
                I'm a passionate Web Developer, and I am incredibly committed to my work. Over the course of four years as a professional web developer, I have gained the required skills and knowledge to help you with your project.
              </p>
              <p className="mb-[15px]">
                I am focused on React technologies which bring a lot of benefits to my clients:
              </p>
              <div className="space-y-[10px] mb-[30px]">
                <p>👍 technology is supported by Facebook.</p>
                <p>👍 a lot of third-party plugins and components.</p>
                <p>👍 very good performance when comparing with other cross-platform frameworks.</p>
              </div>
            </div>

            <div className="mb-[40px]">
              <img
                src={Navinayer}
                alt="Signature"
                className="h-auto w-auto max-w-[180px]"
              />
            </div>

            <a
              href="#"
              className="btn-primary"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
