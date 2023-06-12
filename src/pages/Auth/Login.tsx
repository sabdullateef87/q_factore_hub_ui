import React, { FormEvent, ReducerAction } from "react";
import AuthWrapper from "./AuthWrapper";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { apiConstants } from "../../_constants/api.constants";
import { validateRegisterForm } from "../../_util/validateFormInput/validateAuthForm";
import { State, store } from "../../reduxStore";
import Message from "../../components/Message/Message";
import { authActionCreators } from "../../_actions";
import { authConstants } from "../../_constants/authorization.constants";

type Props = {};
interface LoginState {
  email: string;
  password: string;
}
const initialState = {
  email: "",
  password: "",
};
const hostUrl = `${apiConstants.LOGIN_USER}`;

const Login = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginUserAction, resetLoginNotificiation } = bindActionCreators(
    authActionCreators,
    dispatch
  );
  const loginStore = useSelector((state: State) => state.login);
  const [user, setUser] = React.useState<LoginState>(initialState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateRegisterForm(user).hasOwnProperty("error")) {
      const error = validateRegisterForm(user)["error"];
      return store.dispatch({
        type: authConstants.LOGIN_USER_ERROR,
        payload: { error },
      });
    }
    loginUserAction(hostUrl, user);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    const alertTimer = setTimeout(() => {
      resetLoginNotificiation();
      if (loginStore.notification.success) {
        navigate("/marketplace");
      }
    }, 2000);

    return () => {
      clearTimeout(alertTimer);
    };
  }, [loginStore.notification.success, loginStore.notification.error]);

  return (
    <AuthWrapper>
      {loginStore.notification?.error && (
        <Message message={loginStore.notification.error} state="error" />
      )}
      {loginStore.notification?.success && (
        <Message message={loginStore.notification.success} state="success" />
      )}

      <Container>
        <h1 className="font-bold text-4xl text-black mb-[20px]">Sign In</h1>
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
            <button className="py-[5px] px-[20px]  bg-yellow-800 text-white rounded-[6px] cursor-pointer hover:bg-yellow-500 flex-auto">
              Login
            </button>
          </div>
          <div className="flex justify-between mt-6">
            <span className="text-center text-[12px] text-gray-400 cursor-pointer ">
              <Link to={"/register"}>Don't have an account ? </Link>
            </span>
            <span className="text-[12px] text-gray-400 cursor-pointer">
              Forgot Password ?
            </span>
          </div>
        </form>

        <section className="alternate-login"></section>
      </Container>
    </AuthWrapper>
  );
};

export default Login;
