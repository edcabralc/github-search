import { useData } from "@/hooks/useData";
import { User } from "@/types/user";
import React from "react";
import { useForm } from "react-hook-form";
import style from "@/components/form/form.module.css";

const Form = () => {
  const { register, handleSubmit, watch, reset } = useForm<User>();
  const { getUser, resetSearch } = useData();
  const userName = watch("name");

  const onSubmit = () => {
    if (!userName) return;
    getUser(userName);
  };

  // const onReset = () => {
  //   reset();
  //   resetSearch();
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.inputContainer}>
      <div className={style.inputGroup}>
        <input
          type="text"
          {...register("name")}
          placeholder="Digite um usuário do Github"
          className={style.input}
        />
        <button type="submit" className={style.btn}>
          <img src="/search-icon.svg" />
        </button>
      </div>
      {/* <button onClick={onReset}>Cancelar</button> */}
    </form>
  );
};

export { Form };
