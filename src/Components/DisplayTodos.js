import { useState } from "react";
import { connect } from "react-redux";
import ToDoItem from "./ToDoItem";
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

const DisplayToDos = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <ToDoItem
                    key={item.id}
                    item={item}
                    removeToDo={props.removeToDo}
                    updateToDo={props.updateToDo}
                    completeToDo={props.completeToDo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <ToDoItem
                    key={item.id}
                    item={item}
                    removeToDo={props.removeToDo}
                    updateToDo={props.updateToDo}
                    completeToDo={props.completeToDo}
                  />
                )
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayToDos);
