import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="c-space">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-8 justify-between mb-6">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
              <img src={social.icon} className="w-7 h-7" alt={social.name} style={{ filter: 'invert(1)' }} />
              <span className="text-base">{social.label}</span>
            </a>
          ))}
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-4" />
        <div className="flex flex-wrap items-center justify-between gap-5 text-sm text-neutral-400">
          <div className="flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
          </div>
          <p>© 2026 Sahil Sorout. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;