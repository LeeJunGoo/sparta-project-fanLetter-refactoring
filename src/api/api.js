import axios from "axios";
import { logout } from "../redux/modules/authSlice";

//로그아웃 처리를 위한 비동기 함수
let store;
import("../redux/config/configStore").then((module) => {
  store = module.default();
});

// Axios instance
const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const userInstance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});
userInstance.interceptors.request.use(
  (config) => {
    //헤더에 토큰 넣기
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = ` Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
userInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log("err", err);
    if (err.response.data.message === "토큰이 만료되었습니다. 다시 로그인 해주세요.") {
      //로그아웃 처리
      //함수 컴포넌트가 아니므로 useDispatch 사용 불가

      return store.dispatch(logout());
    }
    return Promise.reject(err);
  }
);

instance.interceptors.request.use(
  async (config) => {
    const { data } = await userInstance.get("/user");
    if (data.success) {
      return config;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
