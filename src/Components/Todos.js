import { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeToDos,
  updateToDos,
  completeToDos,
} from "../redux/reducer";
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (obj) => dispatch(addTodos(obj)),
    removeToDo: (id) => dispatch(removeToDos(id)),
    updateToDo: (obj) => dispatch(updateToDos(obj)),
    completeToDo: (id) => dispatch(completeToDos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div className="addTodos">
      TODOS
      <input type="text" onChange={handleChange} className="todo-input" />
      <button
        className="add-btn"
        onClick={() =>
          props.addToDo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
