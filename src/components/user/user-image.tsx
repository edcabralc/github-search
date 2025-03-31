const UserImage = ({ url }: { url: string | undefined }) => {
  return <img src={url} alt="Imagem de perfil" />;
};

export { UserImage };
