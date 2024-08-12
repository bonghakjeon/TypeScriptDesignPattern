// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 5강 - Template Method
// 유튜브 참고 URL - 
// https://youtu.be/vfo-L0q2k2w?si=sDtg0C9brHpAJONo

import Article from "./Article";

// 템플릿 선언부 - 추상 클래스(abstract) DisplayArticleTemplate
//                해당 기능을 실행할 때 필요한 각 단계를 정해진 순서대로 실행해 주는 추상 클래스(abstract)이다.
//                즉, 해당 추상 클래스(abstract)는 각 단계(1, 2, 3)에 해당하는 메서드들을 순서대로 호출만 해주는 템플릿 메서드를 구현한 추상 클래스(abstract)이다.
//                추상 클래스(abstract)인 이유는 각 단계(1, 2, 3)에 해당하는 메서드들은 선언만 되어 있을 뿐 실제로는 구현되지 않기 때문이다.
//                추상 메서드는 title(), content()로 선언되어 있다.

// 추상 클래스(abstract) DisplayArticleTemplate란? 
// 각 단계의 실행 순서에 대한 메서드들을 순서대로 호출만 해주는 템플릿 메서드를 제공하는 추상 클래스(abstract)이다.

export default abstract class DisplayArticleTemplate {
    // 처리할(또는 출력할) 데이터에 대한 Article 클래스 객체 "article"를 protected 접근자로 지정한 필드로 구현 
    // protected 접근자로 지정한 이유는
    // 추상 클래스(abstract) DisplayArticleTemplate를 상속받는 자식 클래스(파생 클래스 - SimpleDisplayArticle, EditableDisplayArticle)에서
    // 접근할 수 있도록 하기 위해서이다.

    // 생성자(constructor)를 통해서 필드(Article 클래스 객체 "article")를 protected 접근자로 추가
    constructor(protected article: Article) {}

    // 각 단계(1, 2, 3)를 정해진 순서대로 호출해주는 템플릿 메서드 "displayHtml" 추가 
    // 해당 템플릿 메서드 "displayHtml"를 readonly와 함께 메서드에 대한 정의를 애로우 함수 문법(() => { ... })으로 정의해서 
    // 추상 클래스(abstract) DisplayArticleTemplate를 상속받는 자식 클래스(파생 클래스 - SimpleDisplayArticle, EditableDisplayArticle)에서는
    // 해당 템플릿 메서드 "displayHtml"를 재정의할 수 없도록 한다.
    // 이렇게 자식 클래스(파생 클래스)에서 코드를 변경하지 못하도록 막으면 좀 더 코드가 견고해지지만
    // 이를 지원하지 않는 언어에서는 이렇게 하지 않아도 된다.
    public readonly displayHtml = () => {
        // 단계 1 - 메서드 titleHtml() 호출 
        // 단계 2 - 메서드 contentHtml() 호출
        // 단계 3 - 메서드 footerHtml() 호출 
        return `
            ${this.titleHtml()}    
            ${this.contentHtml()}
            ${this.footerHtml()}
        `
    }

    // 구현부가 없는 추상 메서드(titleHtml, contentHtml, footerHtml) 선언 
    protected abstract titleHtml(): string     
    protected abstract contentHtml(): string   
    protected abstract footerHtml(): string
}