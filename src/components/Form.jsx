import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BodyBox,
  BodyForm,
  BodyLabel,
  BodyP,
  BodyRegister,
  BodyRegisterButton,
  BodyTextArea,
} from "style/Styles";
import profile from "../assets/images/profile.png";
import { addList } from "../redux/modules/lists";
import { selectMember } from "../redux/modules/member";
import api from "../api/api";

function Form() {
  const [content, setContent] = useState("");
  const [writedTo, setWritedTo] = useState("");

  const dispatch = useDispatch();
  const { avatar, nickname } = useSelector((state) => state.authSlice);

  console.log(avatar, nickname);
  const date = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  //내용 입력
  const contentOnChangeHandler = (e) => setContent(e.target.value);

  //멤버 선택
  const writedToOnChangeHandler = (e) => setWritedTo(e.target.value);

  //등록 버튼
  const submitEventHandler = (e) => {
    e.preventDefault();

    //유효성 검사
    if (content.trim() === "") {
      alert("내용을 입력해주세요");
      setContent("");
    } else if (writedTo === "") {
      alert("멤버를 선택해주세요");
      setWritedTo("");
    } else {
      //데이터 추가
      dataAdd();

      //입력창 초기화
      setContent("");
      setWritedTo(""); // //비동기 처리로 인해 변경된 내용이 바로 적용되지 않아 아래의 코드가 정상 작동된다.

      //해당 멤버 리스트로 이동
      dispatch(selectMember(writedTo));
      // setSelectedMember(writedTo);
    }
  };

  const dataAdd = async () => {
    const newData = {
      id: crypto.randomUUID(),
      nickname,
      content,
      avatar,
      createdAt: date,
      writedTo,
    };

    //서버 측 상태 변경
    api.post("/letters", newData);

    //클라이언트 측 상태 변경
    dispatch(addList(newData));
  };

  return (
    <BodyForm onSubmit={submitEventHandler}>
      <BodyBox>
        <BodyLabel>닉네임:</BodyLabel>
        <BodyP>{nickname}</BodyP>
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
