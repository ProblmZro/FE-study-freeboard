// 백엔드에서 가져 온 데이터라고 가정 (컴포넌트 위에 만든 이유 : 컴포넌트 리렌더링 되어도 다시 안 만들어짐)
const FRUITS = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "딸기" },
    { number: 6, title: "사과" },
    { number: 7, title: "애플망고" },
]

export default function MapFruitsPage() {
    // 1. 가장 기본 예제
    const aaa = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>]

    // 2. 실무 백엔드 데이터 예제 (aaa랑 결과 똑같음)
    const bbb = [{ number: 1, title: "레드향" }, { number: 2, title: "샤인머스켓" }, { number: 3, title: "산청딸기" }].map(el => <div>{el.number} {el.title}</div>)

    // 3. 실무 백엔드 데이터 예제 (aaa랑 결과 똑같음)
    const ccc = FRUITS.map(el => <div>{el.number} {el.title}</div>)
    return (
        <>
            {ccc}
        </>
    )

}