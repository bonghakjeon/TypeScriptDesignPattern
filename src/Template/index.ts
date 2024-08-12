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



import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";

// 1. Article 클래스 객체 article 생성
const article = new Article("GIS 분야의 업무", 
    [
        "공간 DB 구축 및 가공",
        "위치기반서비스 개발",
        "지도 기반 업무 시스템 설계 및 개발",
        "공간 정보 3차원 시각화",
        "영상 판독을 위한 딥러닝 학습 및 서비스 개발"
    ],
    "GIS DEVELOPER"                     
)

// 2. 1번에서 생성한 객체 article를 웹페이지 index.html(파일 경로 - 폴더 "dist" -> 폴더 "Template" -> index.html)
//    에 속하는 <div class="content"> ~~~ </div> 요소에 표시하기 위해서 클래스 SimpleDisplayArticle 객체 display 생성
const display = new SimpleDisplayArticle(article);

// 3. 내용을 출력할 <div> 태그의 class 값 ".content"을 아래처럼 코드로 입력하고 
// 속성 innerHTML에 2번에서 생성한  클래스 SimpleDisplayArticle 객체 display의 템플릿 메서드 "displayHtml" 호출하여 
// 반환값(제목(title), 내용(content), 밑바닥 글(footer) Html 코드(태그))을 문자열로 가져온다.
document.querySelector(".content").innerHTML = display.displayHtml()

// 4. 체크박스가 체크되면 1번에서 생성한 객체 article를 클래스 EditableDisplayArticle 객체를 생성해서 
//    화면에 Html 코드(태그)가 출력 되도록 구현하기 위해서는 체크박스에 체인지(change) 이벤트를 사용해야 한다.
//    체크박스의 class 값은 "edit-mode"이므로 해당 class 값을 아래처럼 코드로 입력하고 
//    addEventListener()를 사용해서 체인지(change) 이벤트를 구현한다.
document.querySelector(".edit-mode").addEventListener("change", (event) => {
    let display;   // 4-1. 변수 display 선언
    // 4-2. 체크박스 체크 여부 확인 
    // 체크박스가 체크된 경우 
    if(true == (<HTMLInputElement>event.target).checked) {
        display = new EditableDisplayArticle(article); // 4-1에서 선언한 변수 display는 클래스 EditableDisplayArticle 객체가 된다.
    }
    // 체크박스가 체크안 된 경우 
    else {
        display = new SimpleDisplayArticle(article); // 4-1에서 선언한 변수 display는 클래스 SimpleDisplayArticle 객체가 된다.
    }

    // 5. 4-1에서 선언한 변수 display의 템플릿 메서드 "displayHtml" 호출하여 
    // 반환값(제목(title), 내용(content), 밑바닥 글(footer) Html 코드(태그))을 문자열로 가져와서
    // class 값 ".content"인 dom 요소(<div class="content"> ~~~ </div> 요소)에 지정한다.
    document.querySelector(".content").innerHTML = display.displayHtml()
});


