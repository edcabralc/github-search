import { api } from "@/services/api";
import { UserType } from "@/types/user";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const fetchData = async (
  endpoint: string,
  configs: AxiosRequestConfig = {}
) => {
  try {
    const response: AxiosResponse<UserType> = await api.get(endpoint, configs);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
