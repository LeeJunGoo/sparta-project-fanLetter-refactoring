import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FooterItemTitle, LoginDiv, LoginForm } from "style/Styles";
import profile from "../assets/images/profile.png";

function Profile() {
  const [isState, setIsState] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef();
  const dispatch = useDispatch();

  //수정 완료 버튼
  const submitClickEventHandler = (e) => {
    e.preventDefault();

    const regex = /[^\w\s]/gi;
    const toString = inputValue.toString().trim();

    //유효성 검사
    if (regex.test(inputValue)) {
      window.alert("특수문자를 제거해주세요");
    }
    if (toString === "" || toString.length > 10) {
      window.alert("1~ 10글자를 지켜주세요");
    }

    //클라이언트 측 상태 변화
    // dispatch();
  };

  const onChangeProfileImage = (e) => {
    // const file = e.target.files[0];
    // if (file) {
    //   setSelectedFile(file);
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setPreviewUrl(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // 이미지를 클릭하면 파일 선택 창을 엽니다.
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // 선택된 파일에 대한 처리 로직
  };
  return (
    <>
      <LoginDiv>
        <LoginForm onSubmit={submitClickEventHandler}>
          <p>프로필관리</p>
          <figure>
            <img
              src={profile}
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            ></img>
            <input
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </figure>

          {isState ? (
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="닉네임은 (1~10글자)"
            ></input>
          ) : (
            <span>닉네임</span>
          )}

          <span>아이디</span>
          <FooterItemTitle>
            <button type="button" onClick={() => setIsState(!isState)}>
              {isState ? "취소" : "수정"}
            </button>
            {isState ? <button type="submit">수정 완료</button> : null}
          </FooterItemTitle>
        </LoginForm>
      </LoginDiv>
    </>
  );
}

export default Profile;
