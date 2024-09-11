import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAutoAuth = ()=>{

    const navigate = useNavigate();
    // wihout dependency array every render checks for token
    useEffect(()=>{
        fetchingUserWithToken()
    })

    function fetchingUserWithToken(){
        const token = Cookies.get("authToken")
        console.log(token)
        if(token){
            navigate("/products")
        }else{
            navigate("/login")
        }
    }
}

export default useAutoAuth;