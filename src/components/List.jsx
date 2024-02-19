import { FooterBackground, FooterList, DetailMemberName } from "style/Styles";
import ListItem from "./ListItem";
import { useContext } from "react";
import { LatterContextProvider } from "context/LatterContext";
import { HomeContextProvider } from "context/HomeContext";

function List() {
  const { data } = useContext(LatterContextProvider);
  const { selectedMember } = useContext(HomeContextProvider);
  //멤버 UI에서 클릭한 해당 멤버의 정보
  const filterData = data.filter((data) =>
    data.writedTo === selectedMember ? true : false
  );

  //데이터 존재 여부 확인
  const dataBoolean = filterData.length !== 0 ? true : false;

  return (
    <FooterBackground>
      <FooterList>
        {dataBoolean ? (
          filterData.map((data) => (
            <ListItem data={data} key={data.id}></ListItem>
          ))
        ) : (
          <DetailMemberName>
            {selectedMember
              ? `${selectedMember}의 첫 번째 팬레터의 주인공이 되세요!`
              : "멤버를 선택해야 팬레터를 볼 수 있습니다."}
          </DetailMemberName>
        )}
      </FooterList>
    </FooterBackground>
  );
}

export default List;
