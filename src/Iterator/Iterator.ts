// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 3강 - Iterator
// 유튜브 참고 URL - 
// https://youtu.be/4BdFu4PaUJc?si=36hjXoSbOV9rsHxK

// Iterator 디자인 패턴 정리
// Iterator 디자인 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는
// Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있다.

// 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된
// 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.

// Interface - Iterator
interface Iterator<T> {
    next(): boolean   // Iterator 인터페이스를 통해서 Aggregator에 다음 구성 요소(next 데이터)을 얻을 수 있도록 하는 기능, 다음 구성 요소(next)을 얻으면 true / 얻을 수 없다면 false 리턴 
    current(): T   // 구성 요소(데이터)를 하나 얻어서 리턴 / 구성 요소(데이터)의 타입은 어떠한 타입이든 사용할 수 있도록 제네릭(T) 으로 설정 
}

// Interface - Iterator는 
// 다른 소스파일에서 불러와서 사용할 수 있도록 export 처리 
export default Iterator