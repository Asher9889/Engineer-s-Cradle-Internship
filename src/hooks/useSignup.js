import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
const useSignup = (email, password)=>{
    const [status, setStatus] = useState(null);

    useEffect(()=>{
        signup()
    },[]);

    let raw = JSON.stringify({ email: email, password: password });
    let requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow',
    };

    async function signup(){
        try {
            const res = await fetch(BASE_URL + "/signup", requestOptions);
            const status = await res.text();
            setStatus(status);
        } catch (error) {
            throw new Error(error.message)
        }
    }
    return {signup};
}

export default useSignup;