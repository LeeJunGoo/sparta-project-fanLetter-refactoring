import React from "react";
import {
  HeaderBackground,
  HeaderList,
  HeaderItem,
  HeaderNav,
} from "../style/Styles.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMember } from "../redux/modules/member.js";

function Header() {
  //멤버 UI 형성
  const aespa = ["카리나", "지젤", "윈터", "닝닝"];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedMember = useSelector((state) => state.members);

  const memberClickEvent = (name) => {
    dispatch(selectMember(name));
  };

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
      <HeaderBackground>
        <div>
          <button onClick={loginButtonClickHandler}>로그인</button>
          <button onClick={profileButtonClickHandler}>마이페이지</button>
        </div>
        <h1>에스파 팬레터 콜렉션</h1>
      </HeaderBackground>
      <HeaderNav>
        <HeaderList>
          {aespa.map((item) => (
            <HeaderItem
              key={item}
              onClick={() => memberClickEvent(item)}
              $selectedMember={item === selectedMember}
            >
              {item}
            </HeaderItem>
          ))}
        </HeaderList>
      </HeaderNav>
    </>
  );
}

export default Header;
