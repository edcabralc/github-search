import React from "react";
import style from "@/components/container/container.module.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>{children}</div>
    </div>
  );
};

export { Container };
