import { useNavigate } from "react-router-dom";
import { HeaderNav } from "style/Styles";
function Layout() {
  const navigate = useNavigate();
  //로그인 버튼
  const loginButtonClickHandler = () => {
    navigate(`/login`);
  };

  //마이페이지 버튼
  const profileButtonClickHandler = () => {
    navigate(`/profile`);
  };

  return (
    <>
      <HeaderNav>
        <button onClick={() => navigate("/")}>HOME</button>
        <section>
          <button onClick={loginButtonClickHandler}>로그아웃</button>
          <button onClick={profileButtonClickHandler}>마이페이지</button>
        </section>
      </HeaderNav>
    </>
  );
}

export default Layout;
