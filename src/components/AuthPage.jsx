import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useLogin from "../hooks/useLogin";
import useAuth from "../hooks/useAuth";
import useAutoAuth from "../hooks/useAutoAuth";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const passworRef = useRef(null);
  const navigate = useNavigate();

  const location = useLocation();
  // destructuring returing object from uselogin hook
  const { userAuth, status } = useAuth();

  // checks user logged in or not
  useAutoAuth();

  
  useEffect(() => {
    if (status) {
      if (location.pathname === "/login") {
        Cookies.set("authToken", status.token, { expires: 7 });
        navigate("/products")
        // console.log("logged from login page", status);
      } else if (location.pathname === "/signup") {
        // console.log("logged from signup page", status);
        navigate("/login");
      }
      setLoading(false);
    }
  }, [status]);

  async function handleSubmitClick(e) {
    e.preventDefault();
    setLoading(!loading);
    const email = inputRef.current.value;
    const password = passworRef.current.value;
    if([email, password].some((elem)=> elem === "")) return;

    try {
      if (location.pathname === "/login") {
        await userAuth(email, password, "login");
      } else if (location.pathname === "/signup") {
        await userAuth(email, password, "signup");
      }
    } catch (error) {
      setLoading(!loading);
      throw new Error(error.message);
    }
  }

  return (
    <div className="gradient-background w-full h-screen flex flex-col justify-center items-center ">
      <form className="w-full md:w-2/3 lg:w-1/3  flex flex-col gap-10 font-mono px-4">
        <h3 className="w-full text-center text-2xl font-semibold">
          {location.pathname === "/login" ? "Login" : "Register"}
        </h3>
        <input
          ref={inputRef}
          className="glass-effect w-full p-4 rounded-md text-lg bg-transparent text-white text-white"
          type="email"
          placeholder="Type Email.."
        />
        <input
          ref={passworRef}
          className="glass-effect w-full p-4 rounded-md text-lg bg-transparent text-white text-white"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={handleSubmitClick}
          className="gradient-background-button p-4 rounded-md text-white font-bold text-xl"
        >
          {loading ? (
            <div className=" flex justify-center items-center  flex-row h-[28px]">
              <div className="loader-submit"></div>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <p className="w-full md:w-1/3 pt-4 text-start text-sm px-4 ">
        {location.pathname === "/login" ? " New user" : " Already user"}?{" "}
        <Link to={location.pathname === "/login" ? "/signup" : "/login"}>
          <span className="text-blue-900 underline">
            {location.pathname === "/login" ? "Register" : "Login"}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
