interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'filled';
  color?: 'default' | 'primary';
}

export function Tag({ children, variant = 'default', color = 'default' }: TagProps) {
  const baseClasses = 'px-2 md:px-3 py-0.5 md:py-1 text-xs font-medium border-2 border-black';

  const variantClasses = {
    default: 'bg-bg-light',
    outline: 'bg-white',
    filled: 'bg-primary text-white',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}