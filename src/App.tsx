import { useData } from "@/hooks/useData";
import { useForm } from "react-hook-form";
import { User } from "@/types/user";

function App() {
  const { data, loading, error, getUser } = useData();
  const { register, handleSubmit, watch } = useForm<User>();
  const userName = watch("name");

  const onSubmit = () => {
    if (!userName) return;
    getUser(userName);
  };

  return (
    <>
      <div>Usuário:</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <button type="submit">Buscar</button>
        <button type="reset">Cancelar</button>
      </form>

      <div>
        {loading && !data ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {!error && data && (
              <>
                <p>{data?.name}</p>
                <p> {data?.bio}</p>
                <img src={data?.avatar_url} alt="" />
              </>
            )}
            {error && <p>{error}</p>}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
