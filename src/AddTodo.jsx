import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddTodo = ({ add }) => {
  const [text, setText] = useState("");
  return (
    <div className="add-todo">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="add-todo-input"
      />
      <button
        className="add-todo-button"
        onClick={() => {
          if (text === "") {
            alert("Please enter a value!!!");
            return;
          }

          add(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
