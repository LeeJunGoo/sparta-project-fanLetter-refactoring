import React, { useContext } from "react";
import {
  HeaderBackground,
  HeaderTitle,
  HeaderList,
  HeaderItem,
} from "../style/Styles.jsx";
import { HomeContextProvider } from "context/HomeContext.jsx";

function Header() {
  const { selectedMember, setSelectedMember } = useContext(HomeContextProvider);
  //멤버 UI 형성
  const aespa = ["카리나스", "지젤", "윈터", "닝닝"];

  const MemberClickEvent = (name) => {
    setSelectedMember(name);
  };

  return (
    <HeaderBackground>
      <HeaderTitle>에스파 팬레터 콜렉션</HeaderTitle>
      <HeaderList>
        {aespa.map((item) => (
          <HeaderItem
            key={item}
            onClick={() => MemberClickEvent(item)}
            $selectedMember={item === selectedMember}
          >
            {item}
          </HeaderItem>
        ))}
      </HeaderList>
    </HeaderBackground>
  );
}

export default Header;
