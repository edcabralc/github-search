import { fetchData } from "@/services/fetch-data";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getUser = async () => {
    setLoading(true);

    try {
      const response = await fetchData("/users/edcabralc");

      if (response === undefined) {
        throw new Error("Erro ao buscar usuário");
      }

      console.log(response);
      setData(response);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(`Erro ao buscar usuário ${error.message}`);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { data, error, loading, getUser };
};

export { useData };
