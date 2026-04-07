import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-50 text-black px-6 py-4 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Lakshmi Prasad Veerla
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li>
        <a href="#home" className="hover:text-blue-600">
        Home
        </a>
        </li>

        <li>
        <a href="#about" className="hover:text-blue-600">
        About
        </a>
        </li>

        <li>
        <a href="#experience" className="hover:text-blue-600">
        Experience
        </a>
        </li>

        <li>
        <a href="#projects" className="hover:text-blue-600">
        Projects
        </a>
        </li>

        <li>
        <a href="#skills" className="hover:text-blue-600">
        Skills
        </a>
        </li>

        <li>
        <a href="#contact" className="hover:text-blue-600">
        Contact
        </a>
        </li>
</ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>✖</button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
        <li>
        <a href="#home" onClick={() => setOpen(false)} className="hover:text-blue-600">
        Home
        </a>
        </li>

        <li>
        <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-600">
        About
        </a>
        </li>

        <li>
        <a href="#experience" onClick={() => setOpen(false)} className="hover:text-blue-600">
        Experience
        </a>
        </li>

        <li>
        <a href="#projects" onClick={() => setOpen(false)} className="hover:text-blue-600">
        Projects
        </a>
        </li>

        <li>
        <a href="#skills" onClick={() => setOpen(false)} className="hover:text-blue-600">
        Skills
        </a>
        </li>

        <li>
        <a href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-600">
        Contact
        </a>
        </li>

</ul>
      </div>
    </nav>
  );
}

export default Navbar;