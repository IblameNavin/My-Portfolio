import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactItem = ({ Icon, title, detail }) => {
  return (
    <div className="flex items-center gap-[20px]">
      <div className="w-[60px] h-[60px] rounded-full border border-[#eeeeee] flex items-center justify-center text-[#d27328] transition-all duration-300 hover:bg-[#d27328] hover:text-white hover:border-[#d27328] flex-shrink-0">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[16px] font-bold font-display text-black mb-[2px]">{title}</h3>
        <p className="text-[14px] font-body text-[#767676]">{detail}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-[120px] bg-white w-full">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="flex flex-col mb-[60px]">
          <span className="text-[#d27328] font-display text-[14px] font-semibold uppercase tracking-[1px] mb-[10px] block">
            Contact
          </span>
          <h2 className="text-[36px] font-bold font-display text-black leading-[1.2] max-w-[500px]">
            Feel free to contact me if any assistance is needed in the future
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] pt-[30px]">
          <span className='cursor-pointer'><ContactItem Icon={MapPin} title="Location" detail="Chabahil, Kathmandu, Nepal" /></span>
         <span className='cursor-pointer'> <ContactItem Icon={Phone} title="Phone" detail="+977 9805741978" /></span>
          <span className='cursor-pointer'><ContactItem Icon={Mail} title="Mail" detail="ayernavin11 @gmail.com" /></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
