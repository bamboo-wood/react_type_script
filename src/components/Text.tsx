import React, { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
  children: React.ReactNode;
};

export const Text: FC<Props> = (props) => {
  const { color, fontSize, children } = props;
  return (
    <div>
      <p style={{ color, fontSize }}>{children}</p>
    </div>
  );
};
