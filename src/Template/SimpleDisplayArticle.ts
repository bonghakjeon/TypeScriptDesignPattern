// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 5강 - Template Method
// 유튜브 참고 URL - 
// https://youtu.be/vfo-L0q2k2w?si=sDtg0C9brHpAJONo

import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

// 템플릿 구현부 - 템플릿 선언부 추상 클래스(abstract - DisplayArticleTemplate) 상속 받은 클래스 SimpleDisplayArticle, EditableDisplayArticle이다.
//                클래스 SimpleDisplayArticle, EditableDisplayArticle는 추상 클래스(abstract - DisplayArticleTemplate)를 상속 받아서
//                각 단계에 대한 추상 메서드 titleHtml(), contentHtml(), footerHtml()를 구체적으로 구현한다.
//                이 두 클래스는 각각 2개의 상황에 대한 구체적인 처리에 해당된다.

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
    // 생성자 constructor 구현
    constructor(article: Article) {
        super(article)   // super() - 부모 클래스(추상 클래스(abstract - DisplayArticleTemplate))의 생성자 호출 
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
    protected titleHtml(): string {
        return `<h1>${this.article.getTitle()}</h1>`
    }

    /// <summary>
    /// 내용(content)에 해당하는 Html 코드(태그) 변환 및 문자열 출력 
    /// </summary>
    protected contentHtml(): string {
        const items = this.article.getContent().map(item => `<li>${item}</li>`)

        // 불 필요한 기호 콤마(,)를 없애기 위해서 메서드 join 호출시 인자값으로 빈 문자열('')을 입력해야 한다.
        // return `<ul>${items.join()}</ul>`
        return `<ul>${items.join('')}</ul>`
    }

    /// <summary>
    /// 밑바닥 글(footer)에 해당하는 Html 코드(태그) 변환 및 문자열 출력 
    /// </summary>
    protected footerHtml(): string {
        return `<h3>${this.article.getFooter()}</h3>`
    }

}