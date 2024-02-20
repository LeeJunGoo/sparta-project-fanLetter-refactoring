import styled from "styled-components";
import aespa from "assets/images/aespa1.jpg";

// styled - components 요소를 컴포넌트 아래 쪽에 배치하지 않은 이유
// - 추후 기능 코드 및 스타일 코드의 양이 방대해져 컴포넌트의 해석이 어려울 것 같아서 별도로 파일 생성

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

export const HeaderBackground = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;

  h1 {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 50px;
    font-weight: 700;
    color: white;
    min-width: 475px;
  }
`;

export const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  background-color: inherit;

  section {
    display: flex;
    gap: 10px;
  }

  button {
    background-color: inherit;
    width: 100px;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #6ea477;
    }
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  font-size: 20px;
  color: white;
  min-width: 475px;
`;

export const HeaderList = styled.ul`
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

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  gap: 15px;
  border: 1px solid white;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;

  input {
    margin-bottom: 24px;
    padding: 12px 0px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid gray;
    outline: none;
  }

  button {
    width: 100%;
    height: 8vh;
  }
`;
