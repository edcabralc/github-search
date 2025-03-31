import { api } from "@/services/api";
import { User } from "@/types/user";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const fetchData = async (
  endpoint: string,
  configs: AxiosRequestConfig = {}
) => {
  try {
    const response: AxiosResponse<User> = await api.get(endpoint, configs);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
