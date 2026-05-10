import { Tag } from '../ui/Tag';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  details: string;
  tech: string[];
  isCurrent?: boolean;
}

const experiences: Experience[] = [
  {
    company: 'ADVANCE INTELLIGENCE GROUP',
    role: 'FRONTEND ENGINEER',
    period: 'Dec 2025 – Present',
    description: 'Technology company specializing in AI-driven financial services. Parent company of Atome financial application.',
    details: 'Developed Atomepay mobile application and supporting back-office web platforms. Implemented 5 core financial features: Transfer, PPOB, QRIS Payment, Cash Withdrawal, and E-Statement.',
    tech: ['FLUTTER', 'DART', 'FINTECH', 'BIOMETRIC'],
    isCurrent: true,
  },
  {
    company: 'PT. SHELL INFOTECH',
    role: 'FRONTEND DEVELOPER',
    period: 'Nov 2022 – Nov 2025',
    description: 'IT consulting firm headquartered in Singapore. Developed Sales Operations applications for Astra International.',
    details: 'Led 3-member engineering team. Architected and integrated Emarsys for personalized marketing automation. Built 6+ production-ready web platforms and contributed 20+ enhancements to existing systems.',
    tech: ['NEXT.JS', 'REACT', 'EMARSYS', 'SENTRY'],
  },
  {
    company: 'PT. NETTA CODE INDONESIA',
    role: 'MOBILE DEVELOPER',
    period: 'Sept 2021 – Oct 2022',
    description: 'IT Services and Consulting company. Built cross-platform mobile applications from Figma designs using Flutter and BLOC state management.',
    details: 'Published apps to Google Play Store.',
    tech: ['FLUTTER', 'BLOC', 'REST APIS'],
  },
  {
    company: 'BERSIHBERES',
    role: 'MOBILE DEVELOPER',
    period: 'June 2020 – Jan 2021',
    description: 'Home maintenance services platform in Indonesia. Built mobile apps for cleaning, maintenance, renovation, and laundry services.',
    details: 'Published and maintained apps on Google Play Store.',
    tech: ['FLUTTER', 'BLOC', 'PLAY STORE'],
  },
];

function WorkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 27 27" fill="#FF2D55" className="w-5 h-5 md:w-6 md:h-6">
      <path d="M13.5 27c-3.45 0-6.45625-1.14375-9.01875-3.43125-2.5625-2.2875-4.03125-5.14375-4.40625-8.56875l3.075 0c0.35 2.6 1.50625 4.75 3.46875 6.45 1.9625 1.7 4.25625 2.55 6.88125 2.55 2.925 0 5.40625-1.01875 7.44375-3.05625 2.0375-2.0375 3.05625-4.51875 3.05625-7.44375 0-2.925-1.01875-5.40625-3.05625-7.44375-2.0375-2.0375-4.51875-3.05625-7.44375-3.05625-1.725 0-3.3375 0.4-4.8375 1.2-1.5 0.8-2.7625 1.9-3.7875 3.3l4.125 0 0 3-9 0 0-9 3 0 0 3.525c1.275-1.6 2.83125-2.8375 4.66875-3.7125 1.8375-0.875 3.78125-1.3125 5.83125-1.3125 1.875 0 3.63125 0.35625 5.26875 1.06875 1.6375 0.7125 3.0625 1.675 4.275 2.8875 1.2125 1.2125 2.175 2.6375 2.8875 4.275 0.7125 1.6375 1.06875 3.39375 1.06875 5.26875 0 1.875-0.35625 3.63125-1.06875 5.26875-0.7125 1.6375-1.675 3.0625-2.8875 4.275-1.2125 1.2125-2.6375 2.175-4.275 2.8875-1.6375 0.7125-3.39375 1.06875-5.26875 1.06875l0 0m4.2-7.2l-5.7-5.7 0-8.1 3 0 0 6.9 4.8 4.8-2.1 2.1 0 0" />
    </svg>
  );
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <div
      className="bg-white border-[3px] border-black p-4 md:p-8 relative"
      style={{ boxShadow: '6px 6px 0 var(--color-black)' }}
    >
      {/* Timeline dot */}
      <div
        className={`hidden md:block absolute w-6 h-6 rounded-full border-[3px] border-black -left-12 top-12 ${
          experience.isCurrent ? 'bg-primary' : 'bg-white'
        }`}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4 md:mb-6">
        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-medium text-dark">{experience.company}</h3>
          <Tag variant="default">{experience.role}</Tag>
        </div>
        <div
          className="bg-white border-2 border-black px-3 md:px-4 py-1 md:py-2"
          style={{
            boxShadow: experience.isCurrent
              ? '4px 4px 0 var(--color-primary)'
              : '4px 4px 0 var(--color-black)'
          }}
        >
          <span
            className={`text-xs md:text-sm font-medium ${
              experience.isCurrent ? 'text-primary' : 'text-dark'
            }`}
          >
            {experience.period}
          </span>
        </div>
      </div>

      <p className="text-muted text-xs md:text-sm mb-3 md:mb-4">
        {experience.description}
      </p>

      <p className="text-dark text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-full md:max-w-2xl">
        {experience.details}
      </p>

      <div className="flex gap-2 flex-wrap">
        {experience.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="bg-white border-b-[3px] border-black">
      {/* Header */}
      <div className="flex items-center gap-3 md:gap-4 bg-gray border-b-[3px] border-black px-4 md:px-8 py-4 md:py-6">
        <div className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center">
          <WorkIcon />
        </div>
        <h2 className="text-sm md:text-base tracking-tight font-medium text-dark">WORK EXPERIENCE</h2>
      </div>

      {/* Timeline */}
      <div className="flex flex-col md:flex-row">
        {/* Timeline line */}
        <div className="hidden md:flex w-26.5 relative justify-center">
          <div className="w-0.75 bg-black h-full" />
        </div>

        {/* Cards */}
        <div className="flex-1 bg-bg-light p-4 md:p-16 space-y-6 md:space-y-12 md:border-l-[3px] border-black">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}