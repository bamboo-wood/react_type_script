import axios from "axios";
import { useState } from "react";
import { Todo } from "./components/Todo";
import { Text } from "./components/Text";
import { TodoType } from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Text color="red" fontSize="18px">
        react * typescript
      </Text>

      <button onClick={onClickFetchData}>fetch date</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
