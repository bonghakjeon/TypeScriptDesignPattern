/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Strategy/GaussSumStrategy.ts":
/*!******************************************!*\
  !*** ./src/Strategy/GaussSumStrategy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 4강 - Strategy
// 유튜브 참고 URL - 
// https://youtu.be/TiHzYc8I3Kk?si=Cw74ax8h68UgaEsQ
var GaussSumStrategy = /** @class */ (function () {
    function GaussSumStrategy() {
    }
    /// <summary>
    /// 1부터 N까지 합계를 얻기 위한 
    /// get 메서드 실제 구현부
    /// </summary>
    GaussSumStrategy.prototype.get = function (N) {
        // 가우스 공식을 이용해서 1부터 N까지 합을 빠르게 계산
        return N * (N + 1) / 2;
    };
    return GaussSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaussSumStrategy);


/***/ }),

/***/ "./src/Strategy/LoopSumStrategy.ts":
/*!*****************************************!*\
  !*** ./src/Strategy/LoopSumStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 4강 - Strategy
// 유튜브 참고 URL - 
// https://youtu.be/TiHzYc8I3Kk?si=Cw74ax8h68UgaEsQ
var LoopSumStrategy = /** @class */ (function () {
    function LoopSumStrategy() {
    }
    /// <summary>
    /// 1부터 N까지 합계를 얻기 위한 
    /// get 메서드 실제 구현부
    /// </summary>
    LoopSumStrategy.prototype.get = function (N) {
        var sum = 0;
        // for 반복문 이용해서 1부터 N까지 합 구하기 
        for (var i = 1; i <= N; i++)
            sum += i;
        return sum;
    };
    return LoopSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoopSumStrategy);


/***/ }),

/***/ "./src/Strategy/SumPrinter.ts":
/*!************************************!*\
  !*** ./src/Strategy/SumPrinter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 4강 - Strategy
// 유튜브 참고 URL - 
// https://youtu.be/TiHzYc8I3Kk?si=Cw74ax8h68UgaEsQ
var SumPrinter = /** @class */ (function () {
    function SumPrinter() {
    }
    /// <summary>
    /// SumStrategy 클래스 방식으로 1부터 어떤 수(N) 까지 총합을 출력
    /// 첫 번째 인자 - SumStrategy 인터페이스 
    /// 두 번째 인자 - 1 부터 어떤 수 까지 합을 계산하기 위한 어떤 수의 값(N)
    /// 세 번째 인자 - 1 부터 어떤 수 까지 합을 계산한 결과를 출력할 dom 객체
    /// </summary>
    SumPrinter.prototype.print = function (strategy, N, domOutput) {
        var value = strategy.get(N); // 1. 1부터 N까지의 합을 계산
        domOutput.innerHTML = "1~".concat(N, "\uAE4C\uC9C0\uC758 \uCD1D\uD569 = ").concat(value); // 2. 계산 결과를 domOutput 인자의 innerHtml에 지정
    };
    return SumPrinter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumPrinter);


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
  !*** ./src/Strategy/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SumPrinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SumPrinter */ "./src/Strategy/SumPrinter.ts");
