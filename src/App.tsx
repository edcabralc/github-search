import { useData } from "@/hooks/useData";

function App() {
  const { data, loading } = useData();

  return (
    <>
      <div>Usuário:</div>

      <div>
        {loading && !data ? (
          <div>Carregando...</div>
        ) : (
          <div>
            <p>{data?.name}</p>
            <p> {data?.bio}</p>
            <img src={data?.avatar_url} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
