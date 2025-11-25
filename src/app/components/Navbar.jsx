import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Restaurants", href: "#restaurants" },
  { name: "Cuisines", href: "#cuisines" },
  { name: "Deals", href: "#deals" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">VPro Eats</span>
      </div>
      <nav className="navbar__links">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="navbar__actions">
        <button className="btn btn--ghost">Log in</button>
        <button className="btn btn--primary">Sign up</button>
      </div>
    </header>
  );
}

