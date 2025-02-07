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
            {/* GitHub Link */}
            <a
              href="https://github.com/nitingoley"
              className="inline-flex items-center gap-1.5 cursor-pointer text-white hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right w-4 h-4" viewBox="0 0 16 16">
                <path d="M10.854 1.146a.5.5 0 0 1 .707.707L6.707 6H12a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 1 0V6.707L10.854 1.146z" />
              </svg>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com/in/nitingoley42"
              className="inline-flex items-center gap-1.5 cursor-pointer text-white hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right w-4 h-4" viewBox="0 0 16 16">
                <path d="M10.854 1.146a.5.5 0 0 1 .707.707L6.707 6H12a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 1 0V6.707L10.854 1.146z" />
              </svg>
            </a>

            {/* Instagram Link */}
            <a
              href="https://instagram.com/your_instagram"
              className="inline-flex items-center gap-1.5 cursor-pointer text-white hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right w-4 h-4" viewBox="0 0 16 16">
                <path d="M10.854 1.146a.5.5 0 0 1 .707.707L6.707 6H12a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 1 0V6.707L10.854 1.146z" />
              </svg>
            </a>

            {/* Email Link */}
            <a
              href="mailto:nitingoley42@gmail.com"
              className="inline-flex items-center gap-1.5 cursor-pointer text-white hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Email</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right w-4 h-4" viewBox="0 0 16 16">
                <path d="M10.854 1.146a.5.5 0 0 1 .707.707L6.707 6H12a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 1 0V6.707L10.854 1.146z" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
