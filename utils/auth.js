import axios from "axios";

const API_KEY = "AIzaSyDz5mhI_Ui_USct4cYmcrpeS9zZ3Xn2dV4";

export function authenticate(mode, { email, password }) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
}

export function createUser(payload) {
  return authenticate("signUp", payload);
}

export function logIn(payload) {
  return authenticate("signInWithPassword", payload);
}
 