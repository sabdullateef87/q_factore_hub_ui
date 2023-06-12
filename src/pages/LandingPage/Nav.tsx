import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import { State } from "../../reduxStore";
import { useSelector } from "react-redux";
import { authFunc } from "../../functions";
import { logOutUser } from "../../functions/auth.functions";

type Props = {};

const DesktopNav = () => {
  return (
    <ul className="hidden tablet:flex desktop:flex laptop:flex list-none gap-[20px]">
      <li className="font-medium cursor-pointer p-[10px]">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-medium cursor-pointer p-[10px]">
        <NavLink to={""}>Products</NavLink>
      </li>
      <li className="font-medium cursor-pointer p-[10px]">
        <NavLink to={""}>About</NavLink>
      </li>
      {authFunc.getAuthenticatedUserToken() ? (
        <li className="font-medium cursor-pointer p-[10px]">
          <NavLink to={"/login"}>Sign in</NavLink>
        </li>
      ) : (
        <li className="font-medium cursor-pointer p-[10px]" onClick={() => logOutUser()}>
          <NavLink to={"/login"}>Logout</NavLink>
        </li>
      )}
    </ul>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openNav = () => {
    setIsOpen(true);
  };
  return (
    <div className="block tablet:hidden desktop:hidden laptop:hidden">
      {!isOpen ? (
        <FontAwesomeIcon
          onClick={openNav}
          style={{
            cursor: "pointer",
            width: "35px",
            height: "35px",
          }}
          color="white"
          icon={faBars}
        />
      ) : (
        <div
          onClick={() => setIsOpen(false)}
          className="bg-black-500 absolute top-0 right-0 w-4/6 h-screen flex justify-end
          "
        >
          <div
            className={`absolute bg-black backdrop-blur-lg w-screen h-screen ${
              isOpen ? "animate-wiggle" : "animate-pulse"
            }`}
          ></div>
          <ul className="list-none z-10 mt-[20px] mr-[20px]">
            <li className="font-medium cursor-pointer p-[10px]">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="font-medium cursor-pointer p-[10px]">
              <NavLink to={""}>Products</NavLink>
            </li>
            <li className="font-medium cursor-pointer p-[10px]">
              <NavLink to={""}>About</NavLink>
            </li>
            {authFunc.getAuthenticatedUserToken() ? (
              <li className="font-medium cursor-pointer p-[10px]">
                <NavLink to={"/login"}>Sign in</NavLink>
              </li>
            ) : (
              <li className="font-medium cursor-pointer p-[10px]" onClick={() => logOutUser()}>
                <NavLink to={"/login"}>Logout</NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const Nav = (props: Props) => {
  return (
    <div className="text-white h-[100px] w-full flex  items-center justify-between">
      <Logo />
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Nav;
