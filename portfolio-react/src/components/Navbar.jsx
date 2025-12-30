import useScrollSpy from "./useScrollSpy";
import "./Navbar.css";

export default function Navbar() {
  const active = useScrollSpy(
  ["about", "skills", "projects", "contact"],100); // navbar height


  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="logo">Portfolio</div>

        <div className="links">
          {["about","skills","projects","contact"].map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}