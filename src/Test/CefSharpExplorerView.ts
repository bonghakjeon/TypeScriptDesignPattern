// TODO : C# 데이터 모델 제네릭 기반 소스코드 -> TypeScript로 변환해서 구현하기 (2024.10.11 jbh)
// 참고 URL - https://chatgpt.com/c/6708892e-520c-8011-87b8-77c8cc2baeb9
// (기존) C# 데이터 모델 제네릭 기반 소스코드
// public class CefSharpExplorerView<TData> : CefSharpExplorerView where TData : CefSharpExplorerView<TData> { }
// public class CefSharpExplorerView : TCefSharpExplorerView<CefSharpExplorerView> { }

// (변경) TypeScript로 변환한 데이터 모델 제네릭 기반 소스코드
class CefSharpExplorerView<TData extends CefSharpExplorerView<TData>> extends CefSharpExplorerViewBase {}
class CefSharpExplorerViewBase extends CefSharpExplorerView<CefSharpExplorerViewBase> {}
