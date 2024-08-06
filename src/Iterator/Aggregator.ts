// Iterator 디자인 패턴 정리
// Iterator 디자인 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는
// Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있다.

// 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된
// 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.

import Iterator from "./Iterator"

// Interface - Aggregator
// Interface - Aggregator는 T라는 제네릭 타입을 가진다.
// 이 제네릭 타입 T를 Iterator Interface에 넘겨서 
// 메서드 iterator()의 반환 타입으로 선언하고(Iterator<T>) 있다.
interface Aggregator<T> {
    iterator(): Iterator<T>   // 메서드 "iterator()"는 Interface - Iterator 타입의 객체를 생성해서 반환해주는 메서드이다.
}

// Interface - Aggregator는 
// 다른 소스파일에서 불러와서 사용할 수 있도록 export 처리 
export default Aggregator


