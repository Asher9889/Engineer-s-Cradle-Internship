import { useRef,useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Register = () => {
  const [user, setUser] = useState(null);
  const inputRef = useRef(null);
  const passworRef = useRef(null);
  const navigate = useNavigate();

  // destructuring returing object from uselogin hook
  const location = useLocation();
 
  
  async function handleSubmitClick(e) {
    e.preventDefault();
    const email = inputRef.current.value;
    const password = passworRef.current.value;

    let raw = JSON.stringify({ email: email, password: password });

    let requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    try {
      let res;
      if(location.pathname === "/login"){
        res = await fetch(
          "https://intern-task-api.bravo68web.workers.dev/auth/signup",
          requestOptions
        );
      }else{
       res = await fetch(
          "https://intern-task-api.bravo68web.workers.dev/auth/login",
          requestOptions
        );
      }
      
  
      const result = await res.text();
      if(result){
        navigate("/products")
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  return (
    <div className="gradient-background w-full h-screen flex flex-col justify-center items-center ">
      <form className=" w-1/3  flex flex-col gap-10 font-mono">
        <h3 className="w-full text-center text-2xl font-semibold">{location.pathname === "/login" ? "Login" : "Register" }</h3>
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
          Submit
        </button>
      </form>
      <p className="w-1/3 pt-4 text-start text-sm">{location.pathname === "/login" ? " New user" : " Already user"}?  <Link to={location.pathname === "/login" ? "/register" : "/login"}><span className="text-blue-900 underline">{location.pathname === "/login" ? "Register" : "Login"}</span></Link></p>
    </div>
  );
};

export default Register;
