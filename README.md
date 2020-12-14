# React-Study
## 실전 리액트 프로그래밍

### 1. 리액트 프로젝트 시작하기

#### createElement 함수의 구조 
React.createElement(component, props, ...children) => ReactElement
- 첫 번째 매개변수 component는 일반적으로 문자열이나 리액트 컴포넌트다. component의 인수가 문자열이면 HTML 태그에 해당하는 돔 요소가 생성
- 두 번째 매개변수 props는 컴포넌트가 사용하는 데이터를 나타낸다. 돔 요소의 경우 style, className 등의 데이터가 사용될 수 있다
- 세 번째 매개변수 children은 해당 컴포넌트가 감싸고 있는 내부의 컴포넌트를 가리킨다.
- 대부분의 리액트 개발자는 createElement를 직접 작성하지 않는다. 일반적으로 바벨(Babel)의 도움을 받아서 JSX 문법을 사용
```
<div>
  <p>hello</p>
  <p>world</p>
</div>

createElement(
  'div',
  null,
  createElement('p',null,'hello'),
  createElement('p',null,'world')
)
```

#### 바벨(Babel)
바벨(Babel)은 자바스크립트 코드를 변환해 주는 컴파일러
- 최신 자바스크립트 문법을 지원하지 않는 환경에서도 최신 문법 사용 가능
- 리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용
- 바벨이 jSX문법으로 작성된 코드를 createElement 함수를 호출하는 코드로 변환