import style from "@/components/header/header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <img src="/github-logo.svg" alt="" />
      <h1>Perfil</h1>
      <img src="/github-text.svg" alt="" />
    </div>
  );
};
