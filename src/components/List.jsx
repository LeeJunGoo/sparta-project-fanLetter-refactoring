import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailMemberName, FooterBackground, FooterList } from "style/Styles";
import ListItem from "./ListItem";
import { __getLetter } from "../redux/modules/lists";

function List() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.letters);
  const selectedMember = useSelector((state) => state.members);

  //axios를 사용하여 db에 있는 값 불러오기
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(__getLetter());
  };

  //멤버 UI에서 클릭한 해당 멤버의 정보
  const filterData = lists.filter((data) =>
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
