import React from "react";
import darkLogo from "../../assets/darklogo.png";

type Props = {};

const Logo = (props: Props) => {
  return (
    <h1 className="font-[800] text-4xl">
      <span className="text-yellow-500">Q.</span>
      <span className="text-blue-500">F</span>
    </h1>
  );
};

export default Logo;
