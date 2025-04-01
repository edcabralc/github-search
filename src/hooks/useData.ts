import { fetchData } from "@/services/fetch-data";
import { User } from "@/types/user";
import { useState } from "react";

const useData = () => {
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

  const getUser = async (user: string) => {
    setLoading(true);
    setError(null);

    if (abortController) {
      abortController.abort();
    }

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const response = await fetchData(`/users/${user}`, {
        signal: controller.signal,
      });

      if (response === undefined) {
        throw new Error(
          "Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente"
        );
      }

      console.log(response);
      setData(response);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          console.log("Requisição abortada");
        } else {
          console.error(error);
          setError(` ${error.message}`);
          setLoading(false);
          setData(null);
        }
      }
    }
  };

  const resetSearch = () => {
    if (abortController) {
      abortController.abort();
    }

    setLoading(false);
    setError(null);
    setData(null);
    setAbortController(null);
  };

  return { data, error, loading, getUser, resetSearch };
};

export { useData };