/* harmony import */ var _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GaussSumStrategy */ "./src/Strategy/GaussSumStrategy.ts");
/* harmony import */ var _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoopSumStrategy */ "./src/Strategy/LoopSumStrategy.ts");
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 4강 - Strategy
// 유튜브 참고 URL - 
// https://youtu.be/TiHzYc8I3Kk?si=Cw74ax8h68UgaEsQ
// 폴더 "Strategy"의 시작점이 되는 index.ts 소스파일
// Strategy(전략 알고리즘) 디자인 패턴 정리 1
// 전략 알고리즘이란 어떤 문제를 해결하는 알고리즘을 의미한다.
// Strategy(전략 알고리즘) 디자인 패턴이란 어떤 하나의 기능을 구성하는 부분을
// 실행 중에 다른 것으로 효과적으로 변경할 수 있는 답안을 제공한다.
// 즉 필요할 경우 실행 중이라도 Strategy 즉 전략 또는 알고리즘을 바꿀수 있는 패턴이다.
// 예를들어 어떤 하나의 기능이 있고, 이 기능을 실행하기 위해서는
// 단계 1 부터 단계 n까지 순서대로 실행 되어야 한다.
// 이 때, 이 중 단계 2에 대해서는 어떠한 이유로 실행 중에 동적으로 
// 변경될 필요가 있을 때, Strategy 패턴을 적용해서 효과적으로 어떤 하나의 기능을 구현할 수 있다.
// Strategy(전략 알고리즘) 디자인 패턴 정리 2 
// Strategy 패턴은 어떤 기능에 대한 특정 알고리즘을 느슨하게 결합시켜주는 패턴이다.
// 느슨하게 결합시켜 준다는 의미는 예를들어 SumPrinter 클래스가 
// 구체적으로 구현된 LoopSumStrategy, GaussSumStrategy 클래스와 직접적인 관계를 맺지 않고
// 오직 SumStrategy 인터페이스에 대한 결합만을 갖고 있다는 것을 의미한다.
// 어떤 알고리즘이 느슨하게 결합되면 추후 더 나은 알고리즘으로 쉽게 변경할 수 있을 뿐만 아니라
// 프로그램이 실행 중에 상황에 맞는 알고리즘으로 쉽게 변경할 수 있다.
// 또한 기존의 알고리즘을 유지하면서 새로운 알고리즘을 효과적으로 추가할 수 있다.
// SumPrinter 클래스 - 1부터 어떤 수(N) 까지 총합을 출력해 주는 클래스 
//                     SumStrategy 인터페이스만을 사용해서 코드가 작성되므로, LoopSumStrategy, GaussSumStrategy 클래스를 알 필요가 없다.
//                     이로 인해서 추후에 총합을 계산하는 방법인 다른 알고리즘이 추가되어도 기존의 SumPrinter 클래스의 코드를 변경할 필요가 없다.
// SumStrategy 인터페이스 - 1부터 어떤 수 까지의 총합을 SumPrinter 클래스로 전달해주는 인터페이스
// LoopSumStrategy, GaussSumStrategy 클래스 - SumStrategy 인터페이스를 상속 받아서 1부터 어떤 수(N)까지 총합을 얻는 구체적인 코드가 작성되고 실행한다.



