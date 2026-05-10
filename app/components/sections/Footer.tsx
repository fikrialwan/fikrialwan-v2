const footerInfo = {
  name: 'Fikri Alwan Ramadhan',
  year: 2026,
};

export function Footer() {
  return (
    <footer className="bg-white border-t-[3px] border-black px-4 md:px-8 py-4 md:py-6">
        <p className="text-muted text-xs md:text-sm mb-1 text-center">
          © {footerInfo.year} {footerInfo.name}. All rights reserved.
        </p>
    </footer>
  );
}