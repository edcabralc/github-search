import style from "@/components/user/user.module.css";

type UserNameType = {
  name: string | undefined;
  html_url: string | undefined;
};

const UserName = ({ name, html_url }: UserNameType) => {
  return (
    <p className={style.userName}>
      {name ? (
        <a className={style.urlProfile} href={html_url} target="_blank">
          {name}
        </a>
      ) : (
        "Nome não cadastrado"
      )}
    </p>
  );
};

export { UserName };
