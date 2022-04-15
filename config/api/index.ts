import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { checkResponseStatus, getCookieToken } from "../../helper";

interface callApiProps extends AxiosRequestConfig {
  authToken?: boolean;
}

export const callAPI = async ({
  url,
  method,
  data,
  authToken = false,
}: callApiProps) => {
  const URL_API : string = `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_API_VER}`;
  let headers: any = {};
  if (authToken) {
    const token = getCookieToken() as string;
    headers.authorization = `Bearer ${token}`;
  }
  const response : AxiosResponse = await axios({
    url: `${URL_API}${url}`,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  return checkResponseStatus(response);
};
