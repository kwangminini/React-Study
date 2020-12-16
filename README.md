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

#### 웹팩 기본 개념
- 다양한 기능 제공
  - 파일 내용을 기반으로 파일 이름에 해시값 추가 => 효율적으로 브라우저 캐싱 이용
  - 사용되지 않은 코드 제거
  - 자바스크립트 압충
  - JS에서 CSS, JSON, 텍스트 파일 등을 일반 모듈처럼 불러오기
  - 환경 변수 주입
- 웹팩을 사용하는 가장 큰 이유 => *모듈 시스템(ESM, commonJS)을 사용하고 싶어서*
- AS-IS
```
<html>
  <head>
    <script type="text/javascript" src="javascript_file_1.js"></script>
    <script type="text/javascript" src="javascript_file_2.js"></script>
    ...
    <script type="text/javascript" src="javascript_file_999.js"></script>
  </head>
</html>
```
- TO-BE
```
<html>
  <head>
    <script type="text/javascript" src="app.js"></script>
  </head>
</html>
```

#### CSS 작성 방법
- 일반적인 CSS 파일로 작성하기 (CSS 파일명 ex) Box.css)
  - CSS 빌드 시 같은 이름으로 정의된 CSS가 덮어씌워질 수 있다 (충돌 발생)
- css-module로 작성하기 (CSS 파일명 ex) Box.module.css)
  - 각 CSS의 속성 값에 해시 값이 부여되어서 각 클래스명은 고유한 이름을 갖게 되어 충돌X
- Sass로 작성하기 (CSS 파일명 ex) Box.module.scss)
  - import를 통해 CSS에서 변수를 다룰 수 있어 공통 CSS를 잡기 편함
- css in js로 작성하기 (styled-components)
  - CSS코드를 Javascript 코드에 넣어 재사용 가능한 구조로 작성 (Javascript 파일로 관리)
  - CSS를 잘 아는 JS개발자가 있다면 이 방법 추천
  - CSS를 담당하는 Mark Up개발자가 있다면 이방법 비추천
  
#### 단일 페이지 애플리케이션 (SPA) 
- SPA가 가능한 조건
  - 자바스크립트에서 브라우저로 페이지 전환 요청을 보낼 수 있음
    - 단, 브라우저는 서버로 요청을 보내지 않아야 함
  - 브라우저의 뒤로가기와 같은 사용자의 페이지 전환 요청을 자바스크립트에서 처리할 수 있음
    - 이때도 브라우저는 서버로 요청을 보내지 않아야 함
- 위 조건을 만족시켜주는 브라우저 API
  - 자바스크립트가 페이지 전환을 하고싶을 때 브라우저에게 페이지 전환 이벤트를 알려주는 방법 : pushState, replaceState 함수
  - 반대로, 브라우저에서 사용자가 브라우저 UI를 통해서 페이지 전환을 하려고할 때 : popState 이벤트
    
  

