import * as axios from 'axios';

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'http://127.0.0.1:8000/',
  headers: {},
});

export const authAPI = {
  createUser(username, password) {
    return instance.post('auth/users/', {
      username,
      password,
    }).catch(err => {
      throw err;
    });
  },
  me(accessToken) {
    return instance.get('auth/users/me/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  create(username, password) {
    return instance.post('auth/jwt/create/', {
      username,
      password,
    }).catch(err => {
      if (err.response.status === 401) {
        throw new Error(`${err.config.url} not aloowed`);
      }
      throw err;
    });
  },

  refresh(refreshToken) {
    return instance.post('auth/jwt/refresh/', {
      refreshToken,
    }).catch(err => {
      if (err.response.status === 401) {
        throw new Error(`${err.config.url} not aloowed`);
      }
      throw err;
    });
  },
  verify(accessToken) {
    return instance.post('auth/jwt/verify/', {
      accessToken,
    }).catch(err => {
      if (err.response.status === 401) {
        throw new Error(`${err.config.url} not aloowed`);
      }
      throw err;
    });
  },
};

export const restoranAPI = {
  isOpen() {
    return instance.get('api/restoran/')
    .catch(err => {
      throw err;
    });
  },
};

