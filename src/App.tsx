import axios from "axios";
import { useState } from "react";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<any[]>([]);

  const onClickFetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>fetch date</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </div>
  );
}

export default App;
