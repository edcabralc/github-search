import { useState, useEffect } from "react";
import { useData } from "./hooks/useData";

type user = {
  name: string;
  avatar_url: string;
};

function App() {
  const [user, setUser] = useState<user | null>(null);
  const { data, loading, getUser } = useData();

  useEffect(() => {
    const loadData = async () => await getUser();
    loadData();
  }, []);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {data && !loading && (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.avatar_url}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
