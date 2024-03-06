// HomePage.js
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Booklist from "../BookList/Booklist";
import Styles from "./Homepage.module.css";
const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [userName, setUserName] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.userName) {
      setUserName(location.state.userName);
    }
  }, [location.state]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <div className="flex justify-center items-center p-20">
        <div className="absolute top-8 left-10 ">
          <img
            src="https://kalvium.community/images/sidebar-3d-logo.svg"
            alt="kalvium-logo"
            className="h-20 w-20 p-2.5 rounded-[10px]"
          />
          <h2 className="text-[red] text-xl">Kalvium Books</h2>
        </div>
        <div className="flex items-center">
          <input
            className={`${Styles["inputContainer"]} h-14 w-[750px] absolute top-10 flex justify-center text-xl text-[brown] absolute text-center shadow-[inset_-10px_-12px_52px_-13px_rgba(209,240,163,1)] cursor-auto ml-[100px] rounded-[40px] border-0 left-[15%] top-[10%]`}
            type="text"
            placeholder="Search for book"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {userName ? (
            <p className="text-[30px] text-[#e07a5f] absolute ml-[30%] mt-[3%] text-center">
              {userName}
            </p>
          ) : (
            <Link
              to="/register"
              style={{ textDecoration: "None", color: "#FFFFFF" }}
            >
              <button className="flex justify-center items-center h-12 w-[200px] bg-[#90e0ef] text-white text-xl absolute no-underline cursor-pointer p-5 rounded-[40px] border-0 left-[82%] top-[11%] hover:shadow-[-10px_-12px_63px_-13px_rgba(131,218,230,1)] hover:flex justify-center items-center text-center text-[25px] text-[#e07a5f] absolute left-[82%] top-[5%]">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
      <Booklist searchValue={searchValue} />
    </>
  );
};

export default HomePage;
