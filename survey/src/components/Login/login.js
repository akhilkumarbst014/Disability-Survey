import React, { useState } from "react";
import COVER_IMAGE from "../../assets/cover_image.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Login = ({ setUser }) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Validate if username and password are filled
    if (!Username || !Password) {
      setError("Please enter both username and password");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/api/register");
      const users = response.data;
      console.log(users);
      const user = users.find(
        (user) =>
          (user.Username === Username || user.Mobile === Username) &&
          user.Password === Password
      );
      console.log(user);

      if (user) {
        console.log("Login successful!");
        setUser(user);
        swal({
          title: "Welcome!",
          text: "You have successfully logged in.",
          icon: "success",
          button: {
            text: "Go to Dashboard",
            className: "btn-success", // You can style this button with your own classes
          },
          timer: 4000, // The alert will automatically close after 3 seconds
        }).then(() => {
          navigate("/Dashboard");
        });
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error fetching user data", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-start">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col">
        <div className="absolute top-1/2 md:top-[55%] transform -translate-y-1/2 md:transform-none flex flex-col">
          <h1 className="text-2xl md:text-4xl text-amber-100 font-bold my-3 mx-4 text-left">
            SURVEY OF <br />
            PERSON
            <br /> WITH DISABILITIES
          </h1>
          <p className="text-lg md:text-2xl font-bold text text-teal-100 mx-4 md:mx-10">
            ( Government of Maharashtra )
          </p>
        </div>
        <img
          src={COVER_IMAGE}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full  md:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 md:pt-32 justify-between items-center">
        <div className="w-full flex flex-col max-w-[580px]">
          <div className="w-full flex flex-col mb-4 mt-1">
            <h3 className="text-xl md:text-4xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2 font-semibold ">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-end">
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 mt-1">
              Forget Password
            </p>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="w-full flex flex-col my-4">
            <button
              type="submit"
              className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-2 text-center flex items-center justify-center cursor-pointer"
              onClick={handleLogin}
            >
              Log in
            </button>
            <a href="/register" className="no-underline">
              <button className="w-full  text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-2 text-center flex items-center justify-center cursor-pointer">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
