import {
  BodyBox,
  BodyForm,
  BodyInputName,
  BodyLabel,
  BodyRegister,
  BodyRegisterButton,
  BodyTextArea,
} from "style/Styles";
import profile from "assets/images/profile.png";
import { useContext, useState } from "react";
import { LatterContextProvider } from "context/LatterContext";
import { HomeContextProvider } from "context/HomeContext";
function Form() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [writedTo, setWritedTo] = useState("");
  const { setSelectedMember } = useContext(HomeContextProvider);
  const { setData } = useContext(LatterContextProvider);

  const date = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  //닉네임 입력
  const nicknameOnChangeHandler = (e) => setNickname(e.target.value);

  //내용 입력
  const contentOnChangeHandler = (e) => setContent(e.target.value);

  //멤버 선택
  const writedToOnChangeHandler = (e) => setWritedTo(e.target.value);

  //등록 버튼
  const submitEventHandler = (e) => {
    e.preventDefault();

    //유효성 검사
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요");
      setNickname("");
    } else if (content.trim() === "") {
      alert("내용을 입력해주세요");
      setContent("");
    } else if (writedTo === "") {
      alert("멤버를 선택해주세요");
      setWritedTo("");
    } else {
      //데이터 추가
      dataAdd();

      //입력창 초기화
      setNickname("");
      setContent("");
      setWritedTo(""); // //비동기 처리로 인해 변경된 내용이 바로 적용되지 않아 아래의 코드가 정상 작동된다.

      //해당 멤버 리스트로 이동
      setSelectedMember(writedTo);
    }
  };

  const dataAdd = () => {
    setData((prev) => {
      return [
        {
          createdAt: date,
          nickname,
          avatar: profile,
          content,
          writedTo,
          id: prev.length + "1",
        }, //문자로 형변환 시킨 이유) 더미 데이터의 id값이 문자로 저장되어있기 때문이다.
        ...prev,
      ];
    });
  };

  return (
    <BodyForm onSubmit={submitEventHandler}>
      <BodyBox>
        <BodyLabel>닉네임:</BodyLabel>
        <BodyInputName
          value={nickname}
          onChange={nicknameOnChangeHandler}
          placeholder="최대 10글자까지 작성할 수 있습니다."
          maxLength={10}
        ></BodyInputName>
      </BodyBox>
      <BodyBox>
        <BodyLabel>내용:</BodyLabel>
        <BodyTextArea
          value={content}
          onChange={contentOnChangeHandler}
          placeholder="최대 100글자까지만 작성할 수 있습니다."
          maxLength={100}
        ></BodyTextArea>
      </BodyBox>
      <BodyBox>
        <BodyLabel>멤버 선택</BodyLabel>
        <select value={writedTo} onChange={writedToOnChangeHandler}>
          <option value={""}>멤버</option>
          <option value={"카리나"}>카리나</option>
          <option value={"지젤"}>지젤</option>
          <option value={"윈터"}>윈터</option>
          <option value={"닝닝"}>닝닝</option>
        </select>
      </BodyBox>
      <BodyRegister>
        <BodyRegisterButton type="submit">펜레터 등록</BodyRegisterButton>
      </BodyRegister>
    </BodyForm>
  );
}

export default Form;
