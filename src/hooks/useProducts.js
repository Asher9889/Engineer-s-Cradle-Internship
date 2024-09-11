import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant"
import Cookies from "js-cookie";

const useProducts = ()=>{
    const [items, setItems] = useState(null);


  const token = Cookies.get("authToken");
  const  requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
    },
  };

  useEffect(()=>{
    getProducts();
  },[])
    async function getProducts(){
        const res = await fetch("https://intern-task-api.bravo68web.workers.dev/api" + "/products", requestOptions)
        const products = await res.json();
        setItems(products)
    }

    return items;
}


export default useProducts;