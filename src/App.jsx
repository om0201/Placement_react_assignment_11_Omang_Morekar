import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <h1 className="header">Todos</h1>
      <div className="todos-wrapper-container">
        <div className="todos-container">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
