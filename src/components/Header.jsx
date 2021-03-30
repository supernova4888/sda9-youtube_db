import { useState } from "react";

export default function Header() {
  // State
  const [query, setQuery] = useState("");

  // Property
  const logoObject = require(`../assets/images/logo/logo-light.svg`);
  const logoURL = logoObject.default;

  return (
    <header className="header">
      {/* Logo */}
      <img src={logoURL} alt="Logo" />

      {/* Search bar */}
      <form className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </header>
  );
}
