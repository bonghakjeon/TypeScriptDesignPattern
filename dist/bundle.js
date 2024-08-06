/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Iterator/Array.ts":
/*!*******************************!*\
  !*** ./src/Iterator/Array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/Iterator/ArrayIterator.ts");
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 3강 - Iterator
// 유튜브 참고 URL - 
// https://youtu.be/4BdFu4PaUJc?si=36hjXoSbOV9rsHxK

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
var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    // 메서드 getItem와 count property는 Interface - Iterator의 구현 클래스인 
    // class - ArrayIterator에서 사용된다.
    // 인덱스를 통해서 배열 구성 데이터를 얻을 수 있는 getItem 메서드 추가 
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        // 배열의 구성 데이터 개수를 얻을 수 있는 count property 추가 
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    // Interface - Aggregator의 메서드 "Iterator" 구현부
    Array.prototype.iterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this); // class - ArrayIterator 객체를 생성해서 반환 처리 (생성자 ArrayIterator에 인자로 this(Array 클래스 객체 자신) 전달)
    };
    return Array;
}());
// Array 클래스는 ArrayIterator 클래스에서 사용할 수 있도록 export 처리 해야함.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/Iterator/ArrayIterator.ts":
/*!***************************************!*\
  !*** ./src/Iterator/ArrayIterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 3강 - Iterator
// 유튜브 참고 URL - 
// https://youtu.be/4BdFu4PaUJc?si=36hjXoSbOV9rsHxK
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
var ArrayIterator = /** @class */ (function () {
    // 아래 생성자에서 위의 2개의 private 필드 값을 초기화 처리 
    // 아래 생성자에서 참조할 Array 클래스 객체 array룰 인자로 받아와서 필드(this.array)에 설정 
    // 현재 가르키는 구성 데이터 인덱스(this.index)를 일단은 의미가 없는 -1로 지정 
    function ArrayIterator(array) {
        this.array = array;
        this.index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this.index++; // 먼저 인덱스 값 1 증가 
        return this.index < this.array.count; // 위에서 1 증가시킨 인덱스 값이 필드 array 객체의 인덱스 값으로 유효한지 여부 반환 (유효하면 true 리턴 / 유효하지 않으면 false 리턴) 
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index); // 필드 array 객체의 메서드 getItem 통해서 필드 index(현재 인덱스 값)에 해당되는 구성 데이터 객체(Item 클래스 객체) 반환 
    };
    return ArrayIterator;
}());
// class - ArrayIterator를 다른 소스파일에서 사용할 수 있도록 export 처리 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/Iterator/Item.ts":
/*!******************************!*\
  !*** ./src/Iterator/Item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
var Item = /** @class */ (function () {
    // 2개의 private 필드를 갖는다.
    // class - Item 내부에서만 사용 가능한 필드이다.
    // 아래 생성자를 통해서 위의 2개의 private 필드 초기화 처리 
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        // class - Item 외부에서도 위의 2개의 private 필드를 읽을 수 있도록 
        // getProperty (get name() / get cost()) 정의하기 
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
// class - Item는 
// 다른 소스파일에서 불러와서 사용할 수 있도록 export 처리 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/Iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/Iterator/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/Iterator/Item.ts");
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 3강 - Iterator
// 유튜브 참고 URL - 
// https://youtu.be/4BdFu4PaUJc?si=36hjXoSbOV9rsHxK
// Iterator 디자인 패턴 정리
// Iterator 디자인 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는
// Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있다.
// 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된
// 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.
// 폴더 "Iterator"의 시작점이 되는 index.ts 소스파일
// 1. class - Array, Item을 사용하기 위해서 import 처리 


// 2. 자바스크립트 배열 items 하나 정의
// 해당 배열 items에는 총 4개의 Item 클래스 객체가 존재 
var items = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("쿠쿠다스", 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("새우깡", 1800),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("빼빼로", 1200),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("초코파이", 4600)
];
// 3. 개발자가 만든 Array 클래스 객체 생성 
// Array 클래스 객체 생성시에 2번에서 만든 Item 클래스 배열 객체 items를 
// Array 클래스 생성자에 인자로 전달.
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
// 4. 구성 항목을 메서드 array.iterator()를 통해서 순차적으로 조회하기 위해
// Iterator 객체(ArrayIterator 클래스 객체) 얻어오기
var iter = array.iterator();
// 5. Iterator 객체 iter에 메서드 next 통해서 구성 항목이 더이상 존재하지 않을 때까지 계속 반복
while (iter.next()) {
    // 6. 실제(Item 클래스 배열 객체 items에 속하는 Item 클래스 객체는 Iterator 객체 iter에 메서드 current 통해서 얻을 수 있다.
    var item = iter.current();
    // 7. 6번의 Item 클래스 객체를 조회된 순서대로 웹 브라우저 바디에 추가하기 
    // 7-1. div 요소 하나 생성
    var domItem = document.createElement("div");
    // 7-2. 7-1번의 domItem에 텍스트 내용을 아래처럼 설정 
    domItem.innerText = "".concat(item.name, " : ").concat(item.cost, "\uC6D0 ");
    // 7-3. domItem을 웹 브라우저 바디에 추가
    document.body.appendChild(domItem);
    // 8. 웹 브라우저 바디에 아래처럼  Item 클래스 배열 객체 items에 속한
    //    구성요소(Item 클래스 객체에 속한 데이터)가 순서대로 출력 
    //    쿠쿠다스 : 2500원
    //    새우깡 : 1800원
    //    빼빼로 : 1200원
    //    초코파이 : 4600원
    // 9. domItem에 style.css에서 정의한 style 속성(.iterator-item) 추가 
    domItem.classList.add("iterator-item");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUMxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vLi9zcmMvSXRlcmF0b3IvQXJyYXkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vLi9zcmMvSXRlcmF0b3IvQXJyYXlJdGVyYXRvci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi8uL3NyYy9JdGVyYXRvci9JdGVtLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRkZXNpZ25wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRkZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRkZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vLi9zcmMvSXRlcmF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gW1R5cGVTY3JpcHTroZwg67O064qUIEdvRuydmCDrlJTsnpDsnbgg7Yyo7YS0XSDsiqTthLDrlJRcclxuLy8gM+qwlSAtIEl0ZXJhdG9yXHJcbi8vIOycoO2KnOu4jCDssLjqs6AgVVJMIC0gXHJcbi8vIGh0dHBzOi8veW91dHUuYmUvNEJkRnU0UGFVSmM/c2k9MzZoalhvU2JPVjlyc0h4S1xyXG5cclxuXHJcbi8vIEl0ZXJhdG9yIOuUlOyekOyduCDtjKjthLQg7KCV66asXHJcbi8vIEl0ZXJhdG9yIOuUlOyekOyduCDtjKjthLTsnYAg67Cw7Je07J2064KYIExpbmtlZC1MaXN0LCBUcmVlIOyymOufvCDri6Trpbgg642w7J207YSwIOq1rOyhsOulvCDqsJbripRcclxuLy8gQWdncmVnYXRvcuydmCDqtazshLEg7ZWt66qp7J2EIO2RnOykgO2ZlOuQnCDqs7XthrUgQVBJ66GcIOygkeq3vO2VoCDsiJgg7J6I64ukLlxyXG5cclxuLy8g642w7J207YSwIOq1rOyhsOqwgCDri6TrpbggQWdncmVnYXRvcuydvOyngOudvOuPhCDqtazshLHtla3rqqnsnYQg7ZGc7KSA7ZmU65CcXHJcbi8vIOqzte2GtSBBUEnroZwg7KCR6re87ZWgIOyImCDsnojsnYzsnLzroZwg7ZWY64KY7J2YIOqzte2GteuQnCDslYzqs6DrpqzsppjsnLzroZwg7LKY66as7ZWgIOyImCDsnojri6QuXHJcblxyXG5cclxuLy8gY2xhc3MgLSBBcnJheSBcclxuLy8gSW50ZXJmYWNlIC0gQWdncmVnYXRvcuulvCDqtaztmITtlZjripQg67Cw7Je0IOyekOujjOq1rOyhsCBcclxuXHJcbi8vIGNsYXNzIC0gQXJyYXnsmYAgY2xhc3MgLSBJdGVt7J2YIOq0gOqzhCjil4YgaGFzIOq0gOqzhClcclxuLy8gSXRlbSDtgbTrnpjsiqQg6rCd7LK066W8IEFycmF5IO2BtOuemOyKpOyXkOyEnCDtlYTrk5zroZwg7LC47KGwIChJdGVtIO2BtOuemOyKpCDrsLDsl7QgSXRlbVtdKVxyXG4vLyBBcnJheSDtgbTrnpjsiqQg6rCd7LK07JmAIEl0ZW0g7YG0656Y7IqkIOqwneyytOuKlCDsg53rqoXso7zquLDrpbwg7ZWo6ruY7ZWc64ukLlxyXG4vLyDsmIjrpbzrk6TslrQgXHJcbi8vIEFycmF5IO2BtOuemOyKpCDqsJ3ssrTqsIAg66mU66qo66as7JeQ7IScIOyGjOupuOuQmOuptFxyXG4vLyBBcnJheSDtgbTrnpjsiqQg6rCd7LK06rCAIOyGjOycoO2VmOuKlCBcclxuLy8gSXRlbSDtgbTrnpjsiqQg6rCd7LK065Ok64+EKEl0ZW0g7YG0656Y7IqkIOuwsOyXtCAtIEl0ZW1bXSkg66qo65GQIOuplOuqqOumrOyXkOyEnCDshozrqbjrkJzri6QuXHJcblxyXG5pbXBvcnQgQWdncmVnYXRvciBmcm9tIFwiLi9BZ2dyZWdhdG9yXCI7XHJcbmltcG9ydCBBcnJheUl0ZXJhdG9yIGZyb20gXCIuL0FycmF5SXRlcmF0b3JcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xyXG5pbXBvcnQgSXRlcmF0b3IgZnJvbSBcIi4vSXRlcmF0b3JcIjtcclxuXHJcbi8vIGNsYXNzIC0gQXJyYXnripQgSW50ZXJmYWNlIC0gQWdncmVnYXRvcuydmCDrqZTshJzrk5zrpbwg6rWs7ZiE7ZW07JW8IO2VqC5cclxuLy8gSW50ZXJmYWNlIC0gQWdncmVnYXRvcuuKlCDsoJzrhKTrpq0g7YOA7J6FKFQp6rCAIOygle2VtOyguOyVvCDtlaguXHJcbi8vIGNsYXNzIC0gQXJyYXnsnZgg6rWs7ISxIOuNsOydtO2EsCDtg4DsnoXsnLzroZwg66eM65Ok7Ja065GUIEl0ZW0g7YG0656Y7IqkIOyngOyglSBBZ2dyZWdhdG9yPEl0ZW0+XHJcblxyXG5cclxuLy8gY2xhc3MgLSBBcnJheSDqtaztmIQg67Cp7IudIDFcclxuLy8gY2xhc3MgQXJyYXkgaW1wbGVtZW50cyBBZ2dyZWdhdG9yPEl0ZW0+IHtcclxuLy8gICAgIC8vIGNsYXNzIC0gQXJyYXnsl5AgSXRlbSDtgbTrnpjsiqQg6rCd7LK0IOyXrOufrCDqsJzrpbwg67Cw7Je066GcIOyggOyepe2VoCDtlYTrk5wgcHJpdmF0ZSBpdGVtcyDstpTqsIAgXHJcbi8vICAgICBwcml2YXRlIGl0ZW1zOiBJdGVtW11cclxuXHJcbi8vICAgICAvLyDsg53shLHsnpDsl5DshJwg7JyE7J2YIO2VhOuTnCBwcml2YXRlIGl0ZW1z66W8IOyEpOygle2VoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cclxuLy8gICAgIGNvbnN0cnVjdG9yKGl0ZW1zOiBJdGVtW10pIHtcclxuLy8gICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXNcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyDrqZTshJzrk5wgZ2V0SXRlbeyZgCBjb3VudCBwcm9wZXJ0eeuKlCBJbnRlcmZhY2UgLSBJdGVyYXRvcuydmCDqtaztmIQg7YG0656Y7Iqk7J24IFxyXG4vLyAgICAgLy8gY2xhc3MgLSBBcnJheUl0ZXJhdG9y7JeQ7IScIOyCrOyaqeuQnOuLpC5cclxuXHJcbi8vICAgICAvLyDsnbjrjbHsiqTrpbwg7Ya17ZW07IScIOuwsOyXtCDqtazshLEg642w7J207YSw66W8IOyWu+ydhCDsiJgg7J6I64qUIGdldEl0ZW0g66mU7ISc65OcIOy2lOqwgCBcclxuLy8gICAgIHB1YmxpYyBnZXRJdGVtKGluZGV4OiBudW1iZXIpIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyBJbnRlcmZhY2UgLSBBZ2dyZWdhdG9y7J2YIOuplOyEnOuTnCBcIkl0ZXJhdG9yXCIg6rWs7ZiE67aAXHJcbi8vICAgICBpdGVyYXRvcigpOiBJdGVyYXRvcjxJdGVtPiB7XHJcbi8vICAgICAgICAgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKHRoaXMpOyAgLy8gY2xhc3MgLSBBcnJheUl0ZXJhdG9yIOqwneyytOulvCDsg53shLHtlbTshJwg67CY7ZmYIOyymOumrCAo7IOd7ISx7J6QIEFycmF5SXRlcmF0b3Lsl5Ag7J247J6Q66GcIHRoaXMoQXJyYXkg7YG0656Y7IqkIOqwneyytCDsnpDsi6ApIOyghOuLrClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIGNsYXNzIC0gQXJyYXkg6rWs7ZiEIOuwqeyLnSAyXHJcbmNsYXNzIEFycmF5IGltcGxlbWVudHMgQWdncmVnYXRvcjxJdGVtPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtczogSXRlbVtdKSB7fVxyXG5cclxuICAgIC8vIOuplOyEnOuTnCBnZXRJdGVt7JmAIGNvdW50IHByb3BlcnR564qUIEludGVyZmFjZSAtIEl0ZXJhdG9y7J2YIOq1rO2YhCDtgbTrnpjsiqTsnbggXHJcbiAgICAvLyBjbGFzcyAtIEFycmF5SXRlcmF0b3Lsl5DshJwg7IKs7Jqp65Cc64ukLlxyXG5cclxuICAgIC8vIOyduOuNseyKpOulvCDthrXtlbTshJwg67Cw7Je0IOq1rOyEsSDrjbDsnbTthLDrpbwg7Ja77J2EIOyImCDsnojripQgZ2V0SXRlbSDrqZTshJzrk5wg7LaU6rCAIFxyXG4gICAgcHVibGljIGdldEl0ZW0oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOuwsOyXtOydmCDqtazshLEg642w7J207YSwIOqwnOyImOulvCDslrvsnYQg7IiYIOyeiOuKlCBjb3VudCBwcm9wZXJ0eSDstpTqsIAgXHJcbiAgICBwdWJsaWMgZ2V0IGNvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEludGVyZmFjZSAtIEFnZ3JlZ2F0b3LsnZgg66mU7ISc65OcIFwiSXRlcmF0b3JcIiDqtaztmITrtoBcclxuICAgIGl0ZXJhdG9yKCk6IEl0ZXJhdG9yPEl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5SXRlcmF0b3IodGhpcyk7ICAvLyBjbGFzcyAtIEFycmF5SXRlcmF0b3Ig6rCd7LK066W8IOyDneyEse2VtOyEnCDrsJjtmZgg7LKY66asICjsg53shLHsnpAgQXJyYXlJdGVyYXRvcuyXkCDsnbjsnpDroZwgdGhpcyhBcnJheSDtgbTrnpjsiqQg6rCd7LK0IOyekOyLoCkg7KCE64usKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBcnJheSDtgbTrnpjsiqTripQgQXJyYXlJdGVyYXRvciDtgbTrnpjsiqTsl5DshJwg7IKs7Jqp7ZWgIOyImCDsnojrj4TroZ0gZXhwb3J0IOyymOumrCDtlbTslbztlaguXHJcbmV4cG9ydCBkZWZhdWx0IEFycmF5XHJcbiIsIi8vIFtUeXBlU2NyaXB066GcIOuztOuKlCBHb0bsnZgg65SU7J6Q7J24IO2MqO2EtF0g7Iqk7YSw65SUXHJcbi8vIDPqsJUgLSBJdGVyYXRvclxyXG4vLyDsnKDtipzruIwg7LC46rOgIFVSTCAtIFxyXG4vLyBodHRwczovL3lvdXR1LmJlLzRCZEZ1NFBhVUpjP3NpPTM2aGpYb1NiT1Y5cnNIeEtcclxuXHJcblxyXG4vLyBJdGVyYXRvciDrlJTsnpDsnbgg7Yyo7YS0IOygleumrFxyXG4vLyBJdGVyYXRvciDrlJTsnpDsnbgg7Yyo7YS07J2AIOuwsOyXtOydtOuCmCBMaW5rZWQtTGlzdCwgVHJlZSDsspjrn7wg64uk66W4IOuNsOydtO2EsCDqtazsobDrpbwg6rCW64qUXHJcbi8vIEFnZ3JlZ2F0b3LsnZgg6rWs7ISxIO2VreuqqeydhCDtkZzspIDtmZTrkJwg6rO17Ya1IEFQSeuhnCDsoJHqt7ztlaAg7IiYIOyeiOuLpC5cclxuXHJcbi8vIOuNsOydtO2EsCDqtazsobDqsIAg64uk66W4IEFnZ3JlZ2F0b3Lsnbzsp4Drnbzrj4Qg6rWs7ISx7ZWt66qp7J2EIO2RnOykgO2ZlOuQnFxyXG4vLyDqs7XthrUgQVBJ66GcIOygkeq3vO2VoCDsiJgg7J6I7J2M7Jy866GcIO2VmOuCmOydmCDqs7XthrXrkJwg7JWM6rOg66as7KaY7Jy866GcIOyymOumrO2VoCDsiJgg7J6I64ukLlxyXG5cclxuXHJcbi8vIGNsYXNzIC0gQXJyYXlJdGVyYXRvcuyZgCBjbGFzcyAtIEFycmF57J2YIOq0gOqzhCjil4cgaGFzIOq0gOqzhClcclxuLy8gQXJyYXkg7YG0656Y7IqkIOqwneyytOulvCBBcnJheUl0ZXJhdG9yIO2BtOuemOyKpOyXkOyEnCDtlYTrk5zroZwg7LC47KGwIFxyXG4vLyDsnbTrpbwg7JyE7ZW07ISc64qUIEFycmF5IO2BtOuemOyKpOuKlCBBcnJheUl0ZXJhdG9yIO2BtOuemOyKpOyXkOyEnCDsgqzsmqntlaAg7IiYIOyeiOuPhOuhnSBleHBvcnQg7LKY66asIO2VtOyVvO2VqC5cclxuLy8gQXJyYXlJdGVyYXRvciDtgbTrnpjsiqQg6rCd7LK07JmAIEFycmF5IO2BtOuemOyKpCDqsJ3ssrTripQg7IOd66qF7KO86riwIOyEnOuhnCDrj4Xrpr3soIHsnbTri6QuXHJcbi8vIOyYiOulvOuTpOyWtCBcclxuLy8gQXJyYXlJdGVyYXRvciDtgbTrnpjsiqQg6rCd7LK06rCAIOuplOuqqOumrOyXkOyEnCDshozrqbjrkJjrjZTrnbzrj4QgXHJcbi8vIEFycmF5SXRlcmF0b3Ig7YG0656Y7IqkIOqwneyytOqwgCDshozsnKDtlZjripQgXHJcbi8vIEFycmF5IO2BtOuemOyKpCDqsJ3ssrTrk6TsnYAoSXRlbSDtgbTrnpjsiqQg67Cw7Je0IC0gSXRlbVtdKSDrqZTrqqjrpqzsl5DshJwg7IaM66m4IOyViCDrkJzri6QuXHJcblxyXG5pbXBvcnQgQXJyYXkgZnJvbSBcIi4vQXJyYXlcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xyXG5pbXBvcnQgSXRlcmF0b3IgZnJvbSBcIi4vSXRlcmF0b3JcIjtcclxuXHJcbi8vIGNsYXNzIC0gQXJyYXlJdGVyYXRvciDqtaztmIQg67Cp7IudIDFcclxuLy8gSW50ZXJmYWNlIC0gSXRlcmF0b3LripQg7KCc64Sk66atIO2DgOyehShUKeulvCDsp4DsoJXtlbTslbwg7ZWoLlxyXG4vLyDsoJzrhKTrpq0g7YOA7J6FKFQp7J2EIEl0ZW3snLzroZwg7KeA7KCVKEl0ZXJhdG9yPEl0ZW0+KVxyXG4vLyBjbGFzcyBBcnJheUl0ZXJhdG9yIGltcGxlbWVudHMgSXRlcmF0b3I8SXRlbT4ge1xyXG4vLyAgICAgcHJpdmF0ZSBhcnJheTogQXJyYXlcclxuXHJcbi8vICAgICAvLyDtlYTrk5wgKHByaXZhdGUgYXJyYXk6IEFycmF5KeyXkOyEnCDtmITsnqwg67CY7ZmY7ZWgIOyImCDsnojripQg642w7J207YSwIO2VreuqqeyXkCDrjIDtlZwgXHJcbi8vICAgICAvLyDsnbjrjbHsiqQg6rCS7J2EIOychO2VnCDtlYTrk5wocHJpdmF0ZSBpbmRleCnqsIAg67OE64+E66GcIO2VhOyalCBcclxuLy8gICAgIHByaXZhdGUgaW5kZXg6IG51bWJlclxyXG5cclxuLy8gICAgIC8vIOyVhOuemCDsg53shLHsnpDsl5DshJwg7JyE7J2YIDLqsJzsnZggcHJpdmF0ZSDtlYTrk5wg6rCS7J2EIOy0iOq4sO2ZlCDsspjrpqwgXHJcbi8vICAgICAvLyDslYTrnpgg7IOd7ISx7J6Q7JeQ7IScIOywuOyhsO2VoCBBcnJheSDtgbTrnpjsiqQg6rCd7LK0IGFycmF566OwIOyduOyekOuhnCDrsJvslYTsmYDshJwg7ZWE65OcKHRoaXMuYXJyYXkp7JeQIOyEpOyglSBcclxuLy8gICAgIC8vIO2YhOyerCDqsIDrpbTtgqTripQg6rWs7ISxIOuNsOydtO2EsCDsnbjrjbHsiqQodGhpcy5pbmRleCnrpbwg7J2864uo7J2AIOydmOuvuOqwgCDsl4bripQgLTHroZwg7KeA7KCVIFxyXG4vLyAgICAgY29uc3RydWN0b3IoYXJyYXk6IEFycmF5KSB7XHJcbi8vICAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4vLyAgICAgICAgIHRoaXMuaW5kZXggPSAtMTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBuZXh0KCk6IGJvb2xlYW4ge1xyXG4vLyAgICAgICAgIHRoaXMuaW5kZXgrKyAgLy8g66i87KCAIOyduOuNseyKpCDqsJIgMSDspp3qsIAgXHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLmFycmF5LmNvdW50ICAgLy8g7JyE7JeQ7IScIDEg7Kad6rCA7Iuc7YKoIOyduOuNseyKpCDqsJLsnbQg7ZWE65OcIGFycmF5IOqwneyytOydmCDsnbjrjbHsiqQg6rCS7Jy866GcIOycoO2aqO2VnOyngCDsl6zrtoAg67CY7ZmYICjsnKDtmqjtlZjrqbQgdHJ1ZSDrpqzthLQgLyDsnKDtmqjtlZjsp4Ag7JWK7Jy866m0IGZhbHNlIOumrO2EtCkgXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY3VycmVudCgpOiBJdGVtIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5hcnJheS5nZXRJdGVtKHRoaXMuaW5kZXgpICAgLy8g7ZWE65OcIGFycmF5IOqwneyytOydmCDrqZTshJzrk5wgZ2V0SXRlbSDthrXtlbTshJwg7ZWE65OcIGluZGV4KO2YhOyerCDsnbjrjbHsiqQg6rCSKeyXkCDtlbTri7nrkJjripQg6rWs7ISxIOuNsOydtO2EsCDqsJ3ssrQoSXRlbSDtgbTrnpjsiqQg6rCd7LK0KSDrsJjtmZggXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyBjbGFzcyAtIEFycmF5SXRlcmF0b3Ig6rWs7ZiEIOuwqeyLnSAyXHJcbi8vIEludGVyZmFjZSAtIEl0ZXJhdG9y64qUIOygnOuEpOumrSDtg4DsnoUoVCnrpbwg7KeA7KCV7ZW07JW8IO2VqC5cclxuLy8g7KCc64Sk66atIO2DgOyehShUKeydhCBJdGVt7Jy866GcIOyngOyglShJdGVyYXRvcjxJdGVtPilcclxuY2xhc3MgQXJyYXlJdGVyYXRvciBpbXBsZW1lbnRzIEl0ZXJhdG9yPEl0ZW0+IHtcclxuXHJcbiAgICAvLyDtlYTrk5wgKHByaXZhdGUgYXJyYXk6IEFycmF5KeyXkOyEnCDtmITsnqwg67CY7ZmY7ZWgIOyImCDsnojripQg642w7J207YSwIO2VreuqqeyXkCDrjIDtlZwgXHJcbiAgICAvLyDsnbjrjbHsiqQg6rCS7J2EIOychO2VnCDtlYTrk5wocHJpdmF0ZSBpbmRleCnqsIAg67OE64+E66GcIO2VhOyalCBcclxuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlclxyXG5cclxuICAgIC8vIOyVhOuemCDsg53shLHsnpDsl5DshJwg7JyE7J2YIDLqsJzsnZggcHJpdmF0ZSDtlYTrk5wg6rCS7J2EIOy0iOq4sO2ZlCDsspjrpqwgXHJcbiAgICAvLyDslYTrnpgg7IOd7ISx7J6Q7JeQ7IScIOywuOyhsO2VoCBBcnJheSDtgbTrnpjsiqQg6rCd7LK0IGFycmF566OwIOyduOyekOuhnCDrsJvslYTsmYDshJwg7ZWE65OcKHRoaXMuYXJyYXkp7JeQIOyEpOyglSBcclxuICAgIC8vIO2YhOyerCDqsIDrpbTtgqTripQg6rWs7ISxIOuNsOydtO2EsCDsnbjrjbHsiqQodGhpcy5pbmRleCnrpbwg7J2864uo7J2AIOydmOuvuOqwgCDsl4bripQgLTHroZwg7KeA7KCVIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnJheTogQXJyYXkpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLmluZGV4KysgIC8vIOuovOyggCDsnbjrjbHsiqQg6rCSIDEg7Kad6rCAIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy5hcnJheS5jb3VudCAgIC8vIOychOyXkOyEnCAxIOymneqwgOyLnO2CqCDsnbjrjbHsiqQg6rCS7J20IO2VhOuTnCBhcnJheSDqsJ3ssrTsnZgg7J24642x7IqkIOqwkuycvOuhnCDsnKDtmqjtlZzsp4Ag7Jes67aAIOuwmO2ZmCAo7Jyg7Zqo7ZWY66m0IHRydWUg66as7YS0IC8g7Jyg7Zqo7ZWY7KeAIOyViuycvOuptCBmYWxzZSDrpqzthLQpIFxyXG4gICAgfVxyXG4gICAgY3VycmVudCgpOiBJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheS5nZXRJdGVtKHRoaXMuaW5kZXgpICAgLy8g7ZWE65OcIGFycmF5IOqwneyytOydmCDrqZTshJzrk5wgZ2V0SXRlbSDthrXtlbTshJwg7ZWE65OcIGluZGV4KO2YhOyerCDsnbjrjbHsiqQg6rCSKeyXkCDtlbTri7nrkJjripQg6rWs7ISxIOuNsOydtO2EsCDqsJ3ssrQoSXRlbSDtgbTrnpjsiqQg6rCd7LK0KSDrsJjtmZggXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNsYXNzIC0gQXJyYXlJdGVyYXRvcuulvCDri6Trpbgg7IaM7Iqk7YyM7J287JeQ7IScIOyCrOyaqe2VoCDsiJgg7J6I64+E66GdIGV4cG9ydCDsspjrpqwgXHJcbmV4cG9ydCBkZWZhdWx0IEFycmF5SXRlcmF0b3IiLCIvLyBbVHlwZVNjcmlwdOuhnCDrs7TripQgR29G7J2YIOuUlOyekOyduCDtjKjthLRdIOyKpO2EsOuUlFxyXG4vLyAz6rCVIC0gSXRlcmF0b3JcclxuLy8g7Jyg7Yqc67iMIOywuOqzoCBVUkwgLSBcclxuLy8gaHR0cHM6Ly95b3V0dS5iZS80QmRGdTRQYVVKYz9zaT0zNmhqWG9TYk9WOXJzSHhLXHJcblxyXG4vLyBJdGVyYXRvciDrlJTsnpDsnbgg7Yyo7YS0IOygleumrFxyXG4vLyBJdGVyYXRvciDrlJTsnpDsnbgg7Yyo7YS07J2AIOuwsOyXtOydtOuCmCBMaW5rZWQtTGlzdCwgVHJlZSDsspjrn7wg64uk66W4IOuNsOydtO2EsCDqtazsobDrpbwg6rCW64qUXHJcbi8vIEFnZ3JlZ2F0b3LsnZgg6rWs7ISxIO2VreuqqeydhCDtkZzspIDtmZTrkJwg6rO17Ya1IEFQSeuhnCDsoJHqt7ztlaAg7IiYIOyeiOuLpC5cclxuXHJcbi8vIOuNsOydtO2EsCDqtazsobDqsIAg64uk66W4IEFnZ3JlZ2F0b3Lsnbzsp4Drnbzrj4Qg6rWs7ISx7ZWt66qp7J2EIO2RnOykgO2ZlOuQnFxyXG4vLyDqs7XthrUgQVBJ66GcIOygkeq3vO2VoCDsiJgg7J6I7J2M7Jy866GcIO2VmOuCmOydmCDqs7XthrXrkJwg7JWM6rOg66as7KaY7Jy866GcIOyymOumrO2VoCDsiJgg7J6I64ukLlxyXG5cclxuXHJcbi8vIEludGVyZmFjZSAtIEFnZ3JlZ2F0b3Ig6rWs7ISxIO2VreuqqeyXkCDrjIDtlZxcclxuLy8g642w7J207YSwIO2DgOyeheyduCBJdGVtIO2BtOuemOyKpCDqtaztmIQgXHJcblxyXG4vLyBjbGFzcyAtIEl0ZW0g6rWs7ZiEIOuwqeyLnSAxXHJcbi8vIGNsYXNzIEl0ZW0ge1xyXG4vLyAgICAgLy8gMuqwnOydmCBwcml2YXRlIO2VhOuTnOulvCDqsJbripTri6QuXHJcbi8vICAgICAvLyBjbGFzcyAtIEl0ZW0g64K067aA7JeQ7ISc66eMIOyCrOyaqSDqsIDriqXtlZwg7ZWE65Oc7J2064ukLlxyXG4vLyAgICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nXHJcbi8vICAgICBwcml2YXRlIF9jb3N0OiBudW1iZXJcclxuXHJcbi8vICAgICAvLyDslYTrnpgg7IOd7ISx7J6Q66W8IO2Gte2VtOyEnCDsnITsnZggMuqwnOydmCBwcml2YXRlIO2VhOuTnCDstIjquLDtmZQg7LKY66asIFxyXG4vLyAgICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb3N0OiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLl9uYW1lID0gbmFtZSBcclxuLy8gICAgICAgICB0aGlzLl9jb3N0ID0gY29zdFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIGNsYXNzIC0gSXRlbSDsmbjrtoDsl5DshJzrj4Qg7JyE7J2YIDLqsJzsnZggcHJpdmF0ZSDtlYTrk5zrpbwg7J297J2EIOyImCDsnojrj4TroZ0gXHJcbi8vICAgICAvLyBnZXRQcm9wZXJ0eSAoZ2V0IG5hbWUoKSAvIGdldCBjb3N0KCkpIOygleydmO2VmOq4sCBcclxuLy8gICAgIGdldCBuYW1lKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZ2V0IGNvc3QoKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX2Nvc3RcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgLSBJdGVtIOq1rO2YhCDrsKnsi50gMlxyXG5jbGFzcyBJdGVtIHtcclxuICAgIC8vIDLqsJzsnZggcHJpdmF0ZSDtlYTrk5zrpbwg6rCW64qU64ukLlxyXG4gICAgLy8gY2xhc3MgLSBJdGVtIOuCtOu2gOyXkOyEnOunjCDsgqzsmqkg6rCA64ql7ZWcIO2VhOuTnOydtOuLpC5cclxuXHJcbiAgICAvLyDslYTrnpgg7IOd7ISx7J6Q66W8IO2Gte2VtOyEnCDsnITsnZggMuqwnOydmCBwcml2YXRlIO2VhOuTnCDstIjquLDtmZQg7LKY66asIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9jb3N0OiBudW1iZXIpIHt9XHJcblxyXG4gICAgLy8gY2xhc3MgLSBJdGVtIOyZuOu2gOyXkOyEnOuPhCDsnITsnZggMuqwnOydmCBwcml2YXRlIO2VhOuTnOulvCDsnb3snYQg7IiYIOyeiOuPhOuhnSBcclxuICAgIC8vIGdldFByb3BlcnR5IChnZXQgbmFtZSgpIC8gZ2V0IGNvc3QoKSkg7KCV7J2Y7ZWY6riwIFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29zdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29zdFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjbGFzcyAtIEl0ZW3ripQgXHJcbi8vIOuLpOuluCDshozsiqTtjIzsnbzsl5DshJwg67aI65+s7JmA7IScIOyCrOyaqe2VoCDsiJgg7J6I64+E66GdIGV4cG9ydCDsspjrpqwgXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFtUeXBlU2NyaXB066GcIOuztOuKlCBHb0bsnZgg65SU7J6Q7J24IO2MqO2EtF0g7Iqk7YSw65SUXHJcbi8vIDPqsJUgLSBJdGVyYXRvclxyXG4vLyDsnKDtipzruIwg7LC46rOgIFVSTCAtIFxyXG4vLyBodHRwczovL3lvdXR1LmJlLzRCZEZ1NFBhVUpjP3NpPTM2aGpYb1NiT1Y5cnNIeEtcclxuXHJcblxyXG4vLyBJdGVyYXRvciDrlJTsnpDsnbgg7Yyo7YS0IOygleumrFxyXG4vLyBJdGVyYXRvciDrlJTsnpDsnbgg7Yyo7YS07J2AIOuwsOyXtOydtOuCmCBMaW5rZWQtTGlzdCwgVHJlZSDsspjrn7wg64uk66W4IOuNsOydtO2EsCDqtazsobDrpbwg6rCW64qUXHJcbi8vIEFnZ3JlZ2F0b3LsnZgg6rWs7ISxIO2VreuqqeydhCDtkZzspIDtmZTrkJwg6rO17Ya1IEFQSeuhnCDsoJHqt7ztlaAg7IiYIOyeiOuLpC5cclxuXHJcbi8vIOuNsOydtO2EsCDqtazsobDqsIAg64uk66W4IEFnZ3JlZ2F0b3Lsnbzsp4Drnbzrj4Qg6rWs7ISx7ZWt66qp7J2EIO2RnOykgO2ZlOuQnFxyXG4vLyDqs7XthrUgQVBJ66GcIOygkeq3vO2VoCDsiJgg7J6I7J2M7Jy866GcIO2VmOuCmOydmCDqs7XthrXrkJwg7JWM6rOg66as7KaY7Jy866GcIOyymOumrO2VoCDsiJgg7J6I64ukLlxyXG5cclxuLy8g7Y+0642UIFwiSXRlcmF0b3JcIuydmCDsi5zsnpHsoJDsnbQg65CY64qUIGluZGV4LnRzIOyGjOyKpO2MjOydvFxyXG5cclxuLy8gMS4gY2xhc3MgLSBBcnJheSwgSXRlbeydhCDsgqzsmqntlZjquLAg7JyE7ZW07IScIGltcG9ydCDsspjrpqwgXHJcbmltcG9ydCBBcnJheSBmcm9tIFwiLi9BcnJheVwiXHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIlxyXG5cclxuLy8gMi4g7J6Q67CU7Iqk7YGs66a97Yq4IOuwsOyXtCBpdGVtcyDtlZjrgpgg7KCV7J2YXHJcbi8vIO2VtOuLuSDrsLDsl7QgaXRlbXPsl5DripQg7LSdIDTqsJzsnZggSXRlbSDtgbTrnpjsiqQg6rCd7LK06rCAIOyhtOyerCBcclxuY29uc3QgaXRlbXMgPSBbXHJcbiAgICBuZXcgSXRlbShcIuy/oOy/oOuLpOyKpFwiLCAyNTAwKSxcclxuICAgIG5ldyBJdGVtKFwi7IOI7Jqw6rmhXCIsIDE4MDApLFxyXG4gICAgbmV3IEl0ZW0oXCLrubzrubzroZxcIiwgMTIwMCksXHJcbiAgICBuZXcgSXRlbShcIuy0iOy9lO2MjOydtFwiLCA0NjAwKVxyXG5dXHJcblxyXG4vLyAzLiDqsJzrsJzsnpDqsIAg66eM65OgIEFycmF5IO2BtOuemOyKpCDqsJ3ssrQg7IOd7ISxIFxyXG4vLyBBcnJheSDtgbTrnpjsiqQg6rCd7LK0IOyDneyEseyLnOyXkCAy67KI7JeQ7IScIOunjOuToCBJdGVtIO2BtOuemOyKpCDrsLDsl7Qg6rCd7LK0IGl0ZW1z66W8IFxyXG4vLyBBcnJheSDtgbTrnpjsiqQg7IOd7ISx7J6Q7JeQIOyduOyekOuhnCDsoITri6wuXHJcbmNvbnN0IGFycmF5ID0gbmV3IEFycmF5KGl0ZW1zKVxyXG5cclxuLy8gNC4g6rWs7ISxIO2VreuqqeydhCDrqZTshJzrk5wgYXJyYXkuaXRlcmF0b3IoKeulvCDthrXtlbTshJwg7Iic7LCo7KCB7Jy866GcIOyhsO2ajO2VmOq4sCDsnITtlbRcclxuLy8gSXRlcmF0b3Ig6rCd7LK0KEFycmF5SXRlcmF0b3Ig7YG0656Y7IqkIOqwneyytCkg7Ja77Ja07Jik6riwXHJcbmNvbnN0IGl0ZXIgPSBhcnJheS5pdGVyYXRvcigpXHJcblxyXG4vLyA1LiBJdGVyYXRvciDqsJ3ssrQgaXRlcuyXkCDrqZTshJzrk5wgbmV4dCDthrXtlbTshJwg6rWs7ISxIO2VreuqqeydtCDrjZTsnbTsg4Eg7KG07J6s7ZWY7KeAIOyViuydhCDrlYzquYzsp4Ag6rOE7IaNIOuwmOuztVxyXG53aGlsZShpdGVyLm5leHQoKSkge1xyXG4gICAgLy8gNi4g7Iuk7KCcKEl0ZW0g7YG0656Y7IqkIOuwsOyXtCDqsJ3ssrQgaXRlbXPsl5Ag7IaN7ZWY64qUIEl0ZW0g7YG0656Y7IqkIOqwneyytOuKlCBJdGVyYXRvciDqsJ3ssrQgaXRlcuyXkCDrqZTshJzrk5wgY3VycmVudCDthrXtlbTshJwg7Ja77J2EIOyImCDsnojri6QuXHJcbiAgICBjb25zdCBpdGVtID0gaXRlci5jdXJyZW50KClcclxuXHJcbiAgICAvLyA3LiA267KI7J2YIEl0ZW0g7YG0656Y7IqkIOqwneyytOulvCDsobDtmozrkJwg7Iic7ISc64yA66GcIOybuSDruIzrnbzsmrDsoIAg67CU65SU7JeQIOy2lOqwgO2VmOq4sCBcclxuICAgIC8vIDctMS4gZGl2IOyalOyGjCDtlZjrgpgg7IOd7ISxXHJcbiAgICBjb25zdCBkb21JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgLy8gNy0yLiA3LTHrsojsnZggZG9tSXRlbeyXkCDthY3siqTtirgg64K07Jqp7J2EIOyVhOuemOyymOufvCDshKTsoJUgXHJcbiAgICBkb21JdGVtLmlubmVyVGV4dCA9IGAke2l0ZW0ubmFtZX0gOiAke2l0ZW0uY29zdH3sm5AgYFxyXG4gICAgLy8gNy0zLiBkb21JdGVt7J2EIOybuSDruIzrnbzsmrDsoIAg67CU65SU7JeQIOy2lOqwgFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKVxyXG5cclxuICAgIC8vIDguIOybuSDruIzrnbzsmrDsoIAg67CU65SU7JeQIOyVhOuemOyymOufvCAgSXRlbSDtgbTrnpjsiqQg67Cw7Je0IOqwneyytCBpdGVtc+yXkCDsho3tlZxcclxuICAgIC8vICAgIOq1rOyEseyalOyGjChJdGVtIO2BtOuemOyKpCDqsJ3ssrTsl5Ag7IaN7ZWcIOuNsOydtO2EsCnqsIAg7Iic7ISc64yA66GcIOy2nOugpSBcclxuICAgIC8vICAgIOy/oOy/oOuLpOyKpCA6IDI1MDDsm5BcclxuICAgIC8vICAgIOyDiOyasOq5oSA6IDE4MDDsm5BcclxuICAgIC8vICAgIOu5vOu5vOuhnCA6IDEyMDDsm5BcclxuICAgIC8vICAgIOy0iOy9lO2MjOydtCA6IDQ2MDDsm5BcclxuXHJcbiAgICAvLyA5LiBkb21JdGVt7JeQIHN0eWxlLmNzc+yXkOyEnCDsoJXsnZjtlZwgc3R5bGUg7IaN7ISxKC5pdGVyYXRvci1pdGVtKSDstpTqsIAgXHJcbiAgICBkb21JdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVyYXRvci1pdGVtXCIpXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=