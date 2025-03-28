import { api } from "@/services/api";
import { User } from "@/types/user";
import { AxiosResponse } from "axios";

const fetchData = async (endpoint: string) => {
  try {
    const response: AxiosResponse<User> = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
