import { Button } from '../ui/Button';

const contactInfo = {
  email: 'fikrial93@gmail.com',
  phone: '089516269950',
  location: 'Jakarta, Indonesia',
  linkedin: 'https://www.linkedin.com/in/fikri-alwan/',
  github: 'https://github.com/fikrialwan',
};

export function HeroSection() {
  return (
    <section className="bg-cream border-b-[3px] border-black">
      <div className="flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="w-full md:w-[58%] md:border-r-[3px] border-black p-6 md:p-16 flex flex-col justify-center order-1">
          {/* Location & Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
            <span className="text-xs md:text-sm text-muted">{contactInfo.location}</span>
            <span className="bg-primary text-white px-3 md:px-4 py-1 md:py-2 text-xs font-medium">
              FRONTEND ENGINEER
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-[80px] leading-[0.9] tracking-tight font-medium text-dark mb-4 md:mb-6">
            FIKRI<br />ALWAN<br />RAMADHAN
          </h1>

          {/* Bio */}
          <div className="border-l-[6px] border-primary bg-[rgba(243,243,243,0.5)] pl-4 md:pl-6 pr-4 md:pr-24 py-2 mb-4 md:mb-6">
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Frontend Engineer specializing in AI-driven fintech, mobile application development and modern web architecture. Building scalable applications with React, Next.js, and Flutter.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 text-xs md:text-sm">
            <a href={`mailto:${contactInfo.email}`} className="text-muted hover:text-primary flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 20 16" fill="currentColor">
                <path d="M2 16c-0.55 0-1.02083-0.19583-1.4125-0.5875-0.39167-0.39167-0.5875-0.8625-0.5875-1.4125l0-12c0-0.55 0.19583-1.02083 0.5875-1.4125 0.39167-0.39167 0.8625-0.5875 1.4125-0.5875l16 0c0.55 0 1.02083 0.19583 1.4125 0.5875 0.39167 0.39167 0.5875 0.8625 0.5875 1.4125l0 12c0 0.55-0.19583 1.02083-0.5875 1.4125-0.39167 0.39167-0.8625 0.5875-1.4125 0.5875l-16 0 0 0m8-7l-8-5 0 10 0 0 0 0 16 0 0 0 0 0 0-10-8 5 0 0m0-2l8-5-16 0 8 5 0 0m-8-3l0-2 0 0 0 2 0 10 0 0 0 0 0 0 0 0 0 0 0-10 0 0" />
              </svg>
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="text-muted hover:text-primary flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1C9.81 21 4.01 15.21 3 8c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {contactInfo.phone}
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button href={contactInfo.linkedin} external icon={
              <svg width="19" height="16" viewBox="0 0 19 16" fill="white">
                <path d="M0 16l0-6 8-2-8-2 0-6 19 8-19 8 0 0" />
              </svg>
            }>
              LET'S CONNECT
            </Button>
            <Button href={contactInfo.github} variant="secondary" external icon={
              <svg width="20" height="19" viewBox="0 0 20 19" fill="black">
                <path d="M2 19c-0.55 0-1.02083-0.19583-1.4125-0.5875-0.39167-0.39167-0.5875-0.8625-0.5875-1.4125l0-11c0-0.55 0.19583-1.02083 0.5875-1.4125 0.39167-0.39167 0.8625-0.5875 1.4125-0.5875l4 0 0-2c0-0.55 0.19583-1.02083 0.5875-1.4125 0.39167-0.39167 0.8625-0.5875 1.4125-0.5875l4 0c0.55 0 1.02083 0.19583 1.4125 0.5875 0.39167 0.39167 0.5875 0.8625 0.5875 1.4125l0 2 4 0c0.55 0 1.02083 0.19583 1.4125 0.5875 0.39167 0.39167 0.5875 0.8625 0.5875 1.4125l0 11c0 0.55-0.19583 1.02083-0.5875 1.4125-0.39167 0.39167-0.8625 0.5875-1.4125 0.5875l-16 0 0 0m0-2l16 0 0 0 0 0 0-11 0 0 0 0-16 0 0 0 0 0 0 11 0 0 0 0 0 0m6-13l4 0 0-2 0 0 0 0-4 0 0 0 0 0 0 2 0 0m-6 13l0 0 0 0 0-11 0 0 0 0 0 0 0 0 0 0 0 11 0 0 0 0 0 0 0 0" />
              </svg>
            }>
              VIEW GITHUB
            </Button>
          </div>
        </div>

        {/* Portrait */}
        <div className="hidden md:block w-[42%] relative overflow-hidden order-2">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl" />
          <div className="h-full bg-primary flex items-center justify-center p-16">
            <div className="bg-white border-[3px] border-black p-4 rotate-[-3deg]" style={{ boxShadow: '12px 12px 0 var(--color-black)' }}>
              <div className="w-[400px] h-[450px] overflow-hidden flex items-center justify-center">
                <img
                  src="https://fikrialwan.com/static/media/profile.f1b0fa8d5ae3f753bb18.webp"
                  alt="Fikri Alwan Ramadhan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}