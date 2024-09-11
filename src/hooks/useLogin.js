import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
const useLogin = (email, password)=>{
    const [token, setToken] = useState(null);
    
    useEffect(()=>{
        login()
    },[]);
    
   async function login(){
    let raw = JSON.stringify({ email: email, password: password });
    let requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow',
    };

    try {
        const res = await fetch(BASE_URL + "/login", requestOptions)
        const result = await res.text();
        setToken(result.token)
    } catch (error) {
        throw new Error(error.message);
    }
   } 
   return token;
}

export default useLogin;