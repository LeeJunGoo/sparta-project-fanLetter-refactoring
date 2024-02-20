import { useDispatch, useSelector } from "react-redux";
import { selectMember } from "../redux/modules/member.js";
import {
  HeaderBackground,
  HeaderItem,
  HeaderList,
  HeaderDiv,
} from "../style/Styles.jsx";

function Header() {
  //멤버 UI 형성
  const aespa = ["카리나", "지젤", "윈터", "닝닝"];

  const dispatch = useDispatch();
  const selectedMember = useSelector((state) => state.members);

  const memberClickEvent = (name) => {
    dispatch(selectMember(name));
  };

  return (
    <>
      <HeaderBackground>
        <h1>에스파 팬레터 콜렉션</h1>

        <HeaderDiv>
          <HeaderList>
            {aespa.map((item) => (
              <HeaderItem
                key={item}
                onClick={() => memberClickEvent(item)}
                $selectedMember={item === selectedMember}
              >
                {item}
              </HeaderItem>
            ))}
          </HeaderList>
        </HeaderDiv>
      </HeaderBackground>
    </>
  );
}

export default Header;
