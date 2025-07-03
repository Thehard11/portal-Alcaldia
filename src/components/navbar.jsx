import React, { useState, useRef, useEffect } from "react";

const menu = [
  { label: "Inicio", href: "#" },
  { label: "Municipio", href: "#" },
  {
    label: "Gobierno",
    dropdown: [
      { label: "Ayuntamiento", href: "#" },
      { label: "Presupuesto Participativo", href: "#" },
    ],
  },
  {
    label: "Servicios",
    dropdown: [
      { label: "Emergencia", href: "#" },
      { label: "Escribe a la Alcaldesa", href: "#" },
      { label: "Transparencia", href: "#" },
    ],
  },
  { label: "Noticias y Multimedia", href: "#" },
  { label: "Contacto", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'Gobierno' | 'Servicios' | null
  const [show, setShow] = useState(false); // Para animación de aparición
  const dropdownRefs = {
    Gobierno: useRef(null),
    Servicios: useRef(null),
  };

  useEffect(() => {
    setShow(true);
  }, []);

  // Cierra el dropdown si el foco sale completamente del botón y el menú
  const handleDropdownBlur = (dropdown) => (e) => {
    setTimeout(() => {
      const btn = dropdownRefs[dropdown]?.current?.button;
      const menu = dropdownRefs[dropdown]?.current?.menu;
      if (
        document.activeElement !== btn &&
        (!menu || !menu.contains(document.activeElement))
      ) {
        setOpenDropdown(null);
      }
    }, 0);
  };

  return (
    <div>
      <div className="antialiased bg-gray-100 dark:bg-gray-900">
        <div
          className={`w-full bg-white shadow-md dark:text-white-200 dark:bg-white-800 z-30
            transition-all duration-700
            ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          style={{ position: 'relative', zIndex: 30, color: '#6798c3' }}
        >
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a href="#" className="flex items-center focus:outline-none focus:shadow-outline">
                <img
                  src="https://adn.gob.do/wp-content/uploads/2021/11/Logo.svg"
                  alt="Logo ADN"
                  className="h-10 w-auto"
                  style={{ maxHeight: '40px' }}
                />
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`w-6 h-6 transition-transform duration-300 ${mobileOpen ? 'rotate-90' : 'rotate-0'}`}
                >
                  {mobileOpen ? (
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                  )}
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col flex-grow pb-4 transition-all duration-500 ease-in-out md:hidden
                ${mobileOpen ? 'max-h-[1000px] opacity-100 flex' : 'max-h-0 opacity-0 pointer-events-none flex'}
              `}
              style={{ overflow: 'hidden' }}
            >
              {menu.map((item) => {
                if (!item.dropdown) {
                  return (
                    <a
                      key={item.label}
                      className="relative px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg text-[#6798c3] hover:bg-[#6798c3] focus:bg-[#6798c3] hover:text-white focus:text-white md:mt-0 md:ml-4 transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#6798c3] hover:after:bg-white focus:after:bg-white after:transition-all after:duration-300 hover:after:w-full after:mt-1 focus:after:w-full"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  );
                }
                // Dropdown
                return (
                  <div
                    key={item.label}
                    className="relative mt-2"
                  >
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent rounded-lg text-[#6798c3] hover:bg-[#6798c3] focus:bg-[#6798c3] hover:text-white focus:text-white md:mt-0 md:ml-4 transition-colors duration-300"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      tabIndex={0}
                    >
                      <span>{item.label}</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 ml-1 transition-transform duration-200 transform ${openDropdown === item.label ? "rotate-180" : "rotate-0"}`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                    {/* Dropdown siempre renderizado para animación */}
                    <div
                      role="menu"
                      tabIndex={-1}
                      className={`absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700 z-40 transition-all duration-300
                        ${openDropdown === item.label ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            className="group relative block px-4 py-2 text-sm text-gray-700 rounded-lg dark:text-gray-200 focus:outline-none transition-colors duration-200 overflow-hidden"
                            tabIndex={0}
                          >
                            <span className="relative z-10">{subitem.label}</span>
                            <span className="absolute left-0 top-0 h-full w-0 group-hover:w-full group-focus:w-full bg-gray-100 dark:bg-gray-600 transition-all duration-300 z-0" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>
            <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row hidden md:flex">
              {menu.map((item) => {
                if (!item.dropdown) {
                  return (
                    <a
                      key={item.label}
                      className="relative px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg text-[#6798c3] hover:bg-[#6798c3] focus:bg-[#6798c3] hover:text-white focus:text-white md:mt-0 md:ml-4 transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#6798c3] hover:after:bg-white focus:after:bg-white after:transition-all after:duration-300 hover:after:w-full after:mt-1 focus:after:w-full"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  );
                }
                // Dropdown
                return (
                  <div
                    key={item.label}
                    className="relative md:mt-0 md:ml-4 mt-2"
                  >
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent rounded-lg text-[#6798c3] hover:bg-[#6798c3] focus:bg-[#6798c3] hover:text-white focus:text-white md:mt-0 md:ml-4 transition-colors duration-300"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      tabIndex={0}
                    >
                      <span>{item.label}</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 ml-1 transition-transform duration-200 transform ${openDropdown === item.label ? "rotate-180" : "rotate-0"}`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                    {/* Dropdown siempre renderizado para animación */}
                    <div
                      role="menu"
                      tabIndex={-1}
                      className={`absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700 z-40 transition-all duration-300
                        ${openDropdown === item.label ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            className="group relative block px-4 py-2 text-sm text-gray-700 rounded-lg dark:text-gray-200 focus:outline-none transition-colors duration-200 overflow-hidden"
                            tabIndex={0}
                          >
                            <span className="relative z-10">{subitem.label}</span>
                            <span className="absolute left-0 top-0 h-full w-0 group-hover:w-full group-focus:w-full bg-gray-100 dark:bg-gray-600 transition-all duration-300 z-0" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;