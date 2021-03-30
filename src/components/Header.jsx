import { useState } from "react";

export default function Header() {
  // State
  const [query, setQuery] = useState("");

  // Property
  const logoObject = require(`../assets/images/logo/logo-light.svg`);
  const logoURL = logoObject.default;

  return (
    <header className="Header">
      <img src={logoURL} alt="Logo" />

      {/* Refactor to form */}
      <div className="search-bar">
        <input
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button href="#">Search</button>
      </div>
    </header>
  );
}
