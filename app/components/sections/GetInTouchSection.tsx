import { Button } from '../ui/Button';

const contactLinks = {
  email: 'mailto:fikrial93@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fikri-alwan/',
  github: 'https://github.com/fikrialwan',
};

function MailIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="black">
      <path d="M2 16c-0.55 0-1.02083-0.19583-1.4125-0.5875-0.39167-0.39167-0.5875-0.8625-0.5875-1.4125l0-12c0-0.55 0.19583-1.02083 0.5875-1.4125 0.39167-0.39167 0.8625-0.5875 1.4125-0.5875l16 0c0.55 0 1.02083 0.19583 1.4125 0.5875 0.39167 0.39167 0.5875 0.8625 0.5875 1.4125l0 12c0 0.55-0.19583 1.02083-0.5875 1.4125-0.39167 0.39167-0.8625 0.5875-1.4125 0.5875l-16 0 0 0m8-7l-8-5 0 10 0 0 0 0 16 0 0 0 0 0 0-10-8 5 0 0m0-2l8-5-16 0 8 5 0 0m-8-3l0-2 0 0 0 2 0 10 0 0 0 0 0 0 0 0 0 0 0-10 0 0" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="white">
      <path d="M9 10l-4 0c-1.38333 0-2.5625-0.4875-3.5375-1.4625-0.975-0.975-1.4625-2.15417-1.4625-3.5375 0-1.38333 0.4875-2.5625 1.4625-3.5375 0.975-0.975 2.15417-1.4625 3.5375-1.4625l4 0 0 2-4 0c-0.83333 0-1.54167 0.29167-2.125 0.875-0.58333 0.58333-0.875 1.29167-0.875 2.125 0 0.83333 0.29167 1.54167 0.875 2.125 0.58333 0.58333 1.29167 0.875 2.125 0.875l4 0 0 2 0 0m-3-4l0-2 8 0 0 2-8 0 0 0m5 4l0-2 4 0c0.83333 0 1.54167-0.29167 2.125-0.875 0.58333-0.58333 0.875-1.29167 0.875-2.125 0-0.83333-0.29167-1.54167-0.875-2.125-0.58333-0.58333-1.29167-0.875-2.125-0.875l-4 0 0-2 4 0c1.38333 0 2.5625 0.4875 3.5375 1.4625 0.975 0.975 1.4625 2.15417 1.4625 3.5375 0 1.38333-0.4875 2.5625-1.4625 3.5375-0.975 0.975-2.15417 1.4625-3.5375 1.4625l-4 0 0 0" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="white">
      <path d="M6 12l-6-6 6-6 1.425 1.425-4.6 4.6 4.575 4.575-1.4 1.4 0 0m8 0l-1.425-1.425 4.6-4.6-4.575-4.575 1.4-1.4 6 6-6 6 0 0" />
    </svg>
  );
}

export function GetInTouchSection() {
  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent opacity-30" />

      <div className="relative z-10 px-6 md:px-16 lg:px-32 py-16 md:py-24 lg:py-32 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl lg:text-[80px] leading-[0.9] tracking-tight font-medium text-white">
            LET'S BUILD
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span className="text-3xl md:text-5xl lg:text-[80px] leading-[0.9] tracking-tight font-medium text-white">
              SOMETHING
            </span>
            <div
              className="bg-white border-4 border-black px-4 md:px-6 py-2 inline-block rotate-1"
              style={{ boxShadow: '6px 6px 0 var(--color-black)' }}
            >
              <span className="text-3xl md:text-5xl lg:text-[80px] leading-[0.9] tracking-tight font-medium text-black">
                AMAZING
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className="bg-black border-2 border-black px-4 md:px-8 py-3 md:py-4 mb-8 md:mb-12"
          style={{ boxShadow: '4px 4px 0 var(--color-white)' }}
        >
          <p className="text-white text-xs md:text-base text-center leading-relaxed">
            Open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          <Button
            href={contactLinks.email}
            variant="secondary"
            icon={<MailIcon />}
          >
            EMAIL ME
          </Button>
          <Button
            href={contactLinks.linkedin}
            variant="primary"
            external
            icon={<LinkedInIcon />}
          >
            LINKEDIN
          </Button>
          <Button
            href={contactLinks.github}
            variant="primary"
            external
            icon={<GitHubIcon />}
          >
            GITHUB
          </Button>
        </div>
      </div>
    </section>
  );
}