import * as axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: "http://127.0.0.1:8000/",
    headers: {},
});

export const authAPI = {
    me(accessToken) {
        return instance.get("auth/users/me/", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    },
    login(username, password) {
        return instance
            .post("auth/jwt/create/", {
                username,
                password,
            })
    },
    // logout(email, password, rememberMe = false) {
    //   return instance.delete("/auth/login").then((response) => response.data);
    // },
};