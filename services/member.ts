import { callAPI } from "../config/api";

export const dashboard = async () => {
  return callAPI({
    url: `/players/dashboard`,
    method: "GET",
    authToken: true,
  });
};

export const transHistory = async (tab: string) => {
  return callAPI({
    url: `/players/history?status=${tab}`,
    method: "GET",
    authToken: true,
  });
};

//Server side call
export const transHistoryDetail = async (id: string, token: string) => {
  return callAPI({
    url: `/players/history/${id}/detail`,
    method: "GET",
    serverToken: token,
  });
};

export const getProfile = async() => {
  return callAPI({
    url: `/players/profile`,
    method: "GET",
    authToken : true
  });
}

export const updateProfile = async (payload: any) => {
  return callAPI({
    url: `/players/profile`,
    method: "put",
    data : payload,
    authToken : true
  });
};

