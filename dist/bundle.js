/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Template/Article.ts":
/*!*********************************!*\
  !*** ./src/Template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 5강 - Template Method
// 유튜브 참고 URL - 
// https://youtu.be/vfo-L0q2k2w?si=sDtg0C9brHpAJONo
// Article 클래스 - 템플릿 선언부(추상 클래스(abstract) DisplayArticleTemplate)와 템플릿 구현부(클래스 SimpleDisplayArticle, EditableDisplayArticle)에서
//                  처리할 데이터(또는 출력할 데이터)를 얻을 수 있는 클래스이다.
//                  Article 클래스는 제목(title), 내용(content) 그리고 밑바닥 글(footer) 필드로 구성된다.
//                  생성자(constructor)를 통해서 위의 3가지 필드(제목(title), 내용(content) 그리고 밑바닥 글(footer))를 private 접근자로 추가한다.
var Article = /** @class */ (function () {
    // 생성자(constructor)를 통해서 위의 3가지 필드(제목(title), 내용(content) 그리고 밑바닥 글(footer))를 private 접근자로 추가
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    /// <summary>
    /// 필드 - 제목(title) 가져오기
    /// </summary>
    Article.prototype.getTitle = function () {
        return this.title;
    };
    /// <summary>
    /// 필드 - 내용(content) 가져오기
    /// </summary>
    Article.prototype.getContent = function () {
        return this.content;
    };
    /// <summary>
    /// 필드 - 밑바닥 글(footer) 가져오기
    /// </summary>
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/Template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/Template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 5강 - Template Method
// 유튜브 참고 URL - 
// https://youtu.be/vfo-L0q2k2w?si=sDtg0C9brHpAJONo
// 템플릿 선언부 - 추상 클래스(abstract) DisplayArticleTemplate
//                해당 기능을 실행할 때 필요한 각 단계를 정해진 순서대로 실행해 주는 추상 클래스(abstract)이다.
//                즉, 해당 추상 클래스(abstract)는 각 단계(1, 2, 3)에 해당하는 메서드들을 순서대로 호출만 해주는 템플릿 메서드를 구현한 추상 클래스(abstract)이다.
//                추상 클래스(abstract)인 이유는 각 단계(1, 2, 3)에 해당하는 메서드들은 선언만 되어 있을 뿐 실제로는 구현되지 않기 때문이다.
//                추상 메서드는 title(), content()로 선언되어 있다.
// 추상 클래스(abstract) DisplayArticleTemplate란? 
// 각 단계의 실행 순서에 대한 메서드들을 순서대로 호출만 해주는 템플릿 메서드를 제공하는 추상 클래스(abstract)이다.
var DisplayArticleTemplate = /** @class */ (function () {
    // 처리할(또는 출력할) 데이터에 대한 Article 클래스 객체 "article"를 protected 접근자로 지정한 필드로 구현 
    // protected 접근자로 지정한 이유는
    // 추상 클래스(abstract) DisplayArticleTemplate를 상속받는 자식 클래스(파생 클래스 - SimpleDisplayArticle, EditableDisplayArticle)에서
    // 접근할 수 있도록 하기 위해서이다.
    // 생성자(constructor)를 통해서 필드(Article 클래스 객체 "article")를 protected 접근자로 추가
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        // 각 단계(1, 2, 3)를 정해진 순서대로 호출해주는 템플릿 메서드 "displayHtml" 추가 
        // 해당 템플릿 메서드 "displayHtml"를 readonly와 함께 메서드에 대한 정의를 애로우 함수 문법(() => { ... })으로 정의해서 
        // 추상 클래스(abstract) DisplayArticleTemplate를 상속받는 자식 클래스(파생 클래스 - SimpleDisplayArticle, EditableDisplayArticle)에서는
        // 해당 템플릿 메서드 "displayHtml"를 재정의할 수 없도록 한다.
        // 이렇게 자식 클래스(파생 클래스)에서 코드를 변경하지 못하도록 막으면 좀 더 코드가 견고해지지만
        // 이를 지원하지 않는 언어에서는 이렇게 하지 않아도 된다.
        this.displayHtml = function () {
            // 단계 1 - 메서드 titleHtml() 호출 
            // 단계 2 - 메서드 contentHtml() 호출
            // 단계 3 - 메서드 footerHtml() 호출 
            return "\n            ".concat(_this.titleHtml(), "    \n            ").concat(_this.contentHtml(), "\n            ").concat(_this.footerHtml(), "\n        ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/Template/EditableDisplayArticle.ts":
/*!************************************************!*\
  !*** ./src/Template/EditableDisplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/Template/DisplayArticleTemplate.ts");
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 5강 - Template Method
// 유튜브 참고 URL - 
// https://youtu.be/vfo-L0q2k2w?si=sDtg0C9brHpAJONo
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// 템플릿 구현부 - 템플릿 선언부 추상 클래스(abstract - DisplayArticleTemplate) 상속 받은 클래스 SimpleDisplayArticle, EditableDisplayArticle이다.
//                클래스 SimpleDisplayArticle, EditableDisplayArticle는 추상 클래스(abstract - DisplayArticleTemplate)를 상속 받아서
//                각 단계에 대한 추상 메서드 titleHtml(), contentHtml(), footerHtml()를 구체적으로 구현한다.
//                이 두 클래스는 각각 2개의 상황에 대한 구체적인 처리에 해당된다.
var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    // 생성자 constructor 구현
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this; // super() - 부모 클래스(추상 클래스(abstract - DisplayArticleTemplate))의 생성자 호출 
    }
    // Article 클래스 객체의 구성값들(제목(title), 내용(content), 밑바닥 글(footer))을 그 목적에 맞게
    // Html 코드(태그)로 변환해서 해당 문자열로 출력해주기 위해 
    // 아래 메서드 3가지 (titleHtml(), contentHtml(), footerHtml()) 구현 
    // 추상 클래스(abstract - DisplayArticleTemplate)를 상속 받는
    // 두 자식 클래스(파생 클래스 - SimpleDisplayArticle, EditableDisplayArticle)의 차이는
    // 클래스 EditableDisplayArticle는 아래 메서드 3가지 (titleHtml(), contentHtml(), footerHtml()) 실행시 
    // 태그 <input>, <textarea>를 이용해서 편집을 위한 상황에서 사용된다.
    /// <summary>
    /// 제목(title)에 해당하는 Html 코드(태그) 변환 및 문자열 출력 
    /// </summary>
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value='".concat(this.article.getTitle(), "' /></div>");
    };
    /// <summary>
    /// 내용(content)에 해당하는 Html 코드(태그) 변환 및 문자열 출력 
    /// </summary>
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "".concat(item, "\n"); });
        return "<span>\uB0B4\uC6A9</span><br/><textarea cols='50' rows='5'>".concat(items.join(''), "</textarea>");
    };
    /// <summary>
    /// 밑바닥 글(footer)에 해당하는 Html 코드(태그) 변환 및 문자열 출력 
    /// </summary>
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span><input value='".concat(this.article.getFooter(), "'/></div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/Template/SimpleDisplayArticle.ts":
/*!**********************************************!*\
  !*** ./src/Template/SimpleDisplayArticle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/Template/DisplayArticleTemplate.ts");
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 5강 - Template Method
// 유튜브 참고 URL - 
// https://youtu.be/vfo-L0q2k2w?si=sDtg0C9brHpAJONo
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// 템플릿 구현부 - 템플릿 선언부 추상 클래스(abstract - DisplayArticleTemplate) 상속 받은 클래스 SimpleDisplayArticle, EditableDisplayArticle이다.
//                클래스 SimpleDisplayArticle, EditableDisplayArticle는 추상 클래스(abstract - DisplayArticleTemplate)를 상속 받아서
//                각 단계에 대한 추상 메서드 titleHtml(), contentHtml(), footerHtml()를 구체적으로 구현한다.
//                이 두 클래스는 각각 2개의 상황에 대한 구체적인 처리에 해당된다.
var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    // 생성자 constructor 구현
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this; // super() - 부모 클래스(추상 클래스(abstract - DisplayArticleTemplate))의 생성자 호출 
    }
    // Article 클래스 객체의 구성값들(제목(title), 내용(content), 밑바닥 글(footer))을 그 목적에 맞게
    // Html 코드(태그)로 변환해서 해당 문자열로 출력해주기 위해 
    // 아래 메서드 3가지 (titleHtml(), contentHtml(), footerHtml()) 구현 
    // 추상 클래스(abstract - DisplayArticleTemplate)를 상속 받는
    // 두 자식 클래스(파생 클래스 - SimpleDisplayArticle, EditableDisplayArticle)의 차이는
    // 클래스 SimpleDisplayArticle는 아래 메서드 3가지 (titleHtml(), contentHtml(), footerHtml()) 실행시 
    // 태그 <h1>, <ul>, <h3>를 이용해서 데이터 출력을 하기 위한 상황에서 사용된다.
    /// <summary>
    /// 제목(title)에 해당하는 Html 코드(태그) 변환 및 문자열 출력 
    /// </summary>
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    /// <summary>
    /// 내용(content)에 해당하는 Html 코드(태그) 변환 및 문자열 출력 
    /// </summary>
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        // 불 필요한 기호 콤마(,)를 없애기 위해서 메서드 join 호출시 인자값으로 빈 문자열('')을 입력해야 한다.
        // return `<ul>${items.join()}</ul>`
        return "<ul>".concat(items.join(''), "</ul>");
    };
    /// <summary>
    /// 밑바닥 글(footer)에 해당하는 Html 코드(태그) 변환 및 문자열 출력 
    /// </summary>
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
  !*** ./src/Template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/Template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/Template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/Template/SimpleDisplayArticle.ts");
// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 5강 - Template Method
// 유튜브 참고 URL - 
// https://youtu.be/vfo-L0q2k2w?si=sDtg0C9brHpAJONo
// Template Method 디자인 패턴 정리 1
// 단계 1, 단계 2, 단계 3 순서대로 실행되는 어떤 기능이 존재하고 
// 해당 기능에 대해서 실행되어야 할 각 단계에 대한 순서만을 일단 정해두고
// 각 단계에 대한 세부 구현을 상황에 맞도록 다르게 구현할 수 있도록 하는 패턴이다.
// 해당 기능을 구현할 때, 템플릿 선언부와 템플릿 구현부로 나눌 수 있으며
// 이중 템플릿 선언부는 단계 1, 단계 2, 단계 3 순서로 실행되는 기능을 템플릿 처럼 정해둔다.
// 다만, 각 단계에 대한 구체적인 코드는 아직 정해져 있지 않은 추상 클래스이다.
// 템플릿 구현부는 단계 1, 단계 2, 단계 3의 기능들을 상황에 맞게 구체적으로 코드로 구현한 부분이다. 
// 템플릿 선언부 - 추상 클래스(abstract) DisplayArticleTemplate
//                해당 기능을 실행할 때 필요한 각 단계를 정해진 순서대로 실행해 주는 추상 클래스(abstract)이다.
//                즉, 해당 추상 클래스(abstract)는 각 단계(1, 2, 3)에 해당하는 메서드들을 순서대로 호출만 해주는 템플릿 메서드를 구현한 추상 클래스(abstract)이다.
//                추상 클래스(abstract)인 이유는 각 단계(1, 2, 3)에 해당하는 메서드들은 선언만 되어 있을 뿐 실제로는 구현되지 않기 때문이다.
//                추상 메서드는 title(), content()로 선언되어 있다.
// 템플릿 구현부 - 템플릿 선언부 추상 클래스(abstract - DisplayArticleTemplate) 상속 받은 클래스 SimpleDisplayArticle, EditableDisplayArticle이다.
//                클래스 SimpleDisplayArticle, EditableDisplayArticle는 추상 클래스(abstract - DisplayArticleTemplate)를 상속 받아서
//                각 단계에 대한 추상 메서드 title(), content()를 구체적으로 구현한다.
//                이 두 클래스는 각각 2개의 상황에 대한 구체적인 처리에 해당된다.
// Article 클래스 - 템플릿 선언부(추상 클래스(abstract) DisplayArticleTemplate)와 템플릿 구현부(클래스 SimpleDisplayArticle, EditableDisplayArticle)에서
//                  처리할 데이터(또는 출력할 데이터)를 얻을 수 있는 클래스이다.
// Template Method 디자인 패턴 최종 정리
// Template Method 디자인 패턴은 어떤 기능을 구성하는 각 실행 순서(단계)를
// 마치 템플릿 처럼 미리 정의하고 각 실행 단계에 대한 구체적인 코드를 
// 클래스에 메서드 단위로 재정의할 수 있는 유연성을 제공함.



// 1. Article 클래스 객체 article 생성
var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]("GIS 분야의 업무", [
    "공간 DB 구축 및 가공",
    "위치기반서비스 개발",
    "지도 기반 업무 시스템 설계 및 개발",
    "공간 정보 3차원 시각화",
    "영상 판독을 위한 딥러닝 학습 및 서비스 개발"
], "GIS DEVELOPER");
// 2. 1번에서 생성한 객체 article를 웹페이지 index.html(파일 경로 - 폴더 "dist" -> 폴더 "Template" -> index.html)
//    에 속하는 <div class="content"> ~~~ </div> 요소에 표시하기 위해서 클래스 SimpleDisplayArticle 객체 display 생성
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
// 3. 내용을 출력할 <div> 태그의 class 값 ".content"을 아래처럼 코드로 입력하고 
// 속성 innerHTML에 2번에서 생성한  클래스 SimpleDisplayArticle 객체 display의 템플릿 메서드 "displayHtml" 호출하여 
// 반환값(제목(title), 내용(content), 밑바닥 글(footer) Html 코드(태그))을 문자열로 가져온다.
document.querySelector(".content").innerHTML = display.displayHtml();
// 4. 체크박스가 체크되면 1번에서 생성한 객체 article를 클래스 EditableDisplayArticle 객체를 생성해서 
//    화면에 Html 코드(태그)가 출력 되도록 구현하기 위해서는 체크박스에 체인지(change) 이벤트를 사용해야 한다.
//    체크박스의 class 값은 "edit-mode"이므로 해당 class 값을 아래처럼 코드로 입력하고 
//    addEventListener()를 사용해서 체인지(change) 이벤트를 구현한다.
document.querySelector(".edit-mode").addEventListener("change", function (event) {
    var display; // 4-1. 변수 display 선언
    // 4-2. 체크박스 체크 여부 확인 
    // 체크박스가 체크된 경우 
    if (true == event.target.checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article); // 4-1에서 선언한 변수 display는 클래스 EditableDisplayArticle 객체가 된다.
    }
    // 체크박스가 체크안 된 경우 
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article); // 4-1에서 선언한 변수 display는 클래스 SimpleDisplayArticle 객체가 된다.
    }
    // 5. 4-1에서 선언한 변수 display의 템플릿 메서드 "displayHtml" 호출하여 
    // 반환값(제목(title), 내용(content), 밑바닥 글(footer) Html 코드(태그))을 문자열로 가져와서
    // class 값 ".content"인 dom 요소(<div class="content"> ~~~ </div> 요소)에 지정한다.
    document.querySelector(".content").innerHTML = display.displayHtml();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRztBQUNoRyxJQUFNLE9BQU8sR0FBRyxJQUFJLDZEQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWxELDBEQUEwRDtBQUMxRCwyRkFBMkY7QUFDM0YscUVBQXFFO0FBQ3JFLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFFcEUsMEVBQTBFO0FBQzFFLHVFQUF1RTtBQUN2RSw4REFBOEQ7QUFDOUQscURBQXFEO0FBQ3JELFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBSztJQUNsRSxJQUFJLE9BQU8sQ0FBQyxDQUFHLHFCQUFxQjtJQUNwQyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLElBQUcsSUFBSSxJQUF1QixLQUFLLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELE9BQU8sR0FBRyxJQUFJLCtEQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMkRBQTJEO0lBQzlHLENBQUM7SUFDRCxrQkFBa0I7U0FDYixDQUFDO1FBQ0YsT0FBTyxHQUFHLElBQUksNkRBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx5REFBeUQ7SUFDMUcsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxvRUFBb0U7SUFDcEUseUVBQXlFO0lBQ3pFLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDeEUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi8uL3NyYy9UZW1wbGF0ZS9BcnRpY2xlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRkZXNpZ25wYXR0ZXJuLy4vc3JjL1RlbXBsYXRlL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vLi9zcmMvVGVtcGxhdGUvRWRpdGFibGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi8uL3NyYy9UZW1wbGF0ZS9TaW1wbGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0ZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRkZXNpZ25wYXR0ZXJuLy4vc3JjL1RlbXBsYXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtUeXBlU2NyaXB066GcIOuztOuKlCBHb0bsnZgg65SU7J6Q7J24IO2MqO2EtF0g7Iqk7YSw65SUXHJcbi8vIDXqsJUgLSBUZW1wbGF0ZSBNZXRob2RcclxuLy8g7Jyg7Yqc67iMIOywuOqzoCBVUkwgLSBcclxuLy8gaHR0cHM6Ly95b3V0dS5iZS92Zm8tTDBxMmsydz9zaT1zRHRnMEM5YnJIcEFKT05vXHJcblxyXG4vLyBBcnRpY2xlIO2BtOuemOyKpCAtIO2FnO2UjOumvyDshKDslrjrtoAo7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCkgRGlzcGxheUFydGljbGVUZW1wbGF0ZSnsmYAg7YWc7ZSM66a/IOq1rO2YhOu2gCjtgbTrnpjsiqQgU2ltcGxlRGlzcGxheUFydGljbGUsIEVkaXRhYmxlRGlzcGxheUFydGljbGUp7JeQ7IScXHJcbi8vICAgICAgICAgICAgICAgICAg7LKY66as7ZWgIOuNsOydtO2EsCjrmJDripQg7Lac66Cl7ZWgIOuNsOydtO2EsCnrpbwg7Ja77J2EIOyImCDsnojripQg7YG0656Y7Iqk7J2064ukLlxyXG4vLyAgICAgICAgICAgICAgICAgIEFydGljbGUg7YG0656Y7Iqk64qUIOygnOuqqSh0aXRsZSksIOuCtOyaqShjb250ZW50KSDqt7jrpqzqs6Ag67CR67CU64ulIOq4gChmb290ZXIpIO2VhOuTnOuhnCDqtazshLHrkJzri6QuXHJcbi8vICAgICAgICAgICAgICAgICAg7IOd7ISx7J6QKGNvbnN0cnVjdG9yKeulvCDthrXtlbTshJwg7JyE7J2YIDPqsIDsp4Ag7ZWE65OcKOygnOuqqSh0aXRsZSksIOuCtOyaqShjb250ZW50KSDqt7jrpqzqs6Ag67CR67CU64ulIOq4gChmb290ZXIpKeulvCBwcml2YXRlIOygkeq3vOyekOuhnCDstpTqsIDtlZzri6QuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlIHtcclxuICAgIC8vIOyDneyEseyekChjb25zdHJ1Y3Rvcinrpbwg7Ya17ZW07IScIOychOydmCAz6rCA7KeAIO2VhOuTnCjsoJzrqqkodGl0bGUpLCDrgrTsmqkoY29udGVudCkg6re466as6rOgIOuwkeuwlOuLpSDquIAoZm9vdGVyKSnrpbwgcHJpdmF0ZSDsoJHqt7zsnpDroZwg7LaU6rCAXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdGxlOiBzdHJpbmcsIHByaXZhdGUgY29udGVudDogc3RyaW5nW10sIHByaXZhdGUgZm9vdGVyOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIO2VhOuTnCAtIOygnOuqqSh0aXRsZSkg6rCA7KC47Jik6riwXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGdldFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIO2VhOuTnCAtIOuCtOyaqShjb250ZW50KSDqsIDsoLjsmKTquLBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZ2V0Q29udGVudCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g7ZWE65OcIC0g67CR67CU64ulIOq4gChmb290ZXIpIOqwgOyguOyYpOq4sFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBnZXRGb290ZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb290ZXI7XHJcbiAgICB9XHJcbn0iLCIvLyBbVHlwZVNjcmlwdOuhnCDrs7TripQgR29G7J2YIOuUlOyekOyduCDtjKjthLRdIOyKpO2EsOuUlFxyXG4vLyA16rCVIC0gVGVtcGxhdGUgTWV0aG9kXHJcbi8vIOycoO2KnOu4jCDssLjqs6AgVVJMIC0gXHJcbi8vIGh0dHBzOi8veW91dHUuYmUvdmZvLUwwcTJrMnc/c2k9c0R0ZzBDOWJySHBBSk9Ob1xyXG5cclxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xyXG5cclxuLy8g7YWc7ZSM66a/IOyEoOyWuOu2gCAtIOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3QpIERpc3BsYXlBcnRpY2xlVGVtcGxhdGVcclxuLy8gICAgICAgICAgICAgICAg7ZW064u5IOq4sOuKpeydhCDsi6TtlontlaAg65WMIO2VhOyalO2VnCDqsIEg64uo6rOE66W8IOygle2VtOynhCDsiJzshJzrjIDroZwg7Iuk7ZaJ7ZW0IOyjvOuKlCDstpTsg4Eg7YG0656Y7IqkKGFic3RyYWN0KeydtOuLpC5cclxuLy8gICAgICAgICAgICAgICAg7KaJLCDtlbTri7kg7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCnripQg6rCBIOuLqOqzhCgxLCAyLCAzKeyXkCDtlbTri7ntlZjripQg66mU7ISc65Oc65Ok7J2EIOyInOyEnOuMgOuhnCDtmLjstpzrp4wg7ZW07KO864qUIO2FnO2UjOumvyDrqZTshJzrk5zrpbwg6rWs7ZiE7ZWcIOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3Qp7J2064ukLlxyXG4vLyAgICAgICAgICAgICAgICDstpTsg4Eg7YG0656Y7IqkKGFic3RyYWN0KeyduCDsnbTsnKDripQg6rCBIOuLqOqzhCgxLCAyLCAzKeyXkCDtlbTri7ntlZjripQg66mU7ISc65Oc65Ok7J2AIOyEoOyWuOunjCDrkJjslrQg7J6I7J2EIOu/kCDsi6TsoJzroZzripQg6rWs7ZiE65CY7KeAIOyViuq4sCDrlYzrrLjsnbTri6QuXHJcbi8vICAgICAgICAgICAgICAgIOy2lOyDgSDrqZTshJzrk5zripQgdGl0bGUoKSwgY29udGVudCgp66GcIOyEoOyWuOuQmOyWtCDsnojri6QuXHJcblxyXG4vLyDstpTsg4Eg7YG0656Y7IqkKGFic3RyYWN0KSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRl656APyBcclxuLy8g6rCBIOuLqOqzhOydmCDsi6Ttlokg7Iic7ISc7JeQIOuMgO2VnCDrqZTshJzrk5zrk6TsnYQg7Iic7ISc64yA66GcIO2YuOy2nOunjCDtlbTso7zripQg7YWc7ZSM66a/IOuplOyEnOuTnOulvCDsoJzqs7XtlZjripQg7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCnsnbTri6QuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcclxuICAgIC8vIOyymOumrO2VoCjrmJDripQg7Lac66Cl7ZWgKSDrjbDsnbTthLDsl5Ag64yA7ZWcIEFydGljbGUg7YG0656Y7IqkIOqwneyytCBcImFydGljbGVcIuulvCBwcm90ZWN0ZWQg7KCR6re87J6Q66GcIOyngOygle2VnCDtlYTrk5zroZwg6rWs7ZiEIFxyXG4gICAgLy8gcHJvdGVjdGVkIOygkeq3vOyekOuhnCDsp4DsoJXtlZwg7J207Jyg64qUXHJcbiAgICAvLyDstpTsg4Eg7YG0656Y7IqkKGFic3RyYWN0KSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRl66W8IOyDgeyGjeuwm+uKlCDsnpDsi50g7YG0656Y7IqkKO2MjOyDnSDtgbTrnpjsiqQgLSBTaW1wbGVEaXNwbGF5QXJ0aWNsZSwgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSnsl5DshJxcclxuICAgIC8vIOygkeq3vO2VoCDsiJgg7J6I64+E66GdIO2VmOq4sCDsnITtlbTshJzsnbTri6QuXHJcblxyXG4gICAgLy8g7IOd7ISx7J6QKGNvbnN0cnVjdG9yKeulvCDthrXtlbTshJwg7ZWE65OcKEFydGljbGUg7YG0656Y7IqkIOqwneyytCBcImFydGljbGVcIinrpbwgcHJvdGVjdGVkIOygkeq3vOyekOuhnCDstpTqsIBcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcnRpY2xlOiBBcnRpY2xlKSB7fVxyXG5cclxuICAgIC8vIOqwgSDri6jqs4QoMSwgMiwgMynrpbwg7KCV7ZW07KeEIOyInOyEnOuMgOuhnCDtmLjstpztlbTso7zripQg7YWc7ZSM66a/IOuplOyEnOuTnCBcImRpc3BsYXlIdG1sXCIg7LaU6rCAIFxyXG4gICAgLy8g7ZW064u5IO2FnO2UjOumvyDrqZTshJzrk5wgXCJkaXNwbGF5SHRtbFwi66W8IHJlYWRvbmx57JmAIO2VqOq7mCDrqZTshJzrk5zsl5Ag64yA7ZWcIOygleydmOulvCDslaDroZzsmrAg7ZWo7IiYIOusuOuylSgoKSA9PiB7IC4uLiB9KeycvOuhnCDsoJXsnZjtlbTshJwgXHJcbiAgICAvLyDstpTsg4Eg7YG0656Y7IqkKGFic3RyYWN0KSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRl66W8IOyDgeyGjeuwm+uKlCDsnpDsi50g7YG0656Y7IqkKO2MjOyDnSDtgbTrnpjsiqQgLSBTaW1wbGVEaXNwbGF5QXJ0aWNsZSwgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSnsl5DshJzripRcclxuICAgIC8vIO2VtOuLuSDthZztlIzrpr8g66mU7ISc65OcIFwiZGlzcGxheUh0bWxcIuulvCDsnqzsoJXsnZjtlaAg7IiYIOyXhuuPhOuhnSDtlZzri6QuXHJcbiAgICAvLyDsnbTroIfqsowg7J6Q7IudIO2BtOuemOyKpCjtjIzsg50g7YG0656Y7IqkKeyXkOyEnCDsvZTrk5zrpbwg67OA6rK97ZWY7KeAIOuqu+2VmOuPhOuhnSDrp4nsnLzrqbQg7KKAIOuNlCDsvZTrk5zqsIAg6rKs6rOg7ZW07KeA7KeA66eMXHJcbiAgICAvLyDsnbTrpbwg7KeA7JuQ7ZWY7KeAIOyViuuKlCDslrjslrTsl5DshJzripQg7J2066CH6rKMIO2VmOyngCDslYrslYTrj4Qg65Cc64ukLlxyXG4gICAgcHVibGljIHJlYWRvbmx5IGRpc3BsYXlIdG1sID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIOuLqOqzhCAxIC0g66mU7ISc65OcIHRpdGxlSHRtbCgpIO2YuOy2nCBcclxuICAgICAgICAvLyDri6jqs4QgMiAtIOuplOyEnOuTnCBjb250ZW50SHRtbCgpIO2YuOy2nFxyXG4gICAgICAgIC8vIOuLqOqzhCAzIC0g66mU7ISc65OcIGZvb3Rlckh0bWwoKSDtmLjstpwgXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgJHt0aGlzLnRpdGxlSHRtbCgpfSAgICBcclxuICAgICAgICAgICAgJHt0aGlzLmNvbnRlbnRIdG1sKCl9XHJcbiAgICAgICAgICAgICR7dGhpcy5mb290ZXJIdG1sKCl9XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOq1rO2YhOu2gOqwgCDsl4bripQg7LaU7IOBIOuplOyEnOuTnCh0aXRsZUh0bWwsIGNvbnRlbnRIdG1sLCBmb290ZXJIdG1sKSDshKDslrggXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgdGl0bGVIdG1sKCk6IHN0cmluZyAgICAgXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29udGVudEh0bWwoKTogc3RyaW5nICAgXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZm9vdGVySHRtbCgpOiBzdHJpbmdcclxufSIsIi8vIFtUeXBlU2NyaXB066GcIOuztOuKlCBHb0bsnZgg65SU7J6Q7J24IO2MqO2EtF0g7Iqk7YSw65SUXHJcbi8vIDXqsJUgLSBUZW1wbGF0ZSBNZXRob2RcclxuLy8g7Jyg7Yqc67iMIOywuOqzoCBVUkwgLSBcclxuLy8gaHR0cHM6Ly95b3V0dS5iZS92Zm8tTDBxMmsydz9zaT1zRHRnMEM5YnJIcEFKT05vXHJcblxyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XHJcbmltcG9ydCBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIGZyb20gXCIuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGVcIjtcclxuXHJcbi8vIO2FnO2UjOumvyDqtaztmITrtoAgLSDthZztlIzrpr8g7ISg7Ja467aAIOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3QgLSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlKSDsg4Hsho0g67Cb7J2AIO2BtOuemOyKpCBTaW1wbGVEaXNwbGF5QXJ0aWNsZSwgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZeydtOuLpC5cclxuLy8gICAgICAgICAgICAgICAg7YG0656Y7IqkIFNpbXBsZURpc3BsYXlBcnRpY2xlLCBFZGl0YWJsZURpc3BsYXlBcnRpY2xl64qUIOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3QgLSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlKeulvCDsg4Hsho0g67Cb7JWE7IScXHJcbi8vICAgICAgICAgICAgICAgIOqwgSDri6jqs4Tsl5Ag64yA7ZWcIOy2lOyDgSDrqZTshJzrk5wgdGl0bGVIdG1sKCksIGNvbnRlbnRIdG1sKCksIGZvb3Rlckh0bWwoKeulvCDqtazssrTsoIHsnLzroZwg6rWs7ZiE7ZWc64ukLlxyXG4vLyAgICAgICAgICAgICAgICDsnbQg65GQIO2BtOuemOyKpOuKlCDqsIHqsIEgMuqwnOydmCDsg4Htmansl5Ag64yA7ZWcIOq1rOyytOyggeyduCDsspjrpqzsl5Ag7ZW064u565Cc64ukLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xyXG4gICAgLy8g7IOd7ISx7J6QIGNvbnN0cnVjdG9yIOq1rO2YhFxyXG4gICAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xyXG4gICAgICAgIHN1cGVyKGFydGljbGUpICAgLy8gc3VwZXIoKSAtIOu2gOuqqCDtgbTrnpjsiqQo7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCAtIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUpKeydmCDsg53shLHsnpAg7Zi47LacIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBBcnRpY2xlIO2BtOuemOyKpCDqsJ3ssrTsnZgg6rWs7ISx6rCS65OkKOygnOuqqSh0aXRsZSksIOuCtOyaqShjb250ZW50KSwg67CR67CU64ulIOq4gChmb290ZXIpKeydhCDqt7gg66qp7KCB7JeQIOunnuqyjFxyXG4gICAgLy8gSHRtbCDsvZTrk5wo7YOc6re4KeuhnCDrs4DtmZjtlbTshJwg7ZW064u5IOusuOyekOyXtOuhnCDstpzroKXtlbTso7zquLAg7JyE7ZW0IFxyXG4gICAgLy8g7JWE656YIOuplOyEnOuTnCAz6rCA7KeAICh0aXRsZUh0bWwoKSwgY29udGVudEh0bWwoKSwgZm9vdGVySHRtbCgpKSDqtaztmIQgXHJcblxyXG4gICAgLy8g7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCAtIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUp66W8IOyDgeyGjSDrsJvripRcclxuICAgIC8vIOuRkCDsnpDsi50g7YG0656Y7IqkKO2MjOyDnSDtgbTrnpjsiqQgLSBTaW1wbGVEaXNwbGF5QXJ0aWNsZSwgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSnsnZgg7LCo7J2064qUXHJcbiAgICAvLyDtgbTrnpjsiqQgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZeuKlCDslYTrnpgg66mU7ISc65OcIDPqsIDsp4AgKHRpdGxlSHRtbCgpLCBjb250ZW50SHRtbCgpLCBmb290ZXJIdG1sKCkpIOyLpO2WieyLnCBcclxuICAgIC8vIO2DnOq3uCA8aW5wdXQ+LCA8dGV4dGFyZWE+66W8IOydtOyaqe2VtOyEnCDtjrjsp5HsnYQg7JyE7ZWcIOyDge2ZqeyXkOyEnCDsgqzsmqnrkJzri6QuXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOygnOuqqSh0aXRsZSnsl5Ag7ZW064u57ZWY64qUIEh0bWwg7L2U65OcKO2DnOq3uCkg67OA7ZmYIOuwjyDrrLjsnpDsl7Qg7Lac66ClIFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDxkaXY+PHNwYW4+7KCc66qpPC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX0nIC8+PC9kaXY+YFxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDrgrTsmqkoY29udGVudCnsl5Ag7ZW064u57ZWY64qUIEh0bWwg7L2U65OcKO2DnOq3uCkg67OA7ZmYIOuwjyDrrLjsnpDsl7Qg7Lac66ClIFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoaXRlbSA9PiBgJHtpdGVtfVxcbmApXHJcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj7rgrTsmqk8L3NwYW4+PGJyLz48dGV4dGFyZWEgY29scz0nNTAnIHJvd3M9JzUnPiR7aXRlbXMuam9pbignJyl9PC90ZXh0YXJlYT5gXHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOuwkeuwlOuLpSDquIAoZm9vdGVyKeyXkCDtlbTri7ntlZjripQgSHRtbCDsvZTrk5wo7YOc6re4KSDrs4DtmZgg67CPIOusuOyekOyXtCDstpzroKUgXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHJvdGVjdGVkIGZvb3Rlckh0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDxkaXY+PHNwYW4+6riA7JO07J20PC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9Jy8+PC9kaXY+YFxyXG4gICAgfVxyXG5cclxufSIsIi8vIFtUeXBlU2NyaXB066GcIOuztOuKlCBHb0bsnZgg65SU7J6Q7J24IO2MqO2EtF0g7Iqk7YSw65SUXHJcbi8vIDXqsJUgLSBUZW1wbGF0ZSBNZXRob2RcclxuLy8g7Jyg7Yqc67iMIOywuOqzoCBVUkwgLSBcclxuLy8gaHR0cHM6Ly95b3V0dS5iZS92Zm8tTDBxMmsydz9zaT1zRHRnMEM5YnJIcEFKT05vXHJcblxyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XHJcbmltcG9ydCBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIGZyb20gXCIuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGVcIjtcclxuXHJcbi8vIO2FnO2UjOumvyDqtaztmITrtoAgLSDthZztlIzrpr8g7ISg7Ja467aAIOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3QgLSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlKSDsg4Hsho0g67Cb7J2AIO2BtOuemOyKpCBTaW1wbGVEaXNwbGF5QXJ0aWNsZSwgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZeydtOuLpC5cclxuLy8gICAgICAgICAgICAgICAg7YG0656Y7IqkIFNpbXBsZURpc3BsYXlBcnRpY2xlLCBFZGl0YWJsZURpc3BsYXlBcnRpY2xl64qUIOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3QgLSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlKeulvCDsg4Hsho0g67Cb7JWE7IScXHJcbi8vICAgICAgICAgICAgICAgIOqwgSDri6jqs4Tsl5Ag64yA7ZWcIOy2lOyDgSDrqZTshJzrk5wgdGl0bGVIdG1sKCksIGNvbnRlbnRIdG1sKCksIGZvb3Rlckh0bWwoKeulvCDqtazssrTsoIHsnLzroZwg6rWs7ZiE7ZWc64ukLlxyXG4vLyAgICAgICAgICAgICAgICDsnbQg65GQIO2BtOuemOyKpOuKlCDqsIHqsIEgMuqwnOydmCDsg4Htmansl5Ag64yA7ZWcIOq1rOyytOyggeyduCDsspjrpqzsl5Ag7ZW064u565Cc64ukLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlRGlzcGxheUFydGljbGUgZXh0ZW5kcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcclxuICAgIC8vIOyDneyEseyekCBjb25zdHJ1Y3RvciDqtaztmIRcclxuICAgIGNvbnN0cnVjdG9yKGFydGljbGU6IEFydGljbGUpIHtcclxuICAgICAgICBzdXBlcihhcnRpY2xlKSAgIC8vIHN1cGVyKCkgLSDrtoDrqqgg7YG0656Y7IqkKOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3QgLSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlKSnsnZgg7IOd7ISx7J6QIO2YuOy2nCBcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcnRpY2xlIO2BtOuemOyKpCDqsJ3ssrTsnZgg6rWs7ISx6rCS65OkKOygnOuqqSh0aXRsZSksIOuCtOyaqShjb250ZW50KSwg67CR67CU64ulIOq4gChmb290ZXIpKeydhCDqt7gg66qp7KCB7JeQIOunnuqyjFxyXG4gICAgLy8gSHRtbCDsvZTrk5wo7YOc6re4KeuhnCDrs4DtmZjtlbTshJwg7ZW064u5IOusuOyekOyXtOuhnCDstpzroKXtlbTso7zquLAg7JyE7ZW0IFxyXG4gICAgLy8g7JWE656YIOuplOyEnOuTnCAz6rCA7KeAICh0aXRsZUh0bWwoKSwgY29udGVudEh0bWwoKSwgZm9vdGVySHRtbCgpKSDqtaztmIQgXHJcblxyXG4gICAgLy8g7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCAtIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUp66W8IOyDgeyGjSDrsJvripRcclxuICAgIC8vIOuRkCDsnpDsi50g7YG0656Y7IqkKO2MjOyDnSDtgbTrnpjsiqQgLSBTaW1wbGVEaXNwbGF5QXJ0aWNsZSwgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSnsnZgg7LCo7J2064qUXHJcbiAgICAvLyDtgbTrnpjsiqQgU2ltcGxlRGlzcGxheUFydGljbGXripQg7JWE656YIOuplOyEnOuTnCAz6rCA7KeAICh0aXRsZUh0bWwoKSwgY29udGVudEh0bWwoKSwgZm9vdGVySHRtbCgpKSDsi6Ttlonsi5wgXHJcbiAgICAvLyDtg5zqt7ggPGgxPiwgPHVsPiwgPGgzPuulvCDsnbTsmqntlbTshJwg642w7J207YSwIOy2nOugpeydhCDtlZjquLAg7JyE7ZWcIOyDge2ZqeyXkOyEnCDsgqzsmqnrkJzri6QuXHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOygnOuqqSh0aXRsZSnsl5Ag7ZW064u57ZWY64qUIEh0bWwg7L2U65OcKO2DnOq3uCkg67OA7ZmYIOuwjyDrrLjsnpDsl7Qg7Lac66ClIFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYDxoMT4ke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfTwvaDE+YFxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDrgrTsmqkoY29udGVudCnsl5Ag7ZW064u57ZWY64qUIEh0bWwg7L2U65OcKO2DnOq3uCkg67OA7ZmYIOuwjyDrrLjsnpDsl7Qg7Lac66ClIFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoaXRlbSA9PiBgPGxpPiR7aXRlbX08L2xpPmApXHJcblxyXG4gICAgICAgIC8vIOu2iCDtlYTsmpTtlZwg6riw7Zi4IOy9pOuniCgsKeulvCDsl4bslaDquLAg7JyE7ZW07IScIOuplOyEnOuTnCBqb2luIO2YuOy2nOyLnCDsnbjsnpDqsJLsnLzroZwg67mIIOusuOyekOyXtCgnJynsnYQg7J6F66Cl7ZW07JW8IO2VnOuLpC5cclxuICAgICAgICAvLyByZXR1cm4gYDx1bD4ke2l0ZW1zLmpvaW4oKX08L3VsPmBcclxuICAgICAgICByZXR1cm4gYDx1bD4ke2l0ZW1zLmpvaW4oJycpfTwvdWw+YFxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDrsJHrsJTri6Ug6riAKGZvb3Rlcinsl5Ag7ZW064u57ZWY64qUIEh0bWwg7L2U65OcKO2DnOq3uCkg67OA7ZmYIOuwjyDrrLjsnpDsl7Qg7Lac66ClIFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGA8aDM+JHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9PC9oMz5gXHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBbVHlwZVNjcmlwdOuhnCDrs7TripQgR29G7J2YIOuUlOyekOyduCDtjKjthLRdIOyKpO2EsOuUlFxyXG4vLyA16rCVIC0gVGVtcGxhdGUgTWV0aG9kXHJcbi8vIOycoO2KnOu4jCDssLjqs6AgVVJMIC0gXHJcbi8vIGh0dHBzOi8veW91dHUuYmUvdmZvLUwwcTJrMnc/c2k9c0R0ZzBDOWJySHBBSk9Ob1xyXG5cclxuXHJcbi8vIFRlbXBsYXRlIE1ldGhvZCDrlJTsnpDsnbgg7Yyo7YS0IOygleumrCAxXHJcbi8vIOuLqOqzhCAxLCDri6jqs4QgMiwg64uo6rOEIDMg7Iic7ISc64yA66GcIOyLpO2WieuQmOuKlCDslrTrlqQg6riw64ql7J20IOyhtOyerO2VmOqzoCBcclxuLy8g7ZW064u5IOq4sOuKpeyXkCDrjIDtlbTshJwg7Iuk7ZaJ65CY7Ja07JW8IO2VoCDqsIEg64uo6rOE7JeQIOuMgO2VnCDsiJzshJzrp4zsnYQg7J2864uoIOygle2VtOuRkOqzoFxyXG4vLyDqsIEg64uo6rOE7JeQIOuMgO2VnCDshLjrtoAg6rWs7ZiE7J2EIOyDge2ZqeyXkCDrp57rj4TroZ0g64uk66W06rKMIOq1rO2YhO2VoCDsiJgg7J6I64+E66GdIO2VmOuKlCDtjKjthLTsnbTri6QuXHJcblxyXG4vLyDtlbTri7kg6riw64ql7J2EIOq1rO2YhO2VoCDrlYwsIO2FnO2UjOumvyDshKDslrjrtoDsmYAg7YWc7ZSM66a/IOq1rO2YhOu2gOuhnCDrgpjriIwg7IiYIOyeiOycvOupsFxyXG4vLyDsnbTspJEg7YWc7ZSM66a/IOyEoOyWuOu2gOuKlCDri6jqs4QgMSwg64uo6rOEIDIsIOuLqOqzhCAzIOyInOyEnOuhnCDsi6TtlonrkJjripQg6riw64ql7J2EIO2FnO2UjOumvyDsspjrn7wg7KCV7ZW065GU64ukLlxyXG4vLyDri6Trp4wsIOqwgSDri6jqs4Tsl5Ag64yA7ZWcIOq1rOyytOyggeyduCDsvZTrk5zripQg7JWE7KeBIOygle2VtOyguCDsnojsp4Ag7JWK7J2AIOy2lOyDgSDtgbTrnpjsiqTsnbTri6QuXHJcbi8vIO2FnO2UjOumvyDqtaztmITrtoDripQg64uo6rOEIDEsIOuLqOqzhCAyLCDri6jqs4QgM+ydmCDquLDriqXrk6TsnYQg7IOB7Zmp7JeQIOunnuqyjCDqtazssrTsoIHsnLzroZwg7L2U65Oc66GcIOq1rO2YhO2VnCDrtoDrtoTsnbTri6QuIFxyXG5cclxuLy8g7YWc7ZSM66a/IOyEoOyWuOu2gCAtIOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3QpIERpc3BsYXlBcnRpY2xlVGVtcGxhdGVcclxuLy8gICAgICAgICAgICAgICAg7ZW064u5IOq4sOuKpeydhCDsi6TtlontlaAg65WMIO2VhOyalO2VnCDqsIEg64uo6rOE66W8IOygle2VtOynhCDsiJzshJzrjIDroZwg7Iuk7ZaJ7ZW0IOyjvOuKlCDstpTsg4Eg7YG0656Y7IqkKGFic3RyYWN0KeydtOuLpC5cclxuLy8gICAgICAgICAgICAgICAg7KaJLCDtlbTri7kg7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCnripQg6rCBIOuLqOqzhCgxLCAyLCAzKeyXkCDtlbTri7ntlZjripQg66mU7ISc65Oc65Ok7J2EIOyInOyEnOuMgOuhnCDtmLjstpzrp4wg7ZW07KO864qUIO2FnO2UjOumvyDrqZTshJzrk5zrpbwg6rWs7ZiE7ZWcIOy2lOyDgSDtgbTrnpjsiqQoYWJzdHJhY3Qp7J2064ukLlxyXG4vLyAgICAgICAgICAgICAgICDstpTsg4Eg7YG0656Y7IqkKGFic3RyYWN0KeyduCDsnbTsnKDripQg6rCBIOuLqOqzhCgxLCAyLCAzKeyXkCDtlbTri7ntlZjripQg66mU7ISc65Oc65Ok7J2AIOyEoOyWuOunjCDrkJjslrQg7J6I7J2EIOu/kCDsi6TsoJzroZzripQg6rWs7ZiE65CY7KeAIOyViuq4sCDrlYzrrLjsnbTri6QuXHJcbi8vICAgICAgICAgICAgICAgIOy2lOyDgSDrqZTshJzrk5zripQgdGl0bGUoKSwgY29udGVudCgp66GcIOyEoOyWuOuQmOyWtCDsnojri6QuXHJcblxyXG5cclxuLy8g7YWc7ZSM66a/IOq1rO2YhOu2gCAtIO2FnO2UjOumvyDshKDslrjrtoAg7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCAtIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUpIOyDgeyGjSDrsJvsnYAg7YG0656Y7IqkIFNpbXBsZURpc3BsYXlBcnRpY2xlLCBFZGl0YWJsZURpc3BsYXlBcnRpY2xl7J2064ukLlxyXG4vLyAgICAgICAgICAgICAgICDtgbTrnpjsiqQgU2ltcGxlRGlzcGxheUFydGljbGUsIEVkaXRhYmxlRGlzcGxheUFydGljbGXripQg7LaU7IOBIO2BtOuemOyKpChhYnN0cmFjdCAtIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUp66W8IOyDgeyGjSDrsJvslYTshJxcclxuLy8gICAgICAgICAgICAgICAg6rCBIOuLqOqzhOyXkCDrjIDtlZwg7LaU7IOBIOuplOyEnOuTnCB0aXRsZSgpLCBjb250ZW50KCnrpbwg6rWs7LK07KCB7Jy866GcIOq1rO2YhO2VnOuLpC5cclxuLy8gICAgICAgICAgICAgICAg7J20IOuRkCDtgbTrnpjsiqTripQg6rCB6rCBIDLqsJzsnZgg7IOB7Zmp7JeQIOuMgO2VnCDqtazssrTsoIHsnbgg7LKY66as7JeQIO2VtOuLueuQnOuLpC5cclxuXHJcbi8vIEFydGljbGUg7YG0656Y7IqkIC0g7YWc7ZSM66a/IOyEoOyWuOu2gCjstpTsg4Eg7YG0656Y7IqkKGFic3RyYWN0KSBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlKeyZgCDthZztlIzrpr8g6rWs7ZiE67aAKO2BtOuemOyKpCBTaW1wbGVEaXNwbGF5QXJ0aWNsZSwgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSnsl5DshJxcclxuLy8gICAgICAgICAgICAgICAgICDsspjrpqztlaAg642w7J207YSwKOuYkOuKlCDstpzroKXtlaAg642w7J207YSwKeulvCDslrvsnYQg7IiYIOyeiOuKlCDtgbTrnpjsiqTsnbTri6QuXHJcblxyXG4vLyBUZW1wbGF0ZSBNZXRob2Qg65SU7J6Q7J24IO2MqO2EtCDstZzsooUg7KCV66asXHJcbi8vIFRlbXBsYXRlIE1ldGhvZCDrlJTsnpDsnbgg7Yyo7YS07J2AIOyWtOuWpCDquLDriqXsnYQg6rWs7ISx7ZWY64qUIOqwgSDsi6Ttlokg7Iic7IScKOuLqOqzhCnrpbxcclxuLy8g66eI7LmYIO2FnO2UjOumvyDsspjrn7wg66+466asIOygleydmO2VmOqzoCDqsIEg7Iuk7ZaJIOuLqOqzhOyXkCDrjIDtlZwg6rWs7LK07KCB7J24IOy9lOuTnOulvCBcclxuLy8g7YG0656Y7Iqk7JeQIOuplOyEnOuTnCDri6jsnITroZwg7J6s7KCV7J2Y7ZWgIOyImCDsnojripQg7Jyg7Jew7ISx7J2EIOygnOqzte2VqC5cclxuXHJcblxyXG5cclxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xyXG5pbXBvcnQgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBmcm9tIFwiLi9FZGl0YWJsZURpc3BsYXlBcnRpY2xlXCI7XHJcbmltcG9ydCBTaW1wbGVEaXNwbGF5QXJ0aWNsZSBmcm9tIFwiLi9TaW1wbGVEaXNwbGF5QXJ0aWNsZVwiO1xyXG5cclxuLy8gMS4gQXJ0aWNsZSDtgbTrnpjsiqQg6rCd7LK0IGFydGljbGUg7IOd7ISxXHJcbmNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShcIkdJUyDrtoTslbzsnZgg7JeF66y0XCIsIFxyXG4gICAgW1xyXG4gICAgICAgIFwi6rO16rCEIERCIOq1rOy2lSDrsI8g6rCA6rO1XCIsXHJcbiAgICAgICAgXCLsnITsuZjquLDrsJjshJzruYTsiqQg6rCc67CcXCIsXHJcbiAgICAgICAgXCLsp4Drj4Qg6riw67CYIOyXheustCDsi5zsiqTthZwg7ISk6rOEIOuwjyDqsJzrsJxcIixcclxuICAgICAgICBcIuqzteqwhCDsoJXrs7QgM+ywqOybkCDsi5zqsIHtmZRcIixcclxuICAgICAgICBcIuyYgeyDgSDtjJDrj4XsnYQg7JyE7ZWcIOuUpeufrOuLnSDtlZnsirUg67CPIOyEnOu5hOyKpCDqsJzrsJxcIlxyXG4gICAgXSxcclxuICAgIFwiR0lTIERFVkVMT1BFUlwiICAgICAgICAgICAgICAgICAgICAgXHJcbilcclxuXHJcbi8vIDIuIDHrsojsl5DshJwg7IOd7ISx7ZWcIOqwneyytCBhcnRpY2xl66W8IOybue2OmOydtOyngCBpbmRleC5odG1sKO2MjOydvCDqsr3roZwgLSDtj7TrjZQgXCJkaXN0XCIgLT4g7Y+0642UIFwiVGVtcGxhdGVcIiAtPiBpbmRleC5odG1sKVxyXG4vLyAgICDsl5Ag7IaN7ZWY64qUIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+IH5+fiA8L2Rpdj4g7JqU7IaM7JeQIO2RnOyLnO2VmOq4sCDsnITtlbTshJwg7YG0656Y7IqkIFNpbXBsZURpc3BsYXlBcnRpY2xlIOqwneyytCBkaXNwbGF5IOyDneyEsVxyXG5jb25zdCBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xyXG5cclxuLy8gMy4g64K07Jqp7J2EIOy2nOugpe2VoCA8ZGl2PiDtg5zqt7jsnZggY2xhc3Mg6rCSIFwiLmNvbnRlbnRcIuydhCDslYTrnpjsspjrn7wg7L2U65Oc66GcIOyeheugpe2VmOqzoCBcclxuLy8g7IaN7ISxIGlubmVySFRNTOyXkCAy67KI7JeQ7IScIOyDneyEse2VnCAg7YG0656Y7IqkIFNpbXBsZURpc3BsYXlBcnRpY2xlIOqwneyytCBkaXNwbGF57J2YIO2FnO2UjOumvyDrqZTshJzrk5wgXCJkaXNwbGF5SHRtbFwiIO2YuOy2nO2VmOyXrCBcclxuLy8g67CY7ZmY6rCSKOygnOuqqSh0aXRsZSksIOuCtOyaqShjb250ZW50KSwg67CR67CU64ulIOq4gChmb290ZXIpIEh0bWwg7L2U65OcKO2DnOq3uCkp7J2EIOusuOyekOyXtOuhnCDqsIDsoLjsmKjri6QuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5pbm5lckhUTUwgPSBkaXNwbGF5LmRpc3BsYXlIdG1sKClcclxuXHJcbi8vIDQuIOyytO2BrOuwleyKpOqwgCDssrTtgazrkJjrqbQgMeuyiOyXkOyEnCDsg53shLHtlZwg6rCd7LK0IGFydGljbGXrpbwg7YG0656Y7IqkIEVkaXRhYmxlRGlzcGxheUFydGljbGUg6rCd7LK066W8IOyDneyEse2VtOyEnCBcclxuLy8gICAg7ZmU66m07JeQIEh0bWwg7L2U65OcKO2DnOq3uCnqsIAg7Lac66ClIOuQmOuPhOuhnSDqtaztmITtlZjquLAg7JyE7ZW07ISc64qUIOyytO2BrOuwleyKpOyXkCDssrTsnbjsp4AoY2hhbmdlKSDsnbTrsqTtirjrpbwg7IKs7Jqp7ZW07JW8IO2VnOuLpC5cclxuLy8gICAg7LK07YGs67CV7Iqk7J2YIGNsYXNzIOqwkuydgCBcImVkaXQtbW9kZVwi7J2066+A66GcIO2VtOuLuSBjbGFzcyDqsJLsnYQg7JWE656Y7LKY65+8IOy9lOuTnOuhnCDsnoXroKXtlZjqs6AgXHJcbi8vICAgIGFkZEV2ZW50TGlzdGVuZXIoKeulvCDsgqzsmqntlbTshJwg7LK07J247KeAKGNoYW5nZSkg7J2067Kk7Yq466W8IOq1rO2YhO2VnOuLpC5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIGxldCBkaXNwbGF5OyAgIC8vIDQtMS4g67OA7IiYIGRpc3BsYXkg7ISg7Ja4XHJcbiAgICAvLyA0LTIuIOyytO2BrOuwleyKpCDssrTtgawg7Jes67aAIO2ZleyduCBcclxuICAgIC8vIOyytO2BrOuwleyKpOqwgCDssrTtgazrkJwg6rK97JqwIFxyXG4gICAgaWYodHJ1ZSA9PSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jaGVja2VkKSB7XHJcbiAgICAgICAgZGlzcGxheSA9IG5ldyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpOyAvLyA0LTHsl5DshJwg7ISg7Ja47ZWcIOuzgOyImCBkaXNwbGF564qUIO2BtOuemOyKpCBFZGl0YWJsZURpc3BsYXlBcnRpY2xlIOqwneyytOqwgCDrkJzri6QuXHJcbiAgICB9XHJcbiAgICAvLyDssrTtgazrsJXsiqTqsIAg7LK07YGs7JWIIOuQnCDqsr3smrAgXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpOyAvLyA0LTHsl5DshJwg7ISg7Ja47ZWcIOuzgOyImCBkaXNwbGF564qUIO2BtOuemOyKpCBTaW1wbGVEaXNwbGF5QXJ0aWNsZSDqsJ3ssrTqsIAg65Cc64ukLlxyXG4gICAgfVxyXG5cclxuICAgIC8vIDUuIDQtMeyXkOyEnCDshKDslrjtlZwg67OA7IiYIGRpc3BsYXnsnZgg7YWc7ZSM66a/IOuplOyEnOuTnCBcImRpc3BsYXlIdG1sXCIg7Zi47Lac7ZWY7JesIFxyXG4gICAgLy8g67CY7ZmY6rCSKOygnOuqqSh0aXRsZSksIOuCtOyaqShjb250ZW50KSwg67CR67CU64ulIOq4gChmb290ZXIpIEh0bWwg7L2U65OcKO2DnOq3uCkp7J2EIOusuOyekOyXtOuhnCDqsIDsoLjsmYDshJxcclxuICAgIC8vIGNsYXNzIOqwkiBcIi5jb250ZW50XCLsnbggZG9tIOyalOyGjCg8ZGl2IGNsYXNzPVwiY29udGVudFwiPiB+fn4gPC9kaXY+IOyalOyGjCnsl5Ag7KeA7KCV7ZWc64ukLlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKVxyXG59KTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=