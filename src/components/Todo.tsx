export const Todo = (props) => {
  const { title, userid } = props;

  return (
    <div>
      <p>{title}</p>
      <p>{userid}</p>
    </div>
  );
};
