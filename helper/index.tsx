export const checkResponseStatus = (response: any) => {
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
