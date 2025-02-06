export const Header = () => {
  return (
    <div className="relative top-3 w-full flex justify-center z-10">
      <nav className="flex gap-2 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};
