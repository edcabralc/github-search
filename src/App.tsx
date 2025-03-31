import { useForm } from "react-hook-form";
import { useData } from "@/hooks/useData";
import { User } from "@/types/user";

const App = () => {
  const { data, loading, error, getUser, resetSearch } = useData();
  const { register, handleSubmit, watch, reset } = useForm<User>();
  const userName = watch("name");

  const onSubmit = () => {
    if (!userName) return;
    getUser(userName);
  };

  const onReset = () => {
    reset();
    resetSearch();
  };

  return (
    <>
      <div>Usuário:</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <button type="submit">Buscar</button>
        <button onClick={onReset}>Cancelar</button>
      </form>

      <div>
        {loading && !data ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {error && <p>{error}</p>}
            {!error && data && (
              <>
                <p>{data?.name ? data.name : "Nome não cadastrado"}</p>
                <p>{data?.bio ? data.bio : "Bio não cadastrada"}</p>
                <img src={data?.avatar_url} alt="Imagem de perfil" />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
