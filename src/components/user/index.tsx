import { User as UserRoot } from "@/components/user/user-body";
import { User as UserType } from "@/types/user";
import style from "@/components/user/user.module.css";

export const User = ({ user }: { user: UserType }) => {
  const { avatar_url, name, bio } = user;
  return (
    <div className={style.userWrapper}>
      <div className={style.userImage}>
        <UserRoot.Image url={avatar_url} />
      </div>
      <div className={style.userInfo}>
        <UserRoot.Name name={name} />
        <UserRoot.Bio bio={bio} />
      </div>
    </div>
  );
};
