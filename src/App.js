import './App.css';
import Confetti from "./Confetti";
import logo from './logo.svg';

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ marginBottom: "0px" }}>Congratulations !!!</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          Your container is running 🙌🏻
        </p>
      </header>
    </div>
  );
};

export default App;
