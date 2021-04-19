import axiosIntance from "../utils/axios-configured";

export const getSocialImages = () => {
  return axiosIntance.get("/api/v1/cms/social-accounts-images/public");
};
