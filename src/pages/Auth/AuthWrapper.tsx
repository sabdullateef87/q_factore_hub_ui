import React from "react";

type Props = {
  children: any;
};

const AuthWrapper = (props: Props) => {
  return (
    <div className="w-[100%] h-screen flex flex-col justify-center items-center">
      {props.children}
    </div>
  );
};

export default AuthWrapper;
