import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/nitingoley",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/nitingoley42",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/your_instagram",
  },
  {
    title: "Email",
    href: "mailto:nitingoley42@gmail.com",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]
      -z-10"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex md:flex-row md:justify-between flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center md:flex-row gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex gap-1.5 cursor-pointer text-white hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.title}</span>
                <ArrowUpIcon className="w-4 h-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
