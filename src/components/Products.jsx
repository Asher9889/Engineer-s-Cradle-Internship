import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import useCurrentUser from "../hooks/useCurrentUser";
import useProducts from "../hooks/useProducts";
import Item from "./Item";
import useAutoAuth from "../hooks/useAutoAuth";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [input, setInput] = useState(null);

  // checking which user is logged in
  const user = useCurrentUser();
  const navigate = useNavigate();

  // fetch user data
  const products = useProducts();
  useEffect(() => {
    setItems(products);
    setFilteredItems(products);
  }, [products]);

 // checking cookie is present or not
    useAutoAuth();   

  function handleInputBox(e) {
    setInput(e.target.value);
    const categoryArray = items.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(categoryArray);
  }
  function handleLogout(){
    Cookies.remove("authToken")
    navigate("/login")
  }

  return (
    <div className="animated-gradient w-full pb-16 min-h-screen mx-auto px-4 pt-4 ">
      {filteredItems ? (
        <>
          <div className="relative max-w-[1000px] mx-auto ">
            <div className="flex justify-center">
            <h2 className="text-center font-bold text-2xl">
              Logged in as {user ? user.user.sub : "user"}
            </h2>
            <button onClick={handleLogout} className="w-[10%] absolute right-0 px-4 py-2 bg-red-600 hover:font-bold   rounded-md text-white">Signout</button>
            </div>
            <input
              className="w-full mt-6 p-4 rounded-md text-lg"
              placeholder="Search here..."
              type="text"
              onChange={handleInputBox}
              value={input}
            />
          </div>
          <div className="w-full">
            <div className=" mt-16 px-4 flex flex-row gap-6 flex-wrap justify-center">
              {filteredItems &&
                filteredItems.map((item) => (
                  <Item
                    key={item.id}
                    name={item.title}
                    image={item.thumbnail}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Products;
