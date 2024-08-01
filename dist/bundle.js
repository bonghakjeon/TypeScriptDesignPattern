/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
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
console.log("Hello");
console.log("새해 복 많이 받으세요.");
console.log("새해에는 늘 건강하세요.");
console.log("새해에는 좋은 일만 가득하세요.");
console.log("새해에는 좋은 일만 가득하세요!");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixtREFBbUQ7QUFFbkQsdUZBQXVGO0FBQ3ZGLGlHQUFpRztBQUNqRyw4Q0FBOEM7QUFDOUMsd0VBQXdFO0FBQ3hFLGdFQUFnRTtBQUVoRSx5Q0FBeUM7QUFDekMsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsK0ZBQStGO0FBRS9GLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MscUJBQXFCO0FBQ3JCLDRDQUE0QztBQUM1QywwQkFBMEI7QUFFMUIscUNBQXFDO0FBQ3JDLDJCQUEyQjtBQUMzQiwrQ0FBK0M7QUFDL0Msc0VBQXNFO0FBQ3RFLDhDQUE4QztBQUM5Qyx3RUFBd0U7QUFDeEUsK0dBQStHO0FBRS9HLHFDQUFxQztBQUNyQywyQkFBMkI7QUFDM0Isb0RBQW9EO0FBQ3BELDhDQUE4QztBQUM5QyxrQkFBa0I7QUFFbEIscURBQXFEO0FBQ3JELGVBQWU7QUFDZiw2REFBNkQ7QUFDN0QsMkJBQTJCO0FBQzNCLGtDQUFrQztBQUNsQyxpREFBaUQ7QUFDakQsS0FBSztBQUVMLGtEQUFrRDtBQUVsRCw4QkFBOEI7QUFFOUIsMEZBQTBGO0FBQzFGLHdFQUF3RTtBQUN4RSwrR0FBK0c7QUFDL0csMERBQTBEO0FBRTFELDJFQUEyRTtBQUMzRSwyREFBMkQ7QUFDM0Qsa0NBQWtDO0FBRWxDLHlDQUF5QztBQUN6QyxnRkFBZ0Y7QUFDaEYsNkZBQTZGO0FBQzdGLHdFQUF3RTtBQUV4RSxtQ0FBbUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdGRlc2lnbnBhdHRlcm4vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gW1R5cGVTY3JpcHTroZwg67O064qUIEdvRuydmCDrlJTsnpDsnbgg7Yyo7YS0XSDsiqTthLDrlJRcclxuLy8gMuqwlSDsi6TsirXtmZjqsr0g6rWs7ISxXHJcbi8vIOycoO2KnOu4jCDssLjqs6AgVVJMIC0gXHJcbi8vIGh0dHBzOi8veW91dHUuYmUvZzVkUktzQm1scE0/c2k9cU1fRGhZQU9OM1k0UG1jNFxyXG5cclxuLy8gaW5kZXguaHRtbCDtjIzsnbzsnYQg7Ju5IOu4jOudvOyasOyggChDaHJvbWUp66W8IO2Gte2VtOyEnCDsi6TtlontlZjquLAg7JyE7ZW07IScIFZTQ29kZeyXkOyEnCDtmZXsnqUg7ZSE66Gc6re4656oIFwiTGl2ZSBTZXJ2ZXJcIiDshKTsuZgg7ZWE7JqU7ZWoLiAgXHJcbi8vIO2ZleyepSDtlITroZzqt7jrnqggXCJMaXZlIFNlcnZlclwiIOyEpOy5mCDsmYTro4wg7ZuEIO2PtOuNlCBcImRpc3RcIiDtlZjsnIQgXCJpbmRleC5odG1sXCIg66eI7Jqw7IqkIOyasO2BtOumrSAtPiBcIk9wZW4gd2l0aCBMaXZlIFNlcnZlclwiIO2BtOumrSBcclxuLy8gLT4g7Ju5IOu4jOudvOyasOyggChDaHJvbWUp7JeQ7IScIGluZGV4Lmh0bWwg7YyM7J287J20IOy2nOugpSDrkJzri6QuICBcclxuLy8gLT4g7Ju5IOu4jOudvOyasOyggChDaHJvbWUp7JeQ7IScIOuLqOy2le2CpCBGMTIg64iE66W06rOgIC0+IOqwnOuwnOyekCDrj4Tqtawg7ZmU66m0IOy2nOugpeuQmOuptCwg7IOB7JyEIOuyhO2KvCBDb25zb2xlIO2BtOumreyLnCBcclxuLy8gLT4gaW5kZXgudHMg7YyM7J287J2YIOy9lOuTnCBjb25zb2xlLmxvZyhcIkhlbGxvXCIpIOyLpO2WiSDqsrDqs7zroZwgXCJIZWxsb1wi6rCAIOy2nOugpeuQnOuLpC5cclxuXHJcbi8vIO2EsOuvuOuEkCDrqoXroLnslrQoQ29tbWFuZCkgXCJucG0gcnVuIGJ1bmRsZVwiIOydmOuvuD8gXHJcbi8vIG5wbeydhCDthrXtlbTshJwgYnVuZGxl7J2EIOyLpO2Wie2VmOudvOuKlCDsnZjrr7jsnbTri6QuXHJcbi8vIOyXrOq4sOyEnCBidW5kbGXsnYAgd2VicGFja+ydhCDsnZjrr7jtlaguXHJcbi8vIOymiSB3ZWJwYWNr7J2EIOyLpO2Wie2VmOudvOuKlCDsnZjrr7jsnbTri6QuXHJcbi8vIO2EsOuvuOuEkCDrqoXroLnslrQoQ29tbWFuZCkgXCJucG0gcnVuIGJ1bmRsZVwi6rCAIOygleyDgeyggeycvOuhnCDshLHqs7Xtlojri6TrqbQg7Y+0642UIFwiZGlzdFwi7JeQIGJ1bmRsZS5qcyDtjIzsnbzsnbQg7IOI66GcIOyDneyEseuQnCDqsoPsnYQg7ZmV7J247ZWgIOyImCDsnojri6QuIFxyXG5cclxuLy8g7Y+0642UIFwiZGlzdFwi7JeQIOyhtOyerO2VmOuKlCBidW5kbGUuanMg7YyM7J287JeQIOyhtOyerO2VmOuKlCDsvZTrk5zsnZgg64K07Jqp7J2AIFxyXG4vLyDtj7TrjZQgXCJzcmNcIuyXkCDsobTsnqztlZjripQgaW5kZXgudHMg7YyM7J286rO8IOy9lOuTnOydmCDrgrTsmqnsnbQg6rGw7J2YIOuPmeydvO2VmOuLpC5cclxuLy8g7L2U65Oc7J2YIOuCtOyaqeydtCDqsbDsnZgg64+Z7J287ZWcIOydtOycoOuKlFxyXG4vLyBpbmRleC50c+yXkCDsnpHshLHrkJwg7YOA7J6F7Iqk7YGs66a97Yq4IOy9lOuTnOqwgCDsnpDrsJTsiqTtgazrpr3tirgg7L2U65Oc66GcIOy7tO2MjOydvOuQmOyWtFxyXG4vLyBidW5kbGUuanProZwg66eM65Ok7Ja0IOyngOq4sCDrlYzrrLjsnbTri6QuXHJcblxyXG4vLyBpbmRleC50c+yXkCDsnpHshLHrkJwg7YOA7J6F7Iqk7YGs66a97Yq4IOy9lOuTnCDsiJjsoJUg67CPIOyggOyepSDtm4QgXHJcbi8vIOyImOygle2VnCDqsrDqs7zrpbwg7Ju5IOu4jOudvOyasOyggOyXkOyEnCDtmZXsnbgg67Cp67KVIDFcclxuLy8g7YSw66+464SQIOuqheugueyWtChDb21tYW5kKSBcIm5wbSBydW4gYnVuZGxlXCIg64uk7IucIOyeheugpSDrsI8g7JeU7YSwXHJcbi8vIC0+IO2PtOuNlCBcImRpc3RcIiDtlZjsnIQgXCJpbmRleC5odG1sXCIg66eI7Jqw7IqkIOyasO2BtOumrSAtPiBcIk9wZW4gd2l0aCBMaXZlIFNlcnZlclwiIO2BtOumrSBcclxuLy8gLT4g7Ju5IOu4jOudvOyasOyggChDaHJvbWUp7JeQ7IScIGluZGV4Lmh0bWwg7YyM7J287J20IOy2nOugpSDrkJzri6QuICBcclxuLy8gLT4g7Ju5IOu4jOudvOyasOyggChDaHJvbWUp7JeQ7IScIOuLqOy2le2CpCBGMTIg64iE66W06rOgIC0+IOqwnOuwnOyekCDrj4Tqtawg7ZmU66m0IOy2nOugpeuQmOuptCwg7IOB7JyEIOuyhO2KvCBDb25zb2xlIO2BtOumreyLnCBcclxuLy8gLT4gaW5kZXgudHMg7YyM7J287J2YIOy9lOuTnCBjb25zb2xlLmxvZyhcIkhlbGxvXCIpLCBjb25zb2xlLmxvZyhcIuyDiO2VtCDrs7Ug66eO7J20IOuwm+ycvOyEuOyalC5cIikg7Iuk7ZaJIOqysOqzvOuhnCBcIkhlbGxvXCIsIFwi7IOI7ZW0IOuztSDrp47snbQg67Cb7Jy87IS47JqULlwi6rCAIOy2nOugpeuQnOuLpC5cclxuXHJcbi8vIGluZGV4LnRz7JeQIOyekeyEseuQnCDtg4DsnoXsiqTtgazrpr3tirgg7L2U65OcIOyImOyglSDrsI8g7KCA7J6lIO2bhCBcclxuLy8g7IiY7KCV7ZWcIOqysOqzvOulvCDsm7kg67iM65287Jqw7KCA7JeQ7IScIO2ZleyduCDrsKnrspUgMlxyXG4vLyDthLDrr7jrhJAg66qF66C57Ja0KENvbW1hbmQpIFwibnBtIHJ1biBidW5kbGVcIiDsnoXroKUg67CPIOyXlO2EsCDtlZjsp4Ag7JWK7JWE64+EIFxyXG4vLyDsvZTrk5wg7IiY7KCVIOuwjyDsoIDsnqXtlZjrqbQg7J6Q64+Z7Jy866GcIOuzgOqyveuQnCDtg4DsnoXsiqTtgazrpr3tirgg7L2U65Oc6rCAIOyekOuwlOyKpO2BrOumve2KuCDsvZTrk5zroZxcclxuLy8g67OA6rK965CY64+E66GdIOyEpOygle2VoCDsiJgg7J6I64ukLlxyXG5cclxuLy8gMS4g7J2066W8IOychO2VtOyEnCBwYWNrYWdlLmpzb27sl5DshJwg7ZWt66qpIFwic2NyaXB0c1wiIOu2gOu2hOydhCDslYTrnpgg7LKY65+8IOyImOyglVxyXG4vLyBcInNjcmlwdHNcIjoge1xyXG4vLyAgICAgXCJ0ZXN0XCI6IFwiZWNobyBcXFwiRXJyb3I6IG5vIHRlc3Qgc3BlY2lmaWVkXFxcIiAmJiBleGl0IDFcIixcclxuLy8gICAgIFwiYnVuZGxlXCI6IFwid2VicGFja1wiLFxyXG4vLyAgICAgXCJ3YXRjaFwiOiBcIndlYnBhY2sgLS13YXRjaFwiLFxyXG4vLyAgICAgXCJzdGFydFwiOiBcIm5wbSBydW4gYnVuZGxlICYmIG5wbSBydW4gd2F0Y2hcIlxyXG4vLyB9LFxyXG5cclxuLy8gMi4g6re466as6rOgIOuCmOyEnCDthLDrr7jrhJAg66qF66C57Ja0KENvbW1hbmQpIFwibnBtIHN0YXJ0XCIg7J6F66ClIOuwjyDsl5TthLAgXHJcblxyXG4vLyAzLiBpbmRleC50c+yXkOyEnCDtg4DsnoXsiqTtgazrpr3tirgg7L2U65OcIOyImOyglSBcclxuXHJcbi8vIDQuIO2EsOuvuOuEkCDrqoXroLnslrQoQ29tbWFuZCkgXCJucG0gcnVuIGJ1bmRsZVwiIOyeheugpSDtlZjsp4Ag7JWK7JWE64+EIOybuSDruIzrnbzsmrDsoIAoQ2hyb21lKeyXkOyEnCBpbmRleC5odG1sIO2MjOydvOydtCDstpzroKUg65Cc64ukLiAgXHJcbi8vIC0+IOybuSDruIzrnbzsmrDsoIAoQ2hyb21lKeyXkOyEnCDri6jstpXtgqQgRjEyIOuIhOultOqzoCAtPiDqsJzrsJzsnpAg64+E6rWsIO2ZlOuptCDstpzroKXrkJjrqbQsIOyDgeychCDrsoTtirwgQ29uc29sZSDtgbTrpq3si5wgXHJcbi8vIC0+IGluZGV4LnRzIO2MjOydvOyXkOyEnCDsiJjsoJUg67CPIOyggOyepe2VnCDsvZTrk5wgY29uc29sZS5sb2coXCJIZWxsb1wiKSwgY29uc29sZS5sb2coXCLsg4jtlbQg67O1IOunjuydtCDrsJvsnLzshLjsmpQuXCIpIGNvbnNvbGUubG9nKFwi7IOI7ZW07JeQ64qUIOuKmCDqsbTqsJXtlZjshLjsmpQuXCIpXHJcbi8vIOyLpO2WiSDqsrDqs7zroZwgXCJIZWxsb1wiLCBcIuyDiO2VtCDrs7Ug66eO7J20IOuwm+ycvOyEuOyalC5cIiwgXCLsg4jtlbTsl5DripQg64qYIOqxtOqwle2VmOyEuOyalC5cIuqwgCDstpzroKXrkJzri6QuXHJcblxyXG4vLyDthLDrr7jrhJAg66qF66C57Ja0KENvbW1hbmQpIFwibnBtIHN0YXJ0XCIg7IKs7Jqp7ZWY66m0IOuzgOqyveuQnCDsgqztla3rk6TsnbQg7Ju567iM65287Jqw7KCAKENocm9tZSnsl5DshJwg7J6Q64+Z7Jy866GcIOuwmOyYgeuQmOuKlCDsnbTsnKA/XHJcbi8vIGluZGV4LnRzIO2MjOydvOyXkOyEnCDtg4DsnoXsiqTtgazrpr3tirgg7L2U65OcIOyImOyglSDrsI8g7KCA7J6l7ZWY64qUIOqyg+ydhCDqs4Tsho0g6rCQ7Iuc7ZW07IScIOuzgOqyveuQnCDrgrTsmqnsnbQg7J6I7Jy866m0XHJcbi8vIOy7tO2MjOydvCDrkJjripQg7ZSE66Gc6re4656o7J20IOqzhOyGjSDrkrfri6jsl5DshJwg64+M6rOg7J6I6riwIOuVjOusuOydtOuLpC5cclxuXHJcbi8vIO2VtOuLuSDthLDrr7jrhJAg66qF66C57Ja0KENvbW1hbmQpIFwibnBtIHN0YXJ0XCLrpbwg7KSR7KeA7ZWY66Ck66m0XHJcbi8vIO2EsOuvuOuEkOyXkOyEnCDri6jstpXtgqQgQ3RybCArIEMg7J6F66ClIC0+IO2EsOuvuOuEkCDssL3sl5DshJwg66mU7Iuc7KeAIFwi7J286rSEIOyekeyXheydhCDrgZ3rgrTsi5zqsqDsirXri4jrgbwgKFkvTik/XCIg7Lac66ClIC0+IHkg7J6F66ClIOuwjyDsl5TthLAgXHJcbi8vIOydtOugh+qyjCDtlZjrqbQg642U7J207IOBIGluZGV4LnRzIO2MjOydvOyXkOyEnCDtg4DsnoXsiqTtgazrpr3tirgg7L2U65OcIOyImOyglSDrsI8g7KCA7J6l7ZWY7Jes64+EIOyekOuPmeycvOuhnCDrs4Dqsr3rkJwg7IKs7ZWt65Ok7J20IOybueu4jOudvOyasOyggChDaHJvbWUp7JeQ7IScIOyekOuPmeycvOuhnCDrsJjsmIHrkJjsp4Ag7JWK64qU64ukLlxyXG4vLyDri6Tsi5wg7J6Q64+Z7Jy866GcIOy7tO2MjOydvCDrkJjripQg6riw64ql7J2EIOyLpO2Wie2VmOugpOuptCDthLDrr7jrhJAg66qF66C57Ja0KENvbW1hbmQpIFwibnBtIHN0YXJ0XCIg7J6F66ClIOuwjyDsl5TthLDtgqQg7LmY66m0IOuQnOuLpC5cclxuXHJcbi8vIO2PtOuNlCBcInNyY1wi64qUIO2DgOyehSDsiqTtgazrpr3tirjroZwg7J6R7ISx65CcIO2MjOydvOuTpOydtCDsobTsnqztlaguXHJcbmNvbnNvbGUubG9nKFwiSGVsbG9cIilcclxuY29uc29sZS5sb2coXCLsg4jtlbQg67O1IOunjuydtCDrsJvsnLzshLjsmpQuXCIpXHJcbmNvbnNvbGUubG9nKFwi7IOI7ZW07JeQ64qUIOuKmCDqsbTqsJXtlZjshLjsmpQuXCIpXHJcbmNvbnNvbGUubG9nKFwi7IOI7ZW07JeQ64qUIOyii+ydgCDsnbzrp4wg6rCA65Od7ZWY7IS47JqULlwiKVxyXG5jb25zb2xlLmxvZyhcIuyDiO2VtOyXkOuKlCDsoovsnYAg7J2866eMIOqwgOuTne2VmOyEuOyalCFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=