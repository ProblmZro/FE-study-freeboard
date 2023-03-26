import * as S from "./Navigation.styles";
import { INavigationUIProps } from "./Navigation.types";

const Menu = [
  { id: "boards-firebase", title: "자유게시판(firebase)" },
  { id: "boards", title: "자유게시판(백엔드)" },
  { id: "market", title: "중고마켓" },
  { id: "mypage", title: "마이페이지" },
];

export default function NavigationUI(props: INavigationUIProps) {
  return (
    <S.Wrapper>
      {Menu.map((el, index) => (
        <>
          <S.Button key={el.id} onClick={props.onClickMenu} id={el.id}>
            {el.title}
          </S.Button>
        </>
      ))}
    </S.Wrapper>
  );
}
