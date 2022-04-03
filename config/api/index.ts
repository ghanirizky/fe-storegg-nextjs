import axios, { AxiosRequestConfig } from "axios";

const URL_API = `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_API_VER}`;

export const callAPI = async ({ url, method, data }: AxiosRequestConfig) => {
  const response = await axios({ url, method, data }).catch(
    (err) => err.response
  );

  if (String(response?.status)[0] !== "2") {
    return {
      error: true,
      message: response.data?.message ?? "Internal server error",
      data: response.data.data,
    };
  }

  return {
    error: false,
    message: "Success",
    data: response.data.data,
  };
};
