import { User as UserRoot } from "@/components/user/user-body";
import { UserType } from "@/types/user";
import style from "@/components/user/user.module.css";

export const User = ({ user }: { user: UserType }) => {
  const { avatar_url, name, bio, html_url } = user;
  return (
    <div className={style.userWrapper}>
      <div className={style.userImage}>
        <UserRoot.Image url={avatar_url} />
      </div>
      <div className={style.userInfo}>
        <UserRoot.Name name={name} html_url={html_url} />
        <UserRoot.Bio bio={bio} />
      </div>
    </div>
  );
};
