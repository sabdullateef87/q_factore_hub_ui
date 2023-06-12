import React, { FormEvent } from "react";
import AuthWrapper from "./AuthWrapper";
import Container from "../../components/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import { authReducerSignUp } from "../../_reducers/authorization.reducer";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { apiConstants } from "../../_constants/api.constants";
import Message from "../../components/Message/Message";
import { validateRegisterForm } from "../../_util/validateFormInput/validateAuthForm";
import { store } from "../../reduxStore";

interface RegisterState {
  email: string;
  password: string;
}
const initialState = {
  email: "",
  password: "",
};

const hostUrl = `${apiConstants.CREATE_USER}`;

const Register = (props: any) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<RegisterState>(initialState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateRegisterForm(user).hasOwnProperty("error")) {
      const error = validateRegisterForm(user)["error"];
      // return store.dispatch(registerUserErrorAction(error));
    }
    props.registerUserAction(hostUrl, user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    const alertTimer = setTimeout(() => {
      props.resetNotificiation();
      if (props.notification.hasOwnProperty("success")) {
        navigate("/login");
      }
    }, 2000);

    return () => {
      clearTimeout(alertTimer);
    };
  }, [props.notification]);

  return (
    <AuthWrapper>
      {props.notification.error && (
        <Message message={props.notification.error} state="error" />
      )}
      {props.notification.success && (
        <Message message={props.notification.success} state="success" />
      )}

      <Container>
        <div className="header mb-[20px] flex flex-col">
          <h1 className="font-bold text-3xl text-black mb-[10px] inline-block">
            Create your account
          </h1>
          <span className="text-gray-400 text-[14px] text-center">
            Let's get started.
          </span>
        </div>

        <form onSubmit={handleSubmit} className="w-[375px] p-[20px] text-black">
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
            <button className="py-[5px] px-[20px] bg-yellow-800 text-white rounded-[6px] cursor-pointer hover:bg-yellow-500 flex-auto">
              Register
            </button>
          </div>
          <div className="mt-6">
            <p className="text-center text-[12px] text-gray-400 cursor-pointer">
              <Link to={"/login"}>Already have an account ? </Link>
            </p>
          </div>
        </form>
      </Container>
    </AuthWrapper>
  );
};

export default Register;
