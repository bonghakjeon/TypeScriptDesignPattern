// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 5강 - Template Method
// 유튜브 참고 URL - 
// https://youtu.be/vfo-L0q2k2w?si=sDtg0C9brHpAJONo

// Article 클래스 - 템플릿 선언부(추상 클래스(abstract) DisplayArticleTemplate)와 템플릿 구현부(클래스 SimpleDisplayArticle, EditableDisplayArticle)에서
//                  처리할 데이터(또는 출력할 데이터)를 얻을 수 있는 클래스이다.
//                  Article 클래스는 제목(title), 내용(content) 그리고 밑바닥 글(footer) 필드로 구성된다.
//                  생성자(constructor)를 통해서 위의 3가지 필드(제목(title), 내용(content) 그리고 밑바닥 글(footer))를 private 접근자로 추가한다.

export default class Article {
    // 생성자(constructor)를 통해서 위의 3가지 필드(제목(title), 내용(content) 그리고 밑바닥 글(footer))를 private 접근자로 추가
    constructor(private title: string, private content: string[], private footer: string) {}

    /// <summary>
    /// 필드 - 제목(title) 가져오기
    /// </summary>
    public getTitle(): string {
        return this.title;
    }

    /// <summary>
    /// 필드 - 내용(content) 가져오기
    /// </summary>
    public getContent(): string[] {
        return this.content;
    }

    /// <summary>
    /// 필드 - 밑바닥 글(footer) 가져오기
    /// </summary>
    public getFooter(): string {
        return this.footer;
    }
}