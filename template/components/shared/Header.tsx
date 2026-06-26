import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import logoImg from "../../../imports/image.png";

const G = "#7AC943";
const Y = "#F4D000";

const navItems = [
  {
    label: "Formations",
    children: [
      { label: "Enseignement Général", to: "/formations/enseignement-general" },
      { label: "Technique & Professionnel", to: "/formations/enseignement-technique" },
      { label: "Enseignement Supérieur", to: "/formations/enseignement-superieur" },
    ],
  },
  { label: "Admissions", to: "/admissions" },
  { label: "Vie CERIN", to: "/vie-ceri" },
  { label: "Actualités", to: "/actualites" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "white",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
        paddingTop: scrolled ? "10px" : "14px",
        paddingBottom: scrolled ? "10px" : "14px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6">
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center gap-2">
          <img  src={logoImg} alt="CERIN Groupe" className="h-11 w-auto"  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDrop(item.label)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <button
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                  style={{ color: openDrop === item.label ? G : "#374151" }}
                >
                  {item.label}
                  <ChevronDown size={13} className={`transition-transform duration-200 ${openDrop === item.label ? "rotate-180" : ""}`} />
                </button>
                {openDrop === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                        style={{ color: location.pathname === child.to ? G : undefined }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: G }} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                style={{ color: location.pathname === item.to ? G : "#374151" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
          <Link
            to="/admissions"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-px active:translate-y-0"
            style={{ background: G, fontFamily: "'Poppins', sans-serif" }}
          >
            Je m'inscris
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto p-2 rounded-xl"
          style={{ background: "#F5F6F8" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} style={{ color: "#0B0B0B" }} /> : <Menu size={20} style={{ color: "#0B0B0B" }} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.to}
                    className="block px-5 py-2.5 text-sm font-medium rounded-xl transition-colors"
                    style={{ color: location.pathname === child.to ? G : "#374151" }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                className="block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors"
                style={{ color: location.pathname === item.to ? G : "#374151" }}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-gray-100 mt-3">
            <Link
              to="/admissions"
              className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: G, fontFamily: "'Poppins', sans-serif" }}
            >
              Je m'inscris
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
