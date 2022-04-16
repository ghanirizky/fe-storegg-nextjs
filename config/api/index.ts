import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { checkResponseStatus, getCookieToken } from "../../helper";

interface callApiProps extends AxiosRequestConfig {
  authToken?: boolean;
  serverToken?: string;
}

export const callAPI = async ({
  url,
  method,
  data,
  authToken = false,
  serverToken,
}: callApiProps) => {
  const URL_API: string = `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_API_VER}`;
  let headers: any = {};

  if (serverToken) headers.authorization = `Bearer ${serverToken}`;
  else if (authToken)
    headers.authorization = `Bearer ${getCookieToken() as string}`;

  const response: AxiosResponse = await axios({
    url: `${URL_API}${url}`,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  return checkResponseStatus(response);
};
