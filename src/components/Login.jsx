import React, { useState } from "react";
import { LoginDiv, LoginForm } from "style/Styles";
import axios from "axios";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [isState, setIsState] = useState(false);

  const submitClickEventHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      " https://moneyfulpublicpolicy.co.kr/login",
      {
        id: "123456",
        password: "123123",
      }
    );
    console.log(response);
    //유효성 검사
    // if (validation()) {
    // }
  };

  const validation = () => {
    const regex = /[^\w\s]/gi;
    const StringId = id.toString().trim();
    const StringPassword = password.toString().trim();
    const StringNickName = nickName.toString().trim();

    // Id 유효성 검사
    if (regex.test(StringId)) {
      return window.alert("특수문자를 제거해주세요");
    }
    if (StringId === "") {
      return window.alert("아이디를 입력해주세요");
    }
    if (StringId.length < 4 || StringId.length > 10) {
      return window.alert("아이디: 4~ 10글자를 지켜주세요");
    }

    //password 유효성 검사
    if (StringPassword === "") {
      return window.alert("비밀번호를 입력해주세요");
    }
    if (StringPassword.length < 4 || StringPassword.length > 15) {
      return window.alert("비밀번호: 4~ 15글자를 지켜주세요");
    }

    //닉네임 유효성 검사
    if (isState) {
      if (StringNickName === "") {
        return window.alert("닉네임을 입력해주세요");
      }
      if (StringNickName.length < 1 || StringNickName.length > 10) {
        return window.alert("닉네임: 1~ 10글자를 지켜주세요");
      }
    }
    return true;
  };

  return (
    <>
      <LoginDiv>
        <LoginForm onSubmit={submitClickEventHandler}>
          <p>로그인</p>
          <input
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="아이디 (4~10글자)"
          ></input>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="비밀번호는(4~15글자)"
          ></input>
          {isState ? (
            <input
              value={nickName}
              onChange={(event) => setNickName(event.target.value)}
              placeholder="닉네임은 (1~10글자)"
            ></input>
          ) : null}

          <button type="submit">{isState ? "회원가입" : "로그인"}</button>
          <button type="button" onClick={() => setIsState(!isState)}>
            {isState ? "로그인" : "회원가입"}
          </button>
        </LoginForm>
      </LoginDiv>
    </>
  );
}

export default Login;
