import style from "@/components/user/user.module.css";

const UserBio = ({ bio }: { bio: string | undefined }) => {
  return <p className={style.userBio}>{bio ? bio : "Bio não cadastrada"}</p>;
};

export { UserBio };
