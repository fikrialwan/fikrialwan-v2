const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/fikri-alwan/',
  github: 'https://github.com/fikrialwan',
};

const footerInfo = {
  name: 'Fikri Alwan Ramadhan',
  year: 2025,
  education: 'S.Kom. Computer Software Engineering, Tanjungpura University (2016-2022)',
};

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M18.896 5.563c-.465.207-.968.343-1.492.405-.675-.358-1.451-.551-2.256-.551-.996 0-1.913.338-2.658.955-.766.6-1.314 1.452-1.582 2.463-.504.264-1.055.4-1.616.4-.522 0-1.046-.136-1.504-.392-.77-.434-1.286-1.176-1.453-2.09-.837-.621-1.27-1.478-1.27-2.458 0-1.23.497-2.29 1.376-3.04C8.632 1.024 9.733.593 10.956.593c.826 0 1.585.278 2.195.805.614.517 1.016 1.222 1.16 2.034.78.09 1.49.276 2.13.56.05-.61-.014-1.233-.2-1.814.54-.437.95-.994 1.206-1.653.45-.155.87-.345 1.26-.57-.45-.338-.9-.628-1.35-.87z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0C4.478 0 0 4.478 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 20.164 20 16.418 20 10c0-5.522-4.478-10-10-10z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t-[3px] border-black">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 gap-4">
        <div className="text-center md:text-left">
          <p className="text-muted text-xs md:text-sm mb-1">
            © {footerInfo.year} {footerInfo.name}. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            {footerInfo.education}
          </p>
        </div>
        <div className="flex gap-4 md:gap-6">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}