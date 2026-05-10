interface TechCategory {
  title: string;
  techs: string[];
}

const techCategories: TechCategory[] = [
  {
    title: 'LANGUAGES & FRAMEWORKS',
    techs: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Flutter', 'Astro'],
  },
  {
    title: 'STATE & LOGIC',
    techs: ['Redux Toolkit', 'MobX', 'BLoC', 'Jotai'],
  },
  {
    title: 'BACKEND & INTEGRATION',
    techs: ['REST APIs', 'GraphQL', 'Emarsys', 'Drizzle ORM'],
  },
  {
    title: 'TOOLS & INFRA',
    techs: ['Docker', 'Git', 'Sentry', 'Vercel'],
  },
];

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF2D55" className="w-5 h-5 md:w-6 md:h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

export function TechnologiesSection() {
  return (
    <section className="bg-white border-b-[3px] border-black">
      {/* Header */}
      <div className="flex items-center gap-3 md:gap-4 bg-gray border-b-[3px] border-black px-4 md:px-8 py-4 md:py-6">
        <div className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center">
          <LayersIcon />
        </div>
        <h2 className="text-sm md:text-base tracking-tight font-medium text-dark">
          TECHNOLOGIES
        </h2>
      </div>

      {/* Tech Grid */}
      <div className="bg-bg-dark p-4 md:p-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border-[3px] border-black p-4 md:p-6"
              style={{ boxShadow: '4px 4px 0 var(--color-black)' }}
            >
              <h3 className="text-xs md:text-sm font-medium text-primary mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-bg-light border border-black px-2 py-0.5 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}