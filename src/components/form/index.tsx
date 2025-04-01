import { User } from "@/types/user";
import { useForm } from "react-hook-form";
import style from "@/components/form/form.module.css";

type Form = {
  action: (name: string) => void;
  resetAction: () => void;
};

const Form = ({ action }: Form) => {
  const { register, handleSubmit, watch } = useForm<User>();

  const userName = watch("name");

  const onSubmit = async () => {
    if (!userName) return;
    action(userName);
  };

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
    </form>
  );
};

export { Form };
