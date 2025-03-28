import { api } from "@/services/api";

const useApi = async () => {
  try {
    const response = await api.get("/users/edcabralc");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { useApi };
