import React from "react";
import style from "./card.module.css";

const CardBody = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.card}>{children}</div>;
};

export { CardBody };
