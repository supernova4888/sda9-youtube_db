// Project files
import Header from "../components/Header";
import Card from "../components/Card";
import Information from "../data/information.json";

export default function Home() {
  // Components
  const CardsArray = Information.map((item) => (
    <Card key={item.id} information={item} />
  ));

  return (
    <div className="HomePage">
      {/* Header */}
      <Header />

      {/* Content with cards */}
      <section className="container">
        <h1>Recommended videos</h1>

        <div className="grid">{CardsArray}</div>
      </section>
    </div>
  );
}
