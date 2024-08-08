// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 3강 - Iterator
// 유튜브 참고 URL - 
// https://youtu.be/4BdFu4PaUJc?si=36hjXoSbOV9rsHxK


// Iterator(반복자) 디자인 패턴 정리
// Iterator 디자인 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는
// Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있다.

// 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된
// 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.

// 폴더 "Iterator"의 시작점이 되는 index.ts 소스파일

// 1. class - Array, Item을 사용하기 위해서 import 처리 
import Array from "./Array"
import Item from "./Item"

// 2. 자바스크립트 배열 items 하나 정의
// 해당 배열 items에는 총 4개의 Item 클래스 객체가 존재 
const items = [
    new Item("쿠쿠다스", 2500),
    new Item("새우깡", 1800),
    new Item("빼빼로", 1200),
    new Item("초코파이", 4600)
]

// 3. 개발자가 만든 Array 클래스 객체 생성 
// Array 클래스 객체 생성시에 2번에서 만든 Item 클래스 배열 객체 items를 
// Array 클래스 생성자에 인자로 전달.
const array = new Array(items)

// 4. 구성 항목을 메서드 array.iterator()를 통해서 순차적으로 조회하기 위해
// Iterator 객체(ArrayIterator 클래스 객체) 얻어오기
const iter = array.iterator()

// 5. Iterator 객체 iter에 메서드 next 통해서 구성 항목이 더이상 존재하지 않을 때까지 계속 반복
while(iter.next()) {
    // 6. 실제(Item 클래스 배열 객체 items에 속하는 Item 클래스 객체는 Iterator 객체 iter에 메서드 current 통해서 얻을 수 있다.
    const item = iter.current()

    // 7. 6번의 Item 클래스 객체를 조회된 순서대로 웹 브라우저 바디에 추가하기 
    // 7-1. div 요소 하나 생성
    const domItem = document.createElement("div")
    // 7-2. 7-1번의 domItem에 텍스트 내용을 아래처럼 설정 
    domItem.innerText = `${item.name} : ${item.cost}원 `
    // 7-3. domItem을 웹 브라우저 바디에 추가
    document.body.appendChild(domItem)

    // 8. 웹 브라우저 바디에 아래처럼  Item 클래스 배열 객체 items에 속한
    //    구성요소(Item 클래스 객체에 속한 데이터)가 순서대로 출력 
    //    쿠쿠다스 : 2500원
    //    새우깡 : 1800원
    //    빼빼로 : 1200원
    //    초코파이 : 4600원

    // 9. domItem에 style.css에서 정의한 style 속성(.iterator-item) 추가 
    domItem.classList.add("iterator-item")
}