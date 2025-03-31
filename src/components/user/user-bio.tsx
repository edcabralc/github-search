const UserBio = ({ bio }: { bio: string | undefined }) => {
  return <p>{bio ? bio : "Bio não cadastrada"}</p>;
};

export { UserBio };
