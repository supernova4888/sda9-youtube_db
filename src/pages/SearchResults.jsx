// NPM Package
import { useState } from "react";

// Project files
import Card from "../components/Card";
import Information from "../data/information.json";

export default function SearchResults({ match }) {
  // State
  const [sortKey, setSortKey] = useState("title");

  // Consts
  const query = match.params.query.toUpperCase();
  const filteredResults = Information.filter((item) =>
    item.title.toUpperCase().match(query)
  );
  const sortedResults = filteredResults.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  // Components
  const CardsArray = sortedResults.map((item) => (
    <Card key={item.id} information={item} />
  ));

  return (
    <div id="results" className="container">
      {/* Search options */}
      <section>
        Filter results by:
        <button onClick={() => setSortKey("title")}>Name</button>
        <button onClick={() => setSortKey("channelName")}>Channel</button>
      </section>

      <hr />
      {/* Content */}
      <section className="grid">{CardsArray}</section>
    </div>
  );
}
