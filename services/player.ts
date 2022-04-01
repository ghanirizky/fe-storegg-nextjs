import axios from "axios";

const URL_API = `${process.env.NEXT_PUBLIC_API}/${process.env.NEXT_PUBLIC_API_VER}`

export const getFeaturedGame = async () => {
  const URL = `${URL_API}/players/landingpage`;
  const response = await axios.get(URL);
  return response.data.data;
};

export const getVoucherDetail = async (id: string) => {
  const URL = `${URL_API}/players/${id}/detail`;
  const response = await axios.get(URL);
  return response.data.data;
};

export const getGameCategory = async () => {
  const URL = `${URL_API}/players/category`;
  const response = await axios.get(URL);
  return response.data.data;
};
