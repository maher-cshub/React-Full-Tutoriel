<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./routes/Main/Main";
import About from "./routes/About/About";
import PokemonInfo from "./routes/Pokemon/PokemonInfo";
>>>>>>> states_events_&_mini_project

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
=======
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" exact Component={Main} />
          <Route path="/about" Component={About} />
          <Route path="/:pokeName" Component={PokemonInfo} />
        </Routes>

        <Footer></Footer>
      </Router>
>>>>>>> states_events_&_mini_project
    </div>
  );
}

export default App;
