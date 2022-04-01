import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VER;

export const getFeaturedGame = async () => {
  const URL = `${ROOT_API}/${API_VERSION}/players/landingpage`;
  const response = await axios.get(URL);

  return response.data.data;
};

export const getVoucherDetail = async (id: any) => {
  const URL = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;
  const response = await axios.get(URL);

  return response.data.data;
};
