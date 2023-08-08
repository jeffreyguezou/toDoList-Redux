import "./App.css";
import DisplayTodos from "./Components/DisplayTodos";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
