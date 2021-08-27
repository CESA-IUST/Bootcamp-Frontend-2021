import logo from './logo.svg';
import './App.css';
import Clock from './views/components/Clock';
import Clock_function from './views/components/Clock_function';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        {/* <Clock /> */}
        <Clock_function />
      </header>
    </div>
  );
}

export default App;
