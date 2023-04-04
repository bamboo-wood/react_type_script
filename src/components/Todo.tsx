import { FC } from "react";
import { TodoType } from "../types/Todo";

export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;

  const completeMark = completed ? "[完]" : "[未]";

  return (
    <div>
      <p>{`${completeMark}${title}(user:${userId})`}</p>
    </div>
  );
};
