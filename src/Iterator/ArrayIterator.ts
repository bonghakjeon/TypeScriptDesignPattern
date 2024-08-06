// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 3강 - Iterator
// 유튜브 참고 URL - 
// https://youtu.be/4BdFu4PaUJc?si=36hjXoSbOV9rsHxK


// Iterator 디자인 패턴 정리
// Iterator 디자인 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는
// Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있다.

// 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된
// 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.


// class - ArrayIterator와 class - Array의 관계(◇ has 관계)
// Array 클래스 객체를 ArrayIterator 클래스에서 필드로 참조 
// 이를 위해서는 Array 클래스는 ArrayIterator 클래스에서 사용할 수 있도록 export 처리 해야함.
// ArrayIterator 클래스 객체와 Array 클래스 객체는 생명주기 서로 독립적이다.
// 예를들어 
// ArrayIterator 클래스 객체가 메모리에서 소멸되더라도 
// ArrayIterator 클래스 객체가 소유하는 
// Array 클래스 객체들은(Item 클래스 배열 - Item[]) 메모리에서 소멸 안 된다.

import Array from "./Array";
import Item from "./Item";
import Iterator from "./Iterator";

// class - ArrayIterator 구현 방식 1
// Interface - Iterator는 제네릭 타입(T)를 지정해야 함.
// 제네릭 타입(T)을 Item으로 지정(Iterator<Item>)
// class ArrayIterator implements Iterator<Item> {
//     private array: Array

//     // 필드 (private array: Array)에서 현재 반환할 수 있는 데이터 항목에 대한 
//     // 인덱스 값을 위한 필드(private index)가 별도로 필요 
//     private index: number

//     // 아래 생성자에서 위의 2개의 private 필드 값을 초기화 처리 
//     // 아래 생성자에서 참조할 Array 클래스 객체 array룰 인자로 받아와서 필드(this.array)에 설정 
//     // 현재 가르키는 구성 데이터 인덱스(this.index)를 일단은 의미가 없는 -1로 지정 
//     constructor(array: Array) {
//         this.array = array;
//         this.index = -1;
//     }

//     next(): boolean {
//         this.index++  // 먼저 인덱스 값 1 증가 
//         return this.index < this.array.count   // 위에서 1 증가시킨 인덱스 값이 필드 array 객체의 인덱스 값으로 유효한지 여부 반환 (유효하면 true 리턴 / 유효하지 않으면 false 리턴) 
//     }

//     current(): Item {
//         return this.array.getItem(this.index)   // 필드 array 객체의 메서드 getItem 통해서 필드 index(현재 인덱스 값)에 해당되는 구성 데이터 객체(Item 클래스 객체) 반환 
//     }
// }


// class - ArrayIterator 구현 방식 2
// Interface - Iterator는 제네릭 타입(T)를 지정해야 함.
// 제네릭 타입(T)을 Item으로 지정(Iterator<Item>)
class ArrayIterator implements Iterator<Item> {

    // 필드 (private array: Array)에서 현재 반환할 수 있는 데이터 항목에 대한 
    // 인덱스 값을 위한 필드(private index)가 별도로 필요 
    private index: number

    // 아래 생성자에서 위의 2개의 private 필드 값을 초기화 처리 
    // 아래 생성자에서 참조할 Array 클래스 객체 array룰 인자로 받아와서 필드(this.array)에 설정 
    // 현재 가르키는 구성 데이터 인덱스(this.index)를 일단은 의미가 없는 -1로 지정 
    constructor(private array: Array) {
        this.index = -1;
    }

    next(): boolean {
        this.index++  // 먼저 인덱스 값 1 증가 
        return this.index < this.array.count   // 위에서 1 증가시킨 인덱스 값이 필드 array 객체의 인덱스 값으로 유효한지 여부 반환 (유효하면 true 리턴 / 유효하지 않으면 false 리턴) 
    }
    current(): Item {
        return this.array.getItem(this.index)   // 필드 array 객체의 메서드 getItem 통해서 필드 index(현재 인덱스 값)에 해당되는 구성 데이터 객체(Item 클래스 객체) 반환 
    }
}

// class - ArrayIterator를 다른 소스파일에서 사용할 수 있도록 export 처리 
export default ArrayIterator