import React, { useState } from "react";
import COVER_IMAGE from "../../assets/cover_image.jpg";
import GOOGLE_ICON from "../../assets/google.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disabled: "#D9D9D9",
};

const Register = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Mobile, setMobile] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!Username || !Password || !Mobile) {
      swal({
        title: "Incomplete Details",
        text: "Please fill in all the fields.",
        icon: "warning",
        button: "Okay",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        Username,
        Password,
        Mobile,
      });

      if (response.status === 200) {
        swal({
          title: "Registration Successful!",
          text: "You have been registered successfully.",
          icon: "success",
          button: "Proceed to Login",
        }).then(() => {
          navigate("/login");
        });
      } else {
        swal({
          title: "Registration Failed",
          text: "An error occurred during registration. Please try again.",
          icon: "error",
          button: "Retry",
        });
      }
    } catch (error) {
      swal({
        title: "Error",
        text: "There was an issue with the registration. Please check your details and try again.",
        icon: "error",
        button: "Retry",
      });
      console.error("Error registering:", error);
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

      <div className="w-full md:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 md:pt-20 justify-between items-center">
        <div className="w-full flex flex-col max-w-[580px]">
          <div className="w-full flex flex-col mb-4 mt-4">
            <h3 className="text-xl md:text-4xl font-semibold mb-2">Register</h3>
            <p className="text-base mb-2 font-semibold">
              Register yourself! Please enter your details.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Create Username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />

              <input
                type="password"
                placeholder="Create Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Enter your Mobile Number"
                value={Mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="w-full flex flex-col my-4">
              <button
                type="submit"
                className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-2 text-center flex items-center justify-center cursor-pointer"
              >
                Register
              </button>
            </div>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black/40"></div>
              <p className="text-lg absolute text-black/80 bg-[#f5f5f5] px-2 mt-1">
                or
              </p>
            </div>

            <div className="w-full flex items-center justify-center mt-3">
              <p className="text-sm font-normal text-[#060606]">
                Already have an account?{" "}
                <a href="/login" className="text-black ">
                  <span className="font-semibold underline-offset-2 cursor-pointer">
                    Login
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
