// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 3강 - Iterator
// 유튜브 참고 URL - 
// https://youtu.be/4BdFu4PaUJc?si=36hjXoSbOV9rsHxK

// Iterator 디자인 패턴 정리
// Iterator 디자인 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는
// Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있다.

// 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된
// 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.


// Interface - Aggregator 구성 항목에 대한
// 데이터 타입인 Item 클래스 구현 

// class - Item 구현 방식 1
// class Item {
//     // 2개의 private 필드를 갖는다.
//     // class - Item 내부에서만 사용 가능한 필드이다.
//     private _name: string
//     private _cost: number

//     // 아래 생성자를 통해서 위의 2개의 private 필드 초기화 처리 
//     constructor(name: string, cost: number) {
//         this._name = name 
//         this._cost = cost
//     }

//     // class - Item 외부에서도 위의 2개의 private 필드를 읽을 수 있도록 
//     // getProperty (get name() / get cost()) 정의하기 
//     get name() {
//         return this._name
//     }

//     get cost() {
//         return this._cost
//     }
// }

// class - Item 구현 방식 2
class Item {
    // 2개의 private 필드를 갖는다.
    // class - Item 내부에서만 사용 가능한 필드이다.

    // 아래 생성자를 통해서 위의 2개의 private 필드 초기화 처리 
    constructor(private _name: string, private _cost: number) {}

    // class - Item 외부에서도 위의 2개의 private 필드를 읽을 수 있도록 
    // getProperty (get name() / get cost()) 정의하기 
    get name() {
        return this._name
    }

    get cost() {
        return this._cost
    }
}

// class - Item는 
// 다른 소스파일에서 불러와서 사용할 수 있도록 export 처리 
export default Item


