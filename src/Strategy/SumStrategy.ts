// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 4강 - Strategy
// 유튜브 참고 URL - 
// https://youtu.be/TiHzYc8I3Kk?si=Cw74ax8h68UgaEsQ

// SumStrategy 인터페이스 - 1부터 어떤 수 까지의 총합을 SumPrinter 클래스로 전달해주는 인터페이스

export default interface SumStrategy {
    /// <summary>
    /// 1부터 N까지 합계를 얻기 위한 
    /// get 메서드 선언부
    /// </summary>
    get(N: number): number
}