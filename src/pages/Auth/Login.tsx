import React, { FormEvent } from "react";
import AuthWrapper from "./AuthWrapper";
import { Link } from "react-router-dom";

type Props = {};
interface LoginState {
  email: string;
  password: string;
}
const initialState = {
  email: "",
  password: "",
};
const Login = (props: Props) => {
  const [user, setUser] = React.useState<LoginState>(initialState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <AuthWrapper>
      <h1 className="font-bold text-4xl mb-[20px]">Sign In</h1>
      <form onSubmit={handleSubmit} className="w-[375px] p-[20px] shadow-lg">
        <div>
          <input
            type="text"
            placeholder="Email"
            className="border-2 w-[100%] py-[4px] px-[8px] rounded-[6px] mb-[20px]"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="border-2 w-[100%] py-[4px] px-[8px] rounded-[6px] mb-[20px]"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between my-[10px] items-end">
          <button className="py-[5px] px-[20px]  bg-yellow-800 text-white rounded-[6px] cursor-pointer hover:bg-yellow-500">
            Login
          </button>
          <span className="text-[13px] text-gray-400 cursor-pointer">
            Forgot Password
          </span>
        </div>
        <p className="text-center text-[12px] text-gray-400 cursor-pointer">
          <Link to={"/register"}>Don't have an account ? </Link>
        </p>
      </form>

      
    </AuthWrapper>
  );
};

export default Login;
