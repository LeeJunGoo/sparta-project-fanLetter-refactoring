import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  DetailBackground,
  DetailButton,
  DetailButtonDiv,
  DetailButtonSection,
  DetailContent,
  DetailHeader,
  DetailItemBox,
  DetailMemberName,
  DetailTextArea,
  FooterItemFigure,
  FooterItemImage,
  ListDate,
} from "style/Styles";
import api from "../api/api";
import { deleteList } from "../redux/modules/lists";

function DetailList() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  //useParams()에서 받아온 데이터는 객체 형태이다.
  const { id } = useParams(); //Router에서 ":id" useParams를 통해 동적 매개변수 할당
  const navigate = useNavigate();

  //해당 id와 일치한 데이터 정보
  const detailData = lists.find((item) => item.id === id);

  const [isUpdateMode, setIsUpdateMode] = useState(false); //수정 및 취소 버튼
  const [inputValue, setInputValue] = useState(detailData.content); //글 입력

  //글 수정
  const handleTextAreaChange = (e) => setInputValue(e.target.value);

  //1) 수정 버튼 클릭 시 <textarea> 창으로 변경
  const updateOnClickEventHandler = () =>
    isUpdateMode ? textAreaButtonHandler() : setIsUpdateMode(!isUpdateMode);

  //2) <textarea>에서 수정 버튼 이벤트 핸들러
  const textAreaButtonHandler = () => {
    if (!window.confirm("이대로 수정하시겠습니까?")) {
      return;
    }

    // 유효성 검사
    if (detailData.content === inputValue) {
      return alert("변경된 내용이 없습니다.");
    }

    // 데이터 수정
    api.patch(`/letters/${id}`, {
      content: inputValue,
    });

    // 수정 버튼 초기화
    setIsUpdateMode(!isUpdateMode);

    alert("수정되었습니다.");
    navigate("/home");
  };

  //취소 버튼 이벤트 핸들러
  const cancelOnClickEventHandler = () => setIsUpdateMode(!isUpdateMode);

  //삭제 버튼 이벤트 핸들러
  const deleteOnClickEventHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deleteList(id));

      api.delete(`/letters/${id}`);
      alert("정상적으로 삭제되었습니다.");
      navigate("/home");
    } else {
      alert("취소되었습니다.");
    }
  };

  return (
    <DetailBackground>
      <DetailItemBox>
        <DetailHeader>
          <FooterItemFigure>
            <FooterItemImage src={detailData.avatar}></FooterItemImage>
          </FooterItemFigure>
          <DetailMemberName>{detailData.nickname}</DetailMemberName>
        </DetailHeader>
        <ListDate>{detailData.createdAt}</ListDate>
        <DetailMemberName>To: {detailData.writedTo}</DetailMemberName>
        {isUpdateMode ? (
          <DetailTextArea
            maxLength={200}
            value={inputValue}
            onChange={handleTextAreaChange}
          ></DetailTextArea>
        ) : (
          <DetailContent>{detailData.content}</DetailContent>
        )}

        <DetailButtonSection>
          <DetailButtonDiv>
            <DetailButton onClick={updateOnClickEventHandler}>
              수정
            </DetailButton>
          </DetailButtonDiv>
          <DetailButtonDiv>
            {isUpdateMode ? (
              <DetailButton onClick={cancelOnClickEventHandler}>
                취소
              </DetailButton>
            ) : (
              <DetailButton onClick={deleteOnClickEventHandler}>
                삭제
              </DetailButton>
            )}
          </DetailButtonDiv>
        </DetailButtonSection>
      </DetailItemBox>
    </DetailBackground>
  );
}

export default DetailList;
