import './App.css';
import { useContextData } from './Context/context'; 

function App() {
  const { count, setCount } = useContextData(); 

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default App;
