import React, { useState } from "react";
import { LoginDiv, LoginForm } from "style/Styles";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");

  const submitClickEventHandler = (e) => {
    e.preventDefault();
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
          <input
            value={nickName}
            onChange={(event) => setNickName(event.target.value)}
            placeholder="닉네임은 (1~10글자)"
          ></input>
          <button type="submit">로그인 및 회원가입</button>

          <button>회원가입 및 로그인</button>
        </LoginForm>
      </LoginDiv>
    </>
  );
}

export default Login;
