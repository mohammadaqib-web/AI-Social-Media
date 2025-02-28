import React, { useEffect } from "react";
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  return (
    <header className="p-4 m-3 w-auto h-5 flex justify-between items-center  ">
      <img src={Logo} alt="Logo" className="w-10 h-10 " />
      <p className="ml-3 text-white font-semibold text-4xl">
        Social <span className="text-sky-500">Media</span>{" "}
      </p>
      {!user.details._id ? (
        <button
          className="text-white bg-sky-400 hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
          onClick={() => navigate("/authentication")}
        >
          SignUp
        </button>
      ) : (
        <button
          className="text-white bg-sky-400 hover:shadow-lg hover:border hover:border-white rounded-3xl btn ml-auto"
          onClick={() => navigate("/PostPage")}
        >
          {user.details.username}
        </button>
      )}
    </header>
  );
};

export default Header;
