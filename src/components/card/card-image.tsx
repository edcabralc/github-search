const CardImage = ({ url }: { url: string | undefined }) => {
  return <img src={url} alt="Imagem de perfil" />;
};

export { CardImage };
