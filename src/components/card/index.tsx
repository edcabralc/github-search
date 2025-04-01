import style from "@/components/card/card.module.css";

import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.card}>{children}</div>;
};

export { Card };
