import React from 'react';
import { CheckCircle2, PenTool, Layout, ShieldCheck, Settings } from 'lucide-react';

const skills = [
  { label: 'JavaScript', percentage: 85 },
  { label: 'React JS', percentage: 90 },
  { label: 'TypeScript', percentage: 85 },
  { label: 'MERN Stack', percentage: 90 },
  { label: 'HTML & CSS', percentage: 89 },
];

const serviceCards = [
  { title: 'R & D', Icon: CheckCircle2 },
  { title: 'Design', Icon: PenTool },
  { title: 'Quality', Icon: ShieldCheck },
  { title: 'Development', Icon: Layout },
  { title: 'Maintain', Icon: Settings },
];

const Services = () => {
  return (
    <section id="service" className="w-full bg-[#f9f9f9] py-[120px]">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]">

          {/* Left: Skills */}
          <div className="w-full lg:w-1/2">
            <div className="mb-[35px]">
              <span className="text-[#d27328] font-display text-[14px] font-semibold uppercase tracking-[1px] mb-[15px] block">
                Services
              </span>
              <h2 className="text-[36px] font-bold text-black leading-[1.2] mb-[25px] font-display">
                I offer a Full-cycle of Web Development Services
              </h2>
            </div>

            <div className="text-[#767676] font-body text-[16px] leading-[1.6] mb-[45px]">
              <p className="mb-[15px]">
                For more than 5 years our experts have been accomplishing enough with modern Web Development, new generation programming language, and Full Stack developers to deliver cost-effective solutions.
              </p>
              <p>And also, I can provide you experts if you need for any technology.</p>
            </div>

            <div className="space-y-[30px]">
              {skills.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between items-center mb-[10px]">
                    <span className="font-display font-semibold text-[15px] text-black uppercase">
                      {skill.label}
                    </span>
                    <span className="font-display font-semibold text-[15px] text-[#767676]">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-[4px] w-full bg-[#eeeeee] relative overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#d27328] rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Service Cards */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-white p-[40px] rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center transition-transform hover:-translate-y-2 duration-300 min-h-[220px] ${index % 2 === 1 ? 'sm:mt-[30px]' : ''}`}
                >
                  <div className="mb-[20px]">
                    <card.Icon className="w-10 h-10 text-[#d27328]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-black font-display font-bold text-[18px]">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
