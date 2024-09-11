import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAutoAuth = ()=>{

    const navigate = useNavigate();
    // wihout dependency array every render checks for token
    
    let token;
    function fetchingUserWithToken(){
       token = Cookies.get("authToken")
        if(token){
            navigate("/products")
        }
    }
    useEffect(()=>{
        fetchingUserWithToken()
    },[token])
}

export default useAutoAuth;