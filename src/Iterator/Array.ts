// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 3강 - Iterator
// 유튜브 참고 URL - 
// https://youtu.be/4BdFu4PaUJc?si=36hjXoSbOV9rsHxK


// Iterator 디자인 패턴 정리
// Iterator 디자인 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는
// Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있다.

// 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된
// 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.


// class - Array 
// Interface - Aggregator를 구현하는 배열 자료구조 

// class - Array와 class - Item의 관계(◆ has 관계)
// Item 클래스 객체를 Array 클래스에서 필드로 참조 (Item 클래스 배열 Item[])
// Array 클래스 객체와 Item 클래스 객체는 생명주기를 함께한다.
// 예를들어 
// Array 클래스 객체가 메모리에서 소멸되면
// Array 클래스 객체가 소유하는 
// Item 클래스 객체들도(Item 클래스 배열 - Item[]) 모두 메모리에서 소멸된다.

import Aggregator from "./Aggregator";
import ArrayIterator from "./ArrayIterator";
import Item from "./Item";
import Iterator from "./Iterator";

// class - Array는 Interface - Aggregator의 메서드를 구현해야 함.
// Interface - Aggregator는 제네릭 타입(T)가 정해져야 함.
// class - Array의 구성 데이터 타입으로 만들어둔 Item 클래스 지정 Aggregator<Item>


// class - Array 구현 방식 1
// class Array implements Aggregator<Item> {
//     // class - Array에 Item 클래스 객체 여러 개를 배열로 저장할 필드 private items 추가 
//     private items: Item[]

//     // 생성자에서 위의 필드 private items를 설정할 수 있도록 한다.
//     constructor(items: Item[]) {
//         this.items = items
//     }

//     // 메서드 getItem와 count property는 Interface - Iterator의 구현 클래스인 
//     // class - ArrayIterator에서 사용된다.

//     // 인덱스를 통해서 배열 구성 데이터를 얻을 수 있는 getItem 메서드 추가 
//     public getItem(index: number) {
//         return this.items[index]
//     }

//     // Interface - Aggregator의 메서드 "Iterator" 구현부
//     iterator(): Iterator<Item> {
//         return new ArrayIterator(this);  // class - ArrayIterator 객체를 생성해서 반환 처리 (생성자 ArrayIterator에 인자로 this(Array 클래스 객체 자신) 전달)
//     }
// }


// class - Array 구현 방식 2
class Array implements Aggregator<Item> {

    constructor(private items: Item[]) {}

    // 메서드 getItem와 count property는 Interface - Iterator의 구현 클래스인 
    // class - ArrayIterator에서 사용된다.

    // 인덱스를 통해서 배열 구성 데이터를 얻을 수 있는 getItem 메서드 추가 
    public getItem(index: number) {
        return this.items[index]
    }

    // 배열의 구성 데이터 개수를 얻을 수 있는 count property 추가 
    public get count() {
        return this.items.length
    }

    // Interface - Aggregator의 메서드 "Iterator" 구현부
    iterator(): Iterator<Item> {
        return new ArrayIterator(this);  // class - ArrayIterator 객체를 생성해서 반환 처리 (생성자 ArrayIterator에 인자로 this(Array 클래스 객체 자신) 전달)
    }
}

// Array 클래스는 ArrayIterator 클래스에서 사용할 수 있도록 export 처리 해야함.
export default Array
