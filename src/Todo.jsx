/* eslint-disable react/prop-types */
import { useState } from "react";

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);
  return (
    <div className="todo">
      {mode === "list" ? (
        <>
          <span className="todo-text">{todo.text}</span>
          <div className="todo-btn-container">
            <button className="remove-todo" onClick={remove}>
              Remove
            </button>
            <button className="edit-todo" onClick={() => setMode("edit")}>
              Edit
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="edit-todo-input"
          />
          <div className="todo-btn-container">
            <button
              className="edit-todo-save"
              onClick={() => {
                edit(text);
                setMode("list");
              }}
            >
              Save
            </button>
            <button
              className="edit-todo-cancel"
              onClick={() => setMode("list")}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
