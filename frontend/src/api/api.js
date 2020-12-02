import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "586fda55-19b8-4640-9136-1be85bd84f3b",
  },
});

export const authAPI = {
  login(login, password) {
    return instance
      .post("/auth/login", {
        login,
        password,
      })
      .then((response) => response.data);
  },
};
