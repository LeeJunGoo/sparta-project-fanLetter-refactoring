import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderNav } from "style/Styles";
import { setUser } from "../redux/modules/authSlice";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.authSlice);

  console.log(selector);
  //로그인 및 로그아웃 버튼
  const loginButtonClickHandler = () => {
    dispatch(setUser(""));
    navigate(`/`);
  };

  //마이페이지 버튼
  const profileButtonClickHandler = () => {
    navigate(`/profile`);
  };

  return (
    <>
      <HeaderNav>
        <button onClick={() => navigate("/home")}>HOME</button>
        <section>
          {selector !== "" ? (
            <button onClick={loginButtonClickHandler}>로그아웃</button>
          ) : (
            <button onClick={loginButtonClickHandler}>로그인</button>
          )}
          <button onClick={profileButtonClickHandler}>마이페이지</button>
        </section>
      </HeaderNav>
    </>
  );
}

export default Layout;
