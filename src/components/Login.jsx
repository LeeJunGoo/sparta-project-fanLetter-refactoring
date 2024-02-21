import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginDiv, LoginForm } from "style/Styles";
import { userInstance } from "../api/api";
import { setUser } from "../redux/modules/authSlice";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isState, setIsState] = useState(false);

  const dispatch = useDispatch();
  const selectUser = useSelector((state) => state.authSlice);
  const navigator = useNavigate();

  const submitClickEventHandler = async (e) => {
    e.preventDefault();

    //로그인 기능
    if (!isState && validation()) {
      try {
        const { data } = await userInstance.post("/login", {
          id,
          password,
        });

        //로컬스토리지 저장하기! (아직...)

        //클라이언트 측
        dispatch(setUser(data));

        navigator("/home");
        window.alert("로그인 성공");
      } catch (error) {
        window.alert("회원정보가 없습니다.");
      }
    }

    // 회원 가입 기능
    if (isState && validation()) {
      try {
        const newData = {
          id,
          password,
          nickname,
        };
        await userInstance.post("/register", newData);

        //로그인 및 회원가입 토글 변경
        StateChangeHandler();

        window.alert("회원가입 성공");
      } catch (error) {
        window.alert("이미 존재하는 아이디입니다.");
      }
    }
  };

  //유효성 검사
  const validation = () => {
    const regex = /[^\w\s]/gi;
    const StringId = id.toString().trim();
    const StringPassword = password.toString().trim();
    const StringNickname = nickname.toString().trim();

    // Id 유효성 검사
    if (StringId === "") {
      return window.alert("아이디와 비밀번호를 입력해주세요");
    }

    if (regex.test(StringId)) {
      return window.alert("특수문자를 제거해주세요");
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
      if (StringNickname === "") {
        return window.alert("닉네임을 입력해주세요");
      }
      if (StringNickname.length < 1 || StringNickname.length > 10) {
        return window.alert("닉네임: 1~ 10글자를 지켜주세요");
      }
    }

    return true;
  };

  //로그인 및 회원가입 토글 변경
  const StateChangeHandler = () => {
    setIsState(!isState);
    setId("");
    setPassword("");
    setNickname("");
  };

  return (
    <>
      <LoginDiv>
        <LoginForm onSubmit={submitClickEventHandler}>
          <p>{isState ? "회원가입" : "로그인"}</p>
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
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              placeholder="닉네임은 (1~10글자)"
            ></input>
          ) : null}

          <button type="submit">{isState ? "회원가입" : "로그인"}</button>
          <button type="button" onClick={StateChangeHandler}>
            {isState ? "로그인" : "회원가입"}
          </button>
        </LoginForm>
      </LoginDiv>
    </>
  );
}

export default Login;
