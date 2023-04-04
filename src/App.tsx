import axios from "axios";
import { useState } from "react";
import { Todo } from "./components/Todo";
import { Text } from "./components/Text";
import { TodoType } from "./types/Todo";
import { UserProfile } from "./components/UserProfile";
import { User } from "./types/User";

const user: User = {
  name: "aaa",
  // hobbies: ["aaa", "bbb"],
};

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

      <UserProfile user={user} />

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
