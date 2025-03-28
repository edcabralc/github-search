import { api } from "@/services/api";
import { useState, useEffect } from "react";

type user = {
  name: string;
  avatar_url: string;
};

function App() {
  const [user, setUser] = useState<user | null>(null);

  useEffect(() => {
    api
      .get("/users/edcabralc") // Troque "octocat" pelo username desejado
      .then(response => setUser(response.data))
      .catch(error => console.error("Erro ao buscar usuário", error));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <img src={user.avatar_url} alt="Avatar" width={100} />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default App;
