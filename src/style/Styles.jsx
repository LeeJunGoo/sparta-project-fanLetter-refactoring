import styled from "styled-components";
import aespa from "assets/images/aespa1.jpg";

// styled - components 요소를 컴포넌트 아래 쪽에 배치하지 않은 이유
// - 추후 기능 코드 및 스타일 코드의 양이 방대해져 컴포넌트의 해석이 어려울 것 같아서 별도로 파일 생성

//styled - components
// 장점: 공통요소의 스타일을 적용할 때 재사용을 할 수 있는 부분과 특정 조건에 따른 조건부 스타일링 되는 점이 장점이라고 생각합니다.
// 단점: 무분별하게 많이 사용하면

export const HomeBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right, #9ceafe, #c88ddd);
`;

export const DetailBackground = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url(${aespa});
`;

export const HeaderBackground = styled.header`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  position: relative;
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  font-weight: 700;
  color: white;
  min-width: 475px;
`;

export const HeaderList = styled.ul`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 10px;
  list-style: none;
  padding: 15px;
  width: 500px;
  background-color: rgb(79, 85, 81);
`;

export const HeaderItem = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  text-align: center;
  background-color: ${(props) => (props.$selectedMember ? "yellow" : "black")};
  color: white;
  user-select: none;
  cursor: pointer;
`;

export const BodyForm = styled.form`
  width: 500px;
  background-color: gray;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const BodyBox = styled.section`
  margin-bottom: 10px;
  display: flex;
`;

export const BodyRegister = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BodyLabel = styled.label`
  width: 100px;
  display: flex;
  align-items: center;
`;

export const BodyInputName = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

export const BodyTextArea = styled.textarea`
  resize: none;
  height: 80px;
  width: 100%;
  padding: 5px 10px;
`;

export const BodyRegisterButton = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  background-color: black;
  text-align: right;
  color: white;
`;

export const FooterBackground = styled.div`
  width: 100vh;
  color: white;
  margin-bottom: 20px;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  background-color: black;
  padding: 20px;
  border-radius: 5px;
  margin: 0px auto;
`;

export const FooterItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;

export const FooterItemFigure = styled.figure`
  margin-right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const FooterItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const FooterItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FooterItemContent = styled.p`
  margin-left: 70px;
  background-color: rgb(37, 33, 33);
  border-radius: 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailHomeButton = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: black;
  box-shadow: black 10px 5px 5px;
  color: white;
  width: 100px;
  height: 50px;
`;

export const DetailItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  min-height: 500px;
  background-color: gray;
  color: white;
  padding: 16px;
`;
export const DetailHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DetailMemberName = styled.p`
  padding-top: 12px;
  font-size: 24px;
  font-weight: 500;
`;

export const DetailContent = styled.p`
  background-color: black;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 10px;
  margin: 24px 0px;
  height: 275px;
`;

export const DetailTextArea = styled.textarea`
  background-color: black;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 10px;
  margin: 24px 0px;
  color: white;
  width: 100%;
  height: 275px;
`;

export const DetailButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const DetailButton = styled.button`
  font-size: 24px;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  background-color: black;
  text-align: right;
  color: white;
`;

export const DetailButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ListTitle = styled.span`
  text-align: left;
`;

export const ListDate = styled.time`
  text-align: right;
`;
