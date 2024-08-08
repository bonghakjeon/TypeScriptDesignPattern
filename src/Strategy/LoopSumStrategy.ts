// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 4강 - Strategy
// 유튜브 참고 URL - 
// https://youtu.be/TiHzYc8I3Kk?si=Cw74ax8h68UgaEsQ

// LoopSumStrategy 클래스 - SumStrategy 인터페이스를 상속 받아서 1부터 어떤 수까지 총합을 얻는 구체적인 코드가 작성되고 실행한다.
//                          해당 클래스는 for 반복문 이용해서 1부터 어떤 수(N)까지 합을 계산하는 전략을 사용한다.

import SumStrategy from "./SumStrategy";   // SumStrategy 인터페이스 import

export default class LoopSumStrategy implements SumStrategy {

    /// <summary>
    /// 1부터 N까지 합계를 얻기 위한 
    /// get 메서드 실제 구현부
    /// </summary>
    get(N: number): number {
        let sum = 0
        // for 반복문 이용해서 1부터 N까지 합 구하기 
        for(let i=1; i<=N; i++) sum += i
        return sum
    }

}