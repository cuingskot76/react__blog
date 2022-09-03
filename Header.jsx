import React from "react";
import navLinks from "./Constant/app";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex border-dotted  border-2 border-sky-500  justify-between py-4 px-7 rounded-sm">
      <Link to="/">
        <h3 className="">afrzl blog</h3>
      </Link>
      <nav className="flex  gap-8">
        {navLinks.map((link) => (
          <div key={link.title}>
            <Link to={`${link.id}`}>{link.title}</Link>
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
