"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top main-navbar"
      id="mainNavbar"
    >
      <div className="container">
        <Link
          className="navbar-brand brand-logo"
          href="index.html"
          aria-label="Philips Ajibola homepage"
        >
          <span className="brand-mark">
            P<span>.</span>
          </span>
          <span className="brand-name">
            PHILIPS<span>AJIBOLA</span>
          </span>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                href="/"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/skills" ? "active" : ""}`}
                href="/skills"
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/projects" ? "active" : ""}`}
                href="/projects"
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-2">
              <Link
                className="btn btn-primary-custom nav-cta"
                href="contact.html"
              >
                Let's Talk
                <i className="bi bi-arrow-up-right ms-1"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
