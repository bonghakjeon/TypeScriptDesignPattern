// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 4강 - Strategy
// 유튜브 참고 URL - 
// https://youtu.be/TiHzYc8I3Kk?si=Cw74ax8h68UgaEsQ

// SumPrinter 클래스 - 1부터 어떤 수(N) 까지 총합을 출력해 주는 클래스 
//                     SumStrategy 인터페이스만을 사용해서 코드가 작성되므로, LoopSumStrategy, GaussSumStrategy 클래스를 알 필요가 없다.
//                     이로 인해서 추후에 총합을 계산하는 방법인 다른 알고리즘이 추가되어도 기존의 SumPrinter 클래스의 코드를 변경할 필요가 없다.
//                     해당 클래스는 1부터 어떤 수(N) 까지 총합을 출력하는 메서드 print를 제공한다.


import SumStrategy from "./SumStrategy";              // SumStrategy 인터페이스 import

export default class SumPrinter {

    /// <summary>
    /// SumStrategy 클래스 방식으로 1부터 어떤 수(N) 까지 총합을 출력
    /// 첫 번째 인자 - SumStrategy 인터페이스 
    /// 두 번째 인자 - 1 부터 어떤 수 까지 합을 계산하기 위한 어떤 수의 값(N)
    /// 세 번째 인자 - 1 부터 어떤 수 까지 합을 계산한 결과를 출력할 dom 객체
    /// </summary>
    print(strategy: SumStrategy, N: number, domOutput: Element) {
        const value = strategy.get(N)   // 1. 1부터 N까지의 합을 계산
        domOutput.innerHTML = `1~${N}까지의 총합 = ${value}` // 2. 계산 결과를 domOutput 인자의 innerHtml에 지정
    }
}