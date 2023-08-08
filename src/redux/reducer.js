import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeToDos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateToDos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    completeToDos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});
export const { addTodos, removeToDos, updateToDos, completeToDos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
