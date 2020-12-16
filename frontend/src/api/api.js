import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: "http://127.0.0.1:8000/",
  headers: {},
});

export const authAPI = {
  createUser(username, password) {
    return instance
      .post("auth/users/", {
        username,
        password,
      })
      .catch((err) => {
        throw err;
      });
  },
  me(accessToken) {
    return instance
      .get("auth/users/me/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch((err) => {
        if (err.response.status === 401) {
          throw new Error(`${err.config.url} not aloowed`);
        }
        throw err;
      });
  },
  create(username, password) {
    return instance
      .post("auth/jwt/create/", {
        username,
        password,
      })
      .catch((err) => {
        if (err.response.status === 401) {
          throw new Error(`${err.config.url} not alowed`);
        }
        throw err;
      });
  },
  refresh(refreshToken) {
    return instance
      .post("auth/jwt/refresh/", {
        refreshToken,
      })
      .catch((err) => {
        if (err.response.status === 401) {
          throw new Error(`${err.config.url} not alowed`);
        }
        throw err;
      });
  },
  verify(accessToken) {
    return instance
      .post("auth/jwt/verify/", {
        accessToken,
      })
      .catch((err) => {
        if (err.response.status === 401) {
          throw new Error(`${err.config.url} not aloowed`);
        }
        throw err;
      });
  },
};

export const restoranAPI = {
  isOpen() {
    return instance.get("api/restoran/day/").catch((err) => {
      throw err;
    });
  },
  closeDay() {
    return instance
      .put("api/restoran/day/", {
        open: false,
      })
      .catch((err) => {
        throw err;
      });
  },
  openDay() {
    return instance.post("api/restoran/day/", {}).catch((err) => {
      throw err;
    });
  },
  getСategories() {
    return instance.get("api/restoran/categories/").catch((err) => {
      throw err;
    });
  },
  getProductsWithСategories(categoryID = null) {
    return instance
      .get(`api/restoran/categories/${categoryID}`)
      .catch((err) => {
        throw err;
      });
  },
};

export const orderAPI = {
  pay(order, orderTotalCost, accessToken, userProfile = 2) {
    return instance
      .post(
        "api/restoran/order/",
        {
          orderItems: order,
          totalCost: orderTotalCost,
          userProfile: userProfile,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .catch((err) => {
        if (err.response.status === 401) {
          throw new Error(`${err.config.url} not aloowed`);
        }
        throw err;
      });
  },
};


export const userAPI = {
  getUsers(accessToken) {
    return instance
      .get("api/accounts/profiles", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch((err) => {
        if (err.response.status === 401) {
          throw new Error(`${err.config.url} not aloowed`);
        }
        throw err;
      });
  },
  getUser(userID,accessToken) {
    return instance
      .get("api/accounts/profile/"+userID, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch((err) => {
        if (err.response.status === 401) {
          throw new Error(`${err.config.url} not aloowed`);
        }
        throw err;
      });
  },
};