import { useReducer } from "react";
import { initialState, reducer } from "./TodoReducer";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const TodoList = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="todos-list-wrapper">
      <div className="todos-list-container">
        {state.todos.map((t) => (
          <Todo
            key={t.id}
            todo={t}
            remove={() => dispatch({ type: "remove", id: t.id })}
            edit={(text) => dispatch({ type: "edit", id: t.id, text: text })}
          />
        ))}
      </div>

      <div className="add-todos-container">
        <AddTodo add={(text) => dispatch({ type: "add", text: text })} />
      </div>
    </div>
  );
};

export default TodoList;
