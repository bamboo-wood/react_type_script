import { FC } from "react";
import { User } from "../types/User";

type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;

  return (
    <dl>
      <dt>username</dt>
      <dd>{user.name}</dd>
      <dt>hobbies</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
