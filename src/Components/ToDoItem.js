import { useRef } from "react";
const ToDoItem = (props) => {
  const { item, updateToDo, removeToDo, completeToDo } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateToDo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id}>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyDown={(event) => {
          update(item.id, inputRef.current.value, event);
        }}
      ></textarea>
      <button onClick={changeFocus}>Edit</button>
      <button onClick={completeToDo}>Complete</button>
      <button onClick={() => removeToDo(item.id)}>Delete</button>
    </li>
  );
};
export default ToDoItem;
