import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { StHeader } from "style/Styles";
import { logout } from "../redux/modules/authSlice";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginButtonClickHandler = () => {
    dispatch(logout());
  };

  //마이페이지 버튼
  const profileButtonClickHandler = () => {
    navigate(`/profile`);
  };

  return (
    <>
      <StHeader>
        <Link to={"/home"}>HOME</Link>
        <section>
          <button onClick={loginButtonClickHandler}>로그아웃 </button>
          <button onClick={profileButtonClickHandler}>마이페이지</button>
        </section>
      </StHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
