import logo from './logo.svg';
import './App.css';
import HelloWorld1 from './components/HelloWorld/HelloWord1';
import HelloWorld2 from "./components/HelloWorld/HelloWorld2"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld1 firstname="omar"/>
        <HelloWorld2 lastname="farid"/>
      </header>
    </div>
  );
}

export default App;
