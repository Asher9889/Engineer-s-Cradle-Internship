import { useEffect } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
const Products = ()=>{
   
    const userData = useCurrentUser()
    console.log(userData)
    return (
        <div className="animated-gradient w-full h-screen  mx-auto px-4 pt-4 ">
            <div className="max-w-[1000px] mx-auto bg-red-500">
                <h2 className="text-center">Logged in as {}</h2> 
            </div>
        </div>
    )
}

export default Products;