// 1. SumPrinter 클래스 객체 printer 생성
var printer = new _SumPrinter__WEBPACK_IMPORTED_MODULE_0__["default"]();
// 2. 1부터 어떤 수(N) 까지 합을 계산한 결과를 출력하기 위한 dom 객체 2개(dom1, dom2) 추가 
var dom1 = document.createElement("h1");
document.body.append(dom1); // document.body에 dom 객체 추가(append)
var dom2 = document.createElement("h1");
document.body.append(dom2); // document.body에 dom 객체 추가(append)
// 아래 3, 4번 처럼 하나의 기능(1부터 어떤 수(N) 까지 합을 계산한 결과를 출력)에 대해서 
// Strategy(전략 알고리즘) 디자인 패턴을 적용하면 
// 서로 다른 방식의 알고리즘(LoopSumStrategy 클래스 방식, GaussSumStrategy 클래스 방식)을 실행 중에 변경할 수 있다.
// 3. LoopSumStrategy 클래스 방식으로 for 반복문으로 1부터 어떤 수(N)까지 합을 구하고
//    1번의 SumPrinter 클래스 객체 printer의 메서드 print 사용해서 웹 브라우저 화면에 dom1 객체에 계산한 결과 출력
// LoopSumStrategy 클래스 방식 
// 어떤 수(N)를 100으로 지정해서 1부터 100까지의 총합 계산 및 웹 브라우저 화면에 dom1 객체에 계산한 결과 출력 
printer.print(new _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_2__["default"](), 100, dom1);
// 4. GaussSumStrategy 클래스 방식으로 1부터 어떤 수(N)까지 합을 구하고
//    1번의 SumPrinter 클래스 객체 printer의 메서드 print 사용해서 웹 브라우저 화면에 dom2 객체에 계산한 결과 출력
// GaussSumStrategy 클래스 방식
// 어떤 수(N)를 100으로 지정해서 1부터 100까지의 총합 계산 및 웹 브라우저 화면에 dom2 객체에 계산한 결과 출력
printer.print(new _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_1__["default"](), 100, dom2);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFHLG1DQUFtQztBQUVoRSx5REFBeUQ7QUFDekQsa0NBQWtDO0FBQ2xDLG1GQUFtRjtBQUVuRiw2REFBNkQ7QUFDN0QsaUZBQWlGO0FBRWpGLDBCQUEwQjtBQUMxQix3RUFBd0U7QUFDeEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLHdEQUFlLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0FBRy9DLG9EQUFvRDtBQUNwRCxpRkFBaUY7QUFFakYsMEJBQTBCO0FBQzFCLHVFQUF1RTtBQUN2RSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUkseURBQWdCLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vLi9zcmMvU3RyYXRlZ3kvR2F1c3NTdW1TdHJhdGVneS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi8uL3NyYy9TdHJhdGVneS9Mb29wU3VtU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vLi9zcmMvU3RyYXRlZ3kvU3VtUHJpbnRlci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRkZXNpZ25wYXR0ZXJuLy4vc3JjL1N0cmF0ZWd5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtUeXBlU2NyaXB066GcIOuztOuKlCBHb0bsnZgg65SU7J6Q7J24IO2MqO2EtF0g7Iqk7YSw65SUXHJcbi8vIDTqsJUgLSBTdHJhdGVneVxyXG4vLyDsnKDtipzruIwg7LC46rOgIFVSTCAtIFxyXG4vLyBodHRwczovL3lvdXR1LmJlL1RpSHpZYzhJM0trP3NpPUN3NzRheDhoNjhVZ2FFc1FcclxuXHJcbi8vIEdhdXNzU3VtU3RyYXRlZ3kg7YG0656Y7IqkIC0gU3VtU3RyYXRlZ3kg7J247YSw7Y6Y7J207Iqk66W8IOyDgeyGjSDrsJvslYTshJwgMeu2gO2EsCDslrTrlqQg7IiYKE4p6rmM7KeAIOy0ne2VqeydhCDslrvripQg6rWs7LK07KCB7J24IOy9lOuTnOqwgCDsnpHshLHrkJjqs6Ag7Iuk7ZaJ7ZWc64ukLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAg7ZW064u5IO2BtOuemOyKpOuKlCBMb29wU3VtU3RyYXRlZ3kg7YG0656Y7Iqk7JmAIOuLpOultOqyjCDqsIDsmrDsiqQg6rO17Iud7J2EIOydtOyaqe2VtOyEnCAx67aA7YSwIOyWtOuWpCDsiJgoTinquYzsp4Ag7ZWp7J2EIOu5oOultOqyjCDqs4TsgrDtlZjripQg7KCE65617J2EIOyCrOyaqe2VnOuLpC5cclxuXHJcbmltcG9ydCBTdW1TdHJhdGVneSBmcm9tIFwiLi9TdW1TdHJhdGVneVwiOyAgIC8vIFN1bVN0cmF0ZWd5IOyduO2EsO2OmOydtOyKpCBpbXBvcnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhdXNzU3VtU3RyYXRlZ3kgaW1wbGVtZW50cyBTdW1TdHJhdGVneSB7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIDHrtoDthLAgTuq5jOyngCDtlanqs4Trpbwg7Ja76riwIOychO2VnCBcclxuICAgIC8vLyBnZXQg66mU7ISc65OcIOyLpOygnCDqtaztmITrtoBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBnZXQoTjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyDqsIDsmrDsiqQg6rO17Iud7J2EIOydtOyaqe2VtOyEnCAx67aA7YSwIE7quYzsp4Ag7ZWp7J2EIOu5oOultOqyjCDqs4TsgrBcclxuICAgICAgICByZXR1cm4gTiAqIChOKzEpIC8gMlxyXG4gICAgfVxyXG5cclxufSIsIi8vIFtUeXBlU2NyaXB066GcIOuztOuKlCBHb0bsnZgg65SU7J6Q7J24IO2MqO2EtF0g7Iqk7YSw65SUXHJcbi8vIDTqsJUgLSBTdHJhdGVneVxyXG4vLyDsnKDtipzruIwg7LC46rOgIFVSTCAtIFxyXG4vLyBodHRwczovL3lvdXR1LmJlL1RpSHpZYzhJM0trP3NpPUN3NzRheDhoNjhVZ2FFc1FcclxuXHJcbi8vIExvb3BTdW1TdHJhdGVneSDtgbTrnpjsiqQgLSBTdW1TdHJhdGVneSDsnbjthLDtjpjsnbTsiqTrpbwg7IOB7IaNIOuwm+yVhOyEnCAx67aA7YSwIOyWtOuWpCDsiJjquYzsp4Ag7LSd7ZWp7J2EIOyWu+uKlCDqtazssrTsoIHsnbgg7L2U65Oc6rCAIOyekeyEseuQmOqzoCDsi6TtlontlZzri6QuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICDtlbTri7kg7YG0656Y7Iqk64qUIGZvciDrsJjrs7XrrLgg7J207Jqp7ZW07IScIDHrtoDthLAg7Ja065akIOyImChOKeq5jOyngCDtlansnYQg6rOE7IKw7ZWY64qUIOyghOueteydhCDsgqzsmqntlZzri6QuXHJcblxyXG5pbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSBcIi4vU3VtU3RyYXRlZ3lcIjsgICAvLyBTdW1TdHJhdGVneSDsnbjthLDtjpjsnbTsiqQgaW1wb3J0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29wU3VtU3RyYXRlZ3kgaW1wbGVtZW50cyBTdW1TdHJhdGVneSB7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIDHrtoDthLAgTuq5jOyngCDtlanqs4Trpbwg7Ja76riwIOychO2VnCBcclxuICAgIC8vLyBnZXQg66mU7ISc65OcIOyLpOygnCDqtaztmITrtoBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBnZXQoTjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3VtID0gMFxyXG4gICAgICAgIC8vIGZvciDrsJjrs7XrrLgg7J207Jqp7ZW07IScIDHrtoDthLAgTuq5jOyngCDtlakg6rWs7ZWY6riwIFxyXG4gICAgICAgIGZvcihsZXQgaT0xOyBpPD1OOyBpKyspIHN1bSArPSBpXHJcbiAgICAgICAgcmV0dXJuIHN1bVxyXG4gICAgfVxyXG5cclxufSIsIi8vIFtUeXBlU2NyaXB066GcIOuztOuKlCBHb0bsnZgg65SU7J6Q7J24IO2MqO2EtF0g7Iqk7YSw65SUXHJcbi8vIDTqsJUgLSBTdHJhdGVneVxyXG4vLyDsnKDtipzruIwg7LC46rOgIFVSTCAtIFxyXG4vLyBodHRwczovL3lvdXR1LmJlL1RpSHpZYzhJM0trP3NpPUN3NzRheDhoNjhVZ2FFc1FcclxuXHJcbi8vIFN1bVByaW50ZXIg7YG0656Y7IqkIC0gMeu2gO2EsCDslrTrlqQg7IiYKE4pIOq5jOyngCDstJ3tlansnYQg7Lac66Cl7ZW0IOyjvOuKlCDtgbTrnpjsiqQgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgU3VtU3RyYXRlZ3kg7J247YSw7Y6Y7J207Iqk66eM7J2EIOyCrOyaqe2VtOyEnCDsvZTrk5zqsIAg7J6R7ISx65CY66+A66GcLCBMb29wU3VtU3RyYXRlZ3ksIEdhdXNzU3VtU3RyYXRlZ3kg7YG0656Y7Iqk66W8IOyVjCDtlYTsmpTqsIAg7JeG64ukLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIOydtOuhnCDsnbjtlbTshJwg7LaU7ZuE7JeQIOy0ne2VqeydhCDqs4TsgrDtlZjripQg67Cp67KV7J24IOuLpOuluCDslYzqs6DrpqzsppjsnbQg7LaU6rCA65CY7Ja064+EIOq4sOyhtOydmCBTdW1QcmludGVyIO2BtOuemOyKpOydmCDsvZTrk5zrpbwg67OA6rK97ZWgIO2VhOyalOqwgCDsl4bri6QuXHJcbi8vICAgICAgICAgICAgICAgICAgICAg7ZW064u5IO2BtOuemOyKpOuKlCAx67aA7YSwIOyWtOuWpCDsiJgoTikg6rmM7KeAIOy0ne2VqeydhCDstpzroKXtlZjripQg66mU7ISc65OcIHByaW5066W8IOygnOqzte2VnOuLpC5cclxuXHJcblxyXG5pbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSBcIi4vU3VtU3RyYXRlZ3lcIjsgICAgICAgICAgICAgIC8vIFN1bVN0cmF0ZWd5IOyduO2EsO2OmOydtOyKpCBpbXBvcnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bVByaW50ZXIge1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBTdW1TdHJhdGVneSDtgbTrnpjsiqQg67Cp7Iud7Jy866GcIDHrtoDthLAg7Ja065akIOyImChOKSDquYzsp4Ag7LSd7ZWp7J2EIOy2nOugpVxyXG4gICAgLy8vIOyyqyDrsojsp7gg7J247J6QIC0gU3VtU3RyYXRlZ3kg7J247YSw7Y6Y7J207IqkIFxyXG4gICAgLy8vIOuRkCDrsojsp7gg7J247J6QIC0gMSDrtoDthLAg7Ja065akIOyImCDquYzsp4Ag7ZWp7J2EIOqzhOyCsO2VmOq4sCDsnITtlZwg7Ja065akIOyImOydmCDqsJIoTilcclxuICAgIC8vLyDshLgg67KI7Ke4IOyduOyekCAtIDEg67aA7YSwIOyWtOuWpCDsiJgg6rmM7KeAIO2VqeydhCDqs4TsgrDtlZwg6rKw6rO866W8IOy2nOugpe2VoCBkb20g6rCd7LK0XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHJpbnQoc3RyYXRlZ3k6IFN1bVN0cmF0ZWd5LCBOOiBudW1iZXIsIGRvbU91dHB1dDogRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3RyYXRlZ3kuZ2V0KE4pICAgLy8gMS4gMeu2gO2EsCBO6rmM7KeA7J2YIO2VqeydhCDqs4TsgrBcclxuICAgICAgICBkb21PdXRwdXQuaW5uZXJIVE1MID0gYDF+JHtOfeq5jOyngOydmCDstJ3tlakgPSAke3ZhbHVlfWAgLy8gMi4g6rOE7IKwIOqysOqzvOulvCBkb21PdXRwdXQg7J247J6Q7J2YIGlubmVySHRtbOyXkCDsp4DsoJVcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gW1R5cGVTY3JpcHTroZwg67O064qUIEdvRuydmCDrlJTsnpDsnbgg7Yyo7YS0XSDsiqTthLDrlJRcclxuLy8gNOqwlSAtIFN0cmF0ZWd5XHJcbi8vIOycoO2KnOu4jCDssLjqs6AgVVJMIC0gXHJcbi8vIGh0dHBzOi8veW91dHUuYmUvVGlIelljOEkzS2s/c2k9Q3c3NGF4OGg2OFVnYUVzUVxyXG5cclxuLy8g7Y+0642UIFwiU3RyYXRlZ3lcIuydmCDsi5zsnpHsoJDsnbQg65CY64qUIGluZGV4LnRzIOyGjOyKpO2MjOydvFxyXG5cclxuLy8gU3RyYXRlZ3ko7KCE6561IOyVjOqzoOumrOymmCkg65SU7J6Q7J24IO2MqO2EtCDsoJXrpqwgMVxyXG4vLyDsoITrnrUg7JWM6rOg66as7KaY7J20656AIOyWtOuWpCDrrLjsoJzrpbwg7ZW06rKw7ZWY64qUIOyVjOqzoOumrOymmOydhCDsnZjrr7jtlZzri6QuXHJcbi8vIFN0cmF0ZWd5KOyghOuetSDslYzqs6DrpqzsppgpIOuUlOyekOyduCDtjKjthLTsnbTrnoAg7Ja065akIO2VmOuCmOydmCDquLDriqXsnYQg6rWs7ISx7ZWY64qUIOu2gOu2hOydhFxyXG4vLyDsi6Ttlokg7KSR7JeQIOuLpOuluCDqsoPsnLzroZwg7Zqo6rO87KCB7Jy866GcIOuzgOqyve2VoCDsiJgg7J6I64qUIOuLteyViOydhCDsoJzqs7XtlZzri6QuXHJcbi8vIOymiSDtlYTsmpTtlaAg6rK97JqwIOyLpO2WiSDspJHsnbTrnbzrj4QgU3RyYXRlZ3kg7KaJIOyghOuetSDrmJDripQg7JWM6rOg66as7KaY7J2EIOuwlOq/gOyImCDsnojripQg7Yyo7YS07J2064ukLlxyXG4vLyDsmIjrpbzrk6TslrQg7Ja065akIO2VmOuCmOydmCDquLDriqXsnbQg7J6I6rOgLCDsnbQg6riw64ql7J2EIOyLpO2Wie2VmOq4sCDsnITtlbTshJzripRcclxuLy8g64uo6rOEIDEg67aA7YSwIOuLqOqzhCBu6rmM7KeAIOyInOyEnOuMgOuhnCDsi6Ttlokg65CY7Ja07JW8IO2VnOuLpC5cclxuLy8g7J20IOuVjCwg7J20IOykkSDri6jqs4QgMuyXkCDrjIDtlbTshJzripQg7Ja065ag7ZWcIOydtOycoOuhnCDsi6Ttlokg7KSR7JeQIOuPmeyggeycvOuhnCBcclxuLy8g67OA6rK965CgIO2VhOyalOqwgCDsnojsnYQg65WMLCBTdHJhdGVneSDtjKjthLTsnYQg7KCB7Jqp7ZW07IScIO2aqOqzvOyggeycvOuhnCDslrTrlqQg7ZWY64KY7J2YIOq4sOuKpeydhCDqtaztmITtlaAg7IiYIOyeiOuLpC5cclxuXHJcblxyXG4vLyBTdHJhdGVneSjsoITrnrUg7JWM6rOg66as7KaYKSDrlJTsnpDsnbgg7Yyo7YS0IOygleumrCAyIFxyXG4vLyBTdHJhdGVneSDtjKjthLTsnYAg7Ja065akIOq4sOuKpeyXkCDrjIDtlZwg7Yq57KCVIOyVjOqzoOumrOymmOydhCDripDsiqjtlZjqsowg6rKw7ZWp7Iuc7Lyc7KO864qUIO2MqO2EtOydtOuLpC5cclxuLy8g64qQ7Iqo7ZWY6rKMIOqysO2VqeyLnOy8nCDspIDri6TripQg7J2Y66+464qUIOyYiOulvOuTpOyWtCBTdW1QcmludGVyIO2BtOuemOyKpOqwgCBcclxuLy8g6rWs7LK07KCB7Jy866GcIOq1rO2YhOuQnCBMb29wU3VtU3RyYXRlZ3ksIEdhdXNzU3VtU3RyYXRlZ3kg7YG0656Y7Iqk7JmAIOyngeygkeyggeyduCDqtIDqs4Trpbwg66e67KeAIOyViuqzoFxyXG4vLyDsmKTsp4EgU3VtU3RyYXRlZ3kg7J247YSw7Y6Y7J207Iqk7JeQIOuMgO2VnCDqsrDtlanrp4zsnYQg6rCW6rOgIOyeiOuLpOuKlCDqsoPsnYQg7J2Y66+47ZWc64ukLlxyXG4vLyDslrTrlqQg7JWM6rOg66as7KaY7J20IOuKkOyKqO2VmOqyjCDqsrDtlanrkJjrqbQg7LaU7ZuEIOuNlCDrgpjsnYAg7JWM6rOg66as7KaY7Jy866GcIOyJveqyjCDrs4Dqsr3tlaAg7IiYIOyeiOydhCDrv5Drp4wg7JWE64uI6528XHJcbi8vIO2UhOuhnOq3uOueqOydtCDsi6Ttlokg7KSR7JeQIOyDge2ZqeyXkCDrp57ripQg7JWM6rOg66as7KaY7Jy866GcIOyJveqyjCDrs4Dqsr3tlaAg7IiYIOyeiOuLpC5cclxuLy8g65iQ7ZWcIOq4sOyhtOydmCDslYzqs6DrpqzsppjsnYQg7Jyg7KeA7ZWY66m07IScIOyDiOuhnOyatCDslYzqs6DrpqzsppjsnYQg7Zqo6rO87KCB7Jy866GcIOy2lOqwgO2VoCDsiJgg7J6I64ukLlxyXG5cclxuXHJcblxyXG4vLyBTdW1QcmludGVyIO2BtOuemOyKpCAtIDHrtoDthLAg7Ja065akIOyImChOKSDquYzsp4Ag7LSd7ZWp7J2EIOy2nOugpe2VtCDso7zripQg7YG0656Y7IqkIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFN1bVN0cmF0ZWd5IOyduO2EsO2OmOydtOyKpOunjOydhCDsgqzsmqntlbTshJwg7L2U65Oc6rCAIOyekeyEseuQmOuvgOuhnCwgTG9vcFN1bVN0cmF0ZWd5LCBHYXVzc1N1bVN0cmF0ZWd5IO2BtOuemOyKpOulvCDslYwg7ZWE7JqU6rCAIOyXhuuLpC5cclxuLy8gICAgICAgICAgICAgICAgICAgICDsnbTroZwg7J247ZW07IScIOy2lO2bhOyXkCDstJ3tlansnYQg6rOE7IKw7ZWY64qUIOuwqeuyleyduCDri6Trpbgg7JWM6rOg66as7KaY7J20IOy2lOqwgOuQmOyWtOuPhCDquLDsobTsnZggU3VtUHJpbnRlciDtgbTrnpjsiqTsnZgg7L2U65Oc66W8IOuzgOqyve2VoCDtlYTsmpTqsIAg7JeG64ukLlxyXG5cclxuLy8gU3VtU3RyYXRlZ3kg7J247YSw7Y6Y7J207IqkIC0gMeu2gO2EsCDslrTrlqQg7IiYIOq5jOyngOydmCDstJ3tlansnYQgU3VtUHJpbnRlciDtgbTrnpjsiqTroZwg7KCE64us7ZW07KO864qUIOyduO2EsO2OmOydtOyKpFxyXG4vLyBMb29wU3VtU3RyYXRlZ3ksIEdhdXNzU3VtU3RyYXRlZ3kg7YG0656Y7IqkIC0gU3VtU3RyYXRlZ3kg7J247YSw7Y6Y7J207Iqk66W8IOyDgeyGjSDrsJvslYTshJwgMeu2gO2EsCDslrTrlqQg7IiYKE4p6rmM7KeAIOy0ne2VqeydhCDslrvripQg6rWs7LK07KCB7J24IOy9lOuTnOqwgCDsnpHshLHrkJjqs6Ag7Iuk7ZaJ7ZWc64ukLlxyXG5cclxuaW1wb3J0IFN1bVByaW50ZXIgZnJvbSBcIi4vU3VtUHJpbnRlclwiO1xyXG5pbXBvcnQgR2F1c3NTdW1TdHJhdGVneSBmcm9tIFwiLi9HYXVzc1N1bVN0cmF0ZWd5XCI7XHJcbmltcG9ydCBMb29wU3VtU3RyYXRlZ3kgZnJvbSBcIi4vTG9vcFN1bVN0cmF0ZWd5XCI7XHJcblxyXG4vLyAxLiBTdW1QcmludGVyIO2BtOuemOyKpCDqsJ3ssrQgcHJpbnRlciDsg53shLFcclxuY29uc3QgcHJpbnRlciA9IG5ldyBTdW1QcmludGVyKCkgXHJcblxyXG4vLyAyLiAx67aA7YSwIOyWtOuWpCDsiJgoTikg6rmM7KeAIO2VqeydhCDqs4TsgrDtlZwg6rKw6rO866W8IOy2nOugpe2VmOq4sCDsnITtlZwgZG9tIOqwneyytCAy6rCcKGRvbTEsIGRvbTIpIOy2lOqwgCBcclxuY29uc3QgZG9tMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChkb20xKSAgIC8vIGRvY3VtZW50LmJvZHnsl5AgZG9tIOqwneyytCDstpTqsIAoYXBwZW5kKVxyXG5cclxuY29uc3QgZG9tMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChkb20yKSAgIC8vIGRvY3VtZW50LmJvZHnsl5AgZG9tIOqwneyytCDstpTqsIAoYXBwZW5kKVxyXG5cclxuLy8g7JWE656YIDMsIDTrsogg7LKY65+8IO2VmOuCmOydmCDquLDriqUoMeu2gO2EsCDslrTrlqQg7IiYKE4pIOq5jOyngCDtlansnYQg6rOE7IKw7ZWcIOqysOqzvOulvCDstpzroKUp7JeQIOuMgO2VtOyEnCBcclxuLy8gU3RyYXRlZ3ko7KCE6561IOyVjOqzoOumrOymmCkg65SU7J6Q7J24IO2MqO2EtOydhCDsoIHsmqntlZjrqbQgXHJcbi8vIOyEnOuhnCDri6Trpbgg67Cp7Iud7J2YIOyVjOqzoOumrOymmChMb29wU3VtU3RyYXRlZ3kg7YG0656Y7IqkIOuwqeyLnSwgR2F1c3NTdW1TdHJhdGVneSDtgbTrnpjsiqQg67Cp7IudKeydhCDsi6Ttlokg7KSR7JeQIOuzgOqyve2VoCDsiJgg7J6I64ukLlxyXG5cclxuLy8gMy4gTG9vcFN1bVN0cmF0ZWd5IO2BtOuemOyKpCDrsKnsi53snLzroZwgZm9yIOuwmOuzteusuOycvOuhnCAx67aA7YSwIOyWtOuWpCDsiJgoTinquYzsp4Ag7ZWp7J2EIOq1rO2VmOqzoFxyXG4vLyAgICAx67KI7J2YIFN1bVByaW50ZXIg7YG0656Y7IqkIOqwneyytCBwcmludGVy7J2YIOuplOyEnOuTnCBwcmludCDsgqzsmqntlbTshJwg7Ju5IOu4jOudvOyasOyggCDtmZTrqbTsl5AgZG9tMSDqsJ3ssrTsl5Ag6rOE7IKw7ZWcIOqysOqzvCDstpzroKVcclxuXHJcbi8vIExvb3BTdW1TdHJhdGVneSDtgbTrnpjsiqQg67Cp7IudIFxyXG4vLyDslrTrlqQg7IiYKE4p66W8IDEwMOycvOuhnCDsp4DsoJXtlbTshJwgMeu2gO2EsCAxMDDquYzsp4DsnZgg7LSd7ZWpIOqzhOyCsCDrsI8g7Ju5IOu4jOudvOyasOyggCDtmZTrqbTsl5AgZG9tMSDqsJ3ssrTsl5Ag6rOE7IKw7ZWcIOqysOqzvCDstpzroKUgXHJcbnByaW50ZXIucHJpbnQobmV3IExvb3BTdW1TdHJhdGVneSgpLCAxMDAsIGRvbTEpXHJcblxyXG5cclxuLy8gNC4gR2F1c3NTdW1TdHJhdGVneSDtgbTrnpjsiqQg67Cp7Iud7Jy866GcIDHrtoDthLAg7Ja065akIOyImChOKeq5jOyngCDtlansnYQg6rWs7ZWY6rOgXHJcbi8vICAgIDHrsojsnZggU3VtUHJpbnRlciDtgbTrnpjsiqQg6rCd7LK0IHByaW50ZXLsnZgg66mU7ISc65OcIHByaW50IOyCrOyaqe2VtOyEnCDsm7kg67iM65287Jqw7KCAIO2ZlOuptOyXkCBkb20yIOqwneyytOyXkCDqs4TsgrDtlZwg6rKw6rO8IOy2nOugpVxyXG5cclxuLy8gR2F1c3NTdW1TdHJhdGVneSDtgbTrnpjsiqQg67Cp7IudXHJcbi8vIOyWtOuWpCDsiJgoTinrpbwgMTAw7Jy866GcIOyngOygle2VtOyEnCAx67aA7YSwIDEwMOq5jOyngOydmCDstJ3tlakg6rOE7IKwIOuwjyDsm7kg67iM65287Jqw7KCAIO2ZlOuptOyXkCBkb20yIOqwneyytOyXkCDqs4TsgrDtlZwg6rKw6rO8IOy2nOugpVxyXG5wcmludGVyLnByaW50KG5ldyBHYXVzc1N1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMilcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9