interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href: string;
  children: React.ReactNode;
  external?: boolean;
  icon?: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', href, children, external = false, icon }: ButtonProps) {
  const baseClasses = 'font-medium flex items-center justify-center gap-2 border-2 border-black text-center transition-transform hover:scale-[0.98] active:scale-[0.96]';

  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-white text-black',
    outline: 'bg-transparent text-dark',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 md:px-8 py-3 md:py-4 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const rel = external ? 'noopener noreferrer' : undefined;
  const target = external ? '_blank' : undefined;

  return (
    <a
      href={href}
      rel={rel}
      target={target}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      style={{ boxShadow: '6px 6px 0 var(--color-black)' }}
    >
      {icon}
      {children}
    </a>
  );
}