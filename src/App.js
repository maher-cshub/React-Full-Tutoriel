import logo from './logo.svg';
import './App.css';
import HelloWorld1 from './components/HelloWorld/HelloWord1';
import HelloWorld2 from "./components/HelloWorld/HelloWorld2"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HelloWorld1 label_value="omar" label_name="firstname" label_type="text">
          <p>please enter your firstname</p>
        </HelloWorld1>

        <HelloWorld2 lastname="farid">
          <p>please enter your last name</p>
        </HelloWorld2>
        
      </header>
    </div>
  );
}

export default App;
