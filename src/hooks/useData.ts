import { fetchData } from "@/services/fetch-data";
import { User } from "@/types/user";
import { useState } from "react";

const useData = () => {
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await fetchData("/users/edcabralc");
      console.log(response);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(`Erro ao buscar usuário ${error}`);
      setLoading(false);
      console.log(error);
    }
  };

  return { data, error, loading, getUser };
};

export { useData };
