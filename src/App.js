import "./App.css";
import DisplayTodos from "./Components/DisplayTodos";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="App">
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
