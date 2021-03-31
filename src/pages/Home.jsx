// Project files
import Card from "../components/Card";
import Information from "../data/information.json";

export default function Home() {
  // Components
  const CardsArray = Information.map((item) => (
    <Card key={item.id} information={item} />
  ));

  return (
    <div id="home" className="container">
      {/* Content with cards */}
      <h1>Recommended videos</h1>

      <div className="grid">{CardsArray}</div>
    </div>
  );
}
