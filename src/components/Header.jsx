import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  // State
  const [query, setQuery] = useState("");

  // Property
  const logoObject = require(`../assets/images/logo/logo-light.svg`);
  const logoURL = logoObject.default;
  const history = useHistory();

  // Methods
  function onSearch(event) {
    event.preventDefault();

    history.push(`/results/${query}`);
  }

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/">
        <img src={logoURL} alt="Logo" />
      </Link>

      {/* Search bar */}
      <form onSubmit={onSearch} className="search-bar">
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
