const UserName = ({ name }: { name: string | undefined }) => {
  return <p>{name ? name : "Nome não cadastrado"}</p>;
};

export { UserName };
