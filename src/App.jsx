// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Header from "./components/Header";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SearchResults from "./pages/SearchResults";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* The header is outside the Switch to make it available all the time */}
        <Header />

        {/* The pages we want to show based on the browser URL */}
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Video} path="/video/:id" />
          <Route component={SearchResults} path="/results/:query" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
