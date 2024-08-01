// [TypeScript로 보는 GoF의 디자인 패턴] 스터디
// 2강 실습환경 구성
// 유튜브 참고 URL - 
// https://youtu.be/g5dRKsBmlpM?si=qM_DhYAON3Y4Pmc4

// index.html 파일을 웹 브라우저(Chrome)를 통해서 실행하기 위해서 VSCode에서 확장 프로그램 "Live Server" 설치 필요함.  
// 확장 프로그램 "Live Server" 설치 완료 후 폴더 "dist" 하위 "index.html" 마우스 우클릭 -> "Open with Live Server" 클릭 
// -> 웹 브라우저(Chrome)에서 index.html 파일이 출력 된다.  
// -> 웹 브라우저(Chrome)에서 단축키 F12 누르고 -> 개발자 도구 화면 출력되면, 상위 버튼 Console 클릭시 
// -> index.ts 파일의 코드 console.log("Hello") 실행 결과로 "Hello"가 출력된다.

// 터미널 명령어(Command) "npm run bundle" 의미? 
// npm을 통해서 bundle을 실행하라는 의미이다.
// 여기서 bundle은 webpack을 의미함.
// 즉 webpack을 실행하라는 의미이다.
// 터미널 명령어(Command) "npm run bundle"가 정상적으로 성공했다면 폴더 "dist"에 bundle.js 파일이 새로 생성된 것을 확인할 수 있다. 

// 폴더 "dist"에 존재하는 bundle.js 파일에 존재하는 코드의 내용은 
// 폴더 "src"에 존재하는 index.ts 파일과 코드의 내용이 거의 동일하다.
// 코드의 내용이 거의 동일한 이유는
// index.ts에 작성된 타입스크립트 코드가 자바스크립트 코드로 컴파일되어
// bundle.js로 만들어 지기 때문이다.

// index.ts에 작성된 타입스크립트 코드 수정 및 저장 후 
// 수정한 결과를 웹 브라우저에서 확인 방법 1
// 터미널 명령어(Command) "npm run bundle" 다시 입력 및 엔터
// -> 폴더 "dist" 하위 "index.html" 마우스 우클릭 -> "Open with Live Server" 클릭 
// -> 웹 브라우저(Chrome)에서 index.html 파일이 출력 된다.  
// -> 웹 브라우저(Chrome)에서 단축키 F12 누르고 -> 개발자 도구 화면 출력되면, 상위 버튼 Console 클릭시 
// -> index.ts 파일의 코드 console.log("Hello"), console.log("새해 복 많이 받으세요.") 실행 결과로 "Hello", "새해 복 많이 받으세요."가 출력된다.

// index.ts에 작성된 타입스크립트 코드 수정 및 저장 후 
// 수정한 결과를 웹 브라우저에서 확인 방법 2
// 터미널 명령어(Command) "npm run bundle" 입력 및 엔터 하지 않아도 
// 코드 수정 및 저장하면 자동으로 변경된 타입스크립트 코드가 자바스크립트 코드로
// 변경되도록 설정할 수 있다.

// 1. 이를 위해서 package.json에서 항목 "scripts" 부분을 아래 처럼 수정
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "bundle": "webpack",
//     "watch": "webpack --watch",
//     "start": "npm run bundle && npm run watch"
// },

// 2. 그리고 나서 터미널 명령어(Command) "npm start" 입력 및 엔터 

// 3. index.ts에서 타입스크립트 코드 수정 

// 4. 터미널 명령어(Command) "npm run bundle" 입력 하지 않아도 웹 브라우저(Chrome)에서 index.html 파일이 출력 된다.  
// -> 웹 브라우저(Chrome)에서 단축키 F12 누르고 -> 개발자 도구 화면 출력되면, 상위 버튼 Console 클릭시 
// -> index.ts 파일에서 수정 및 저장한 코드 console.log("Hello"), console.log("새해 복 많이 받으세요.") console.log("새해에는 늘 건강하세요.")
// 실행 결과로 "Hello", "새해 복 많이 받으세요.", "새해에는 늘 건강하세요."가 출력된다.

// 터미널 명령어(Command) "npm start" 사용하면 변경된 사항들이 웹브라우저(Chrome)에서 자동으로 반영되는 이유?
// index.ts 파일에서 타입스크립트 코드 수정 및 저장하는 것을 계속 감시해서 변경된 내용이 있으면
// 컴파일 되는 프로그램이 계속 뒷단에서 돌고있기 때문이다.

// 해당 터미널 명령어(Command) "npm start"를 중지하려면
// 터미널에서 단축키 Ctrl + C 입력 -> 터미널 창에서 메시지 "일괄 작업을 끝내시겠습니끼 (Y/N)?" 출력 -> y 입력 및 엔터 
// 이렇게 하면 더이상 index.ts 파일에서 타입스크립트 코드 수정 및 저장하여도 자동으로 변경된 사항들이 웹브라우저(Chrome)에서 자동으로 반영되지 않는다.
// 다시 자동으로 컴파일 되는 기능을 실행하려면 터미널 명령어(Command) "npm start" 입력 및 엔터키 치면 된다.

// 폴더 "src"는 타입 스크립트로 작성된 파일들이 존재함.
console.log("Hello")
console.log("새해 복 많이 받으세요.")
console.log("새해에는 늘 건강하세요.")
console.log("새해에는 좋은 일만 가득하세요.")
console.log("새해에는 좋은 일만 가득하세요!")