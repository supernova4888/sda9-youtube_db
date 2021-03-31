// Project files
import Header from "../components/Header";
import Card from "../components/Card";
import Information from "../data/information.json";

export default function SearchResults({ match }) {
  // Consts
  const query = match.params.query; // make to upperse
  const results = Information.filter((item) => item.title.match(query));

  // Method
  function sortCards() {}

  // Components
  const CardsArray = results.map((item) => (
    <Card key={item.id} information={item} />
  ));

  return (
    <div id="results">
      <Header />

      <div className="container">
        {/* Search options */}
        Filter results by:
        <button>Name</button>
        <button>Channel</button>
        <hr />
        {/* Content */}
        <section className="grid">{CardsArray}</section>
      </div>
    </div>
  );
}
