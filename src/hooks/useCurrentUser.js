import { useEffect, useState } from "react";

const useCurrentUser = () => {

  const [currentUser, setCurrentUser] = useState(null);
  
    getCurrentUser();
 

  async function getCurrentUser() {
    const res = await fetch(
      "https://intern-task-api.bravo68web.workers.dev/api/me"
    );
    const user = await res.text();
    setCurrentUser(user);
  }
  return currentUser;
};

export default useCurrentUser;
