import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    getCurrentUser()
  },[])

  const token = Cookies.get("authToken");
  const  requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
    },
    
  };

  async function getCurrentUser() {
    try {
      const res = await fetch(
        "https://intern-task-api.bravo68web.workers.dev/api/me", requestOptions
      );
      const user = await res.json();
      setCurrentUser(user);
    } catch (error) {
      console.log(error)
      throw new Error("error happened in current user hook")
    }
  }
  return currentUser;
};

export default useCurrentUser;
