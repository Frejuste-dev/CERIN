import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "../../imports/image.png";

const navLinks = [
  {
    label: "Formations",
    children: [
      { label: "Enseignement Général", href: "/formations/enseignement-general" },
      { label: "Enseignement Technique", href: "/formations/enseignement-technique" },
      { label: "Enseignement Supérieur", href: "/formations/enseignement-superieur" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Vie Scolaire", href: "/vie-ceri" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logoImg}
            alt="CERI Groupe"
            className="h-12 w-auto"
            onError={(e) => {
              e.currentTarget.src = '/images/placeholder.svg';
              e.currentTarget.onerror = null;
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:text-[#7AC943] hover:bg-green-50 transition-colors text-sm font-medium">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-[#7AC943] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-[#7AC943] hover:bg-green-50 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-sm font-medium text-[#7AC943] hover:text-green-700 transition-colors"
          >
            Se connecter
          </Link>
          <Link
            to="/admissions"
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: "linear-gradient(135deg, #7AC943, #5aad1c)" }}
          >
            Candidater maintenant
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-2xl overflow-y-auto max-h-[90vh]">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className="block px-6 py-2 text-sm text-gray-700 hover:text-[#7AC943] hover:bg-green-50 rounded-lg"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#7AC943] hover:bg-green-50 rounded-lg"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-gray-100">
            <Link
              to="/admissions"
              className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #7AC943, #5aad1c)" }}
            >
              Candidater maintenant
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
