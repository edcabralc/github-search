const CardBio = ({ bio }: { bio: string | undefined }) => {
  return <p>{bio ? bio : "Bio não cadastrada"}</p>;
};

export { CardBio };
