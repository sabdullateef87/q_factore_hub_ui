import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: any;
};

const AuthWrapper = (props: Props) => {
  return (
    <div className="h-screen p-4">
      <div className="hover::pointer-cursor">
        <Link to={"/"}>
          <h1>Q.F</h1>
        </Link>
      </div>
      {props.children}
    </div>
  );
};

export default AuthWrapper;
