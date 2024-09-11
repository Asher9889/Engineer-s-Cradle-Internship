import { useState } from "react";
import { BASE_URL } from "../utils/constant";

const useAuth = () => {
  const [status, setStatus] = useState(null);

  async function userAuth(email, password, type) {
    let raw = JSON.stringify({ email: email, password: password });
    let requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };
    let res;
    try {
      setStatus(null);
      if (type === "login") {
        res = await fetch(BASE_URL + "/login", requestOptions);
      } else if (type === "signup") {
        res = await fetch(BASE_URL + "/signup", requestOptions);
      }
      const data = await res.json();
      setStatus(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  return { userAuth, status };
};

export default useAuth;
