import logo from './logo.svg';
import './App.css';

function App() {
  let result = 2+2;


  const title = "hello"

  return (
    <div className="App">
      <p>result of 2+2 = {result}</p>
      <p>{title.toUpperCase()}</p>
    </div>
  );
}

export default App;
