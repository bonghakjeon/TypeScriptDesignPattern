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

import SumPrinter from "./SumPrinter";
import GaussSumStrategy from "./GaussSumStrategy";
import LoopSumStrategy from "./LoopSumStrategy";

// 1. SumPrinter 클래스 객체 printer 생성
const printer = new SumPrinter() 

// 2. 1부터 어떤 수(N) 까지 합을 계산한 결과를 출력하기 위한 dom 객체 2개(dom1, dom2) 추가 
const dom1 = document.createElement("h1")
document.body.append(dom1)   // document.body에 dom 객체 추가(append)

const dom2 = document.createElement("h1")
document.body.append(dom2)   // document.body에 dom 객체 추가(append)

// 아래 3, 4번 처럼 하나의 기능(1부터 어떤 수(N) 까지 합을 계산한 결과를 출력)에 대해서 
// Strategy(전략 알고리즘) 디자인 패턴을 적용하면 
// 서로 다른 방식의 알고리즘(LoopSumStrategy 클래스 방식, GaussSumStrategy 클래스 방식)을 실행 중에 변경할 수 있다.

// 3. LoopSumStrategy 클래스 방식으로 for 반복문으로 1부터 어떤 수(N)까지 합을 구하고
//    1번의 SumPrinter 클래스 객체 printer의 메서드 print 사용해서 웹 브라우저 화면에 dom1 객체에 계산한 결과 출력

// LoopSumStrategy 클래스 방식 
// 어떤 수(N)를 100으로 지정해서 1부터 100까지의 총합 계산 및 웹 브라우저 화면에 dom1 객체에 계산한 결과 출력 
printer.print(new LoopSumStrategy(), 100, dom1)


// 4. GaussSumStrategy 클래스 방식으로 1부터 어떤 수(N)까지 합을 구하고
//    1번의 SumPrinter 클래스 객체 printer의 메서드 print 사용해서 웹 브라우저 화면에 dom2 객체에 계산한 결과 출력

// GaussSumStrategy 클래스 방식
// 어떤 수(N)를 100으로 지정해서 1부터 100까지의 총합 계산 및 웹 브라우저 화면에 dom2 객체에 계산한 결과 출력
printer.print(new GaussSumStrategy(), 100, dom2)






