// Project files
import Header from "../components/Header";
import Card from "../components/Card";

export default function SearchResults({ match }) {
  const query = match.params.query;
  console.log("Results");
  console.log("search query", query);

  return (
    <div id="results">
      <Header />

      <div className="container">
        {/* Search options */}
        Filter results by:
        {/* <button onClick={() => setCards(sortCards("title", results))}>
          Name
        </button>
        <button onClick={() => setCards(sortCards("channelName", results))}>
          Channel
        </button> */}
        <hr />
        {/* Content */}
        {/* <section className="grid">{cards}</section> */}
      </div>
    </div>
  );
}
