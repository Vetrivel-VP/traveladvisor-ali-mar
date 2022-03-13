export const userAccesTokenValidate = () => {
  const refreshToken =
    localStorage.getItem("refreshToken") !== "undefined"
      ? JSON.parse(localStorage.getItem("refreshToken"))
      : localStorage.clear();

  return refreshToken;
};
