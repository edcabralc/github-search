import style from "@/components/user/user.module.css";

const UserName = ({ name }: { name: string | undefined }) => {
  return (
    <p className={style.userName}>{name ? name : "Nome não cadastrado"}</p>
  );
};

export { UserName };
