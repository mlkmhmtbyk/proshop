import logo from './logo.svg';
import './App.css';

//bu alanı değiştirmem gerekiyor deneme branchinde çalışıyorum
//bu sırada main branchde değişiklik oldu
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn R
        </a>
      </header>
    </div>
  );
}

export default App;
