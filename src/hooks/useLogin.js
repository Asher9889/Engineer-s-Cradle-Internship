import { useEffect, useState } from "react";
const useLogin = ()=>{
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    
    
   async function login(email, password){
    let raw = `{\r\n    \"email\": \`${email}\`,\r\n    \"password\": \`${password}\`\r\n}`
    let requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow',
    };
    try {
        const res = await fetch("https://intern-task-api.bravo68web.workers.dev/auth/signup", requestOptions)
        const result = await res.text();
        console.log(result)
        setUser(result);
    } catch (error) {
        console.log(error)
        setError(error.message);
    }
   } 
   return {user, error, login};
}

export default useLogin;