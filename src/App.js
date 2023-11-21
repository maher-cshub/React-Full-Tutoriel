/*
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./routes/Main/Main";
import About from "./routes/About/About";
import PokemonInfo from "./routes/Pokemon/PokemonInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="#" className="App-logo" alt="logo" />
      </header>
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" exact Component={Main} />
          <Route path="/about" Component={About} />
          <Route path="/:pokeName" Component={PokemonInfo} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
*/

//mini store project

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./mini_store_project/components/Header/Header";
import Footer from "./mini_store_project/components/Footer/Footer";
import Main from "./mini_store_project/routes/Main/Main";
import About from "./mini_store_project/routes/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" exact Component={Main} />
          <Route path="/about" Component={About} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
