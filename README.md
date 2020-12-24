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
    
----------------------------------------
 ### 3. 중요하지만 헷갈리는 리액트 개념 이해하기
 
 #### useState
 ```
 const [todoList, setTodoList] = useState([]);
 ```
 - useState의 매개변수는 상태값의 초기값을 의미
 - useState는 배열을 반환 (배열의 첫번째 아이템 => 상태값, 두번째 아이템 => 상태값 변경 함수)
 
 
 #### state && props
 - state : 불변성 X, 하지만 불변으로 관리하는게 좋음 
   - 객체를 불변변수로 관리 : 전개 연산자(...) 사용
 - props : 불변성 O
 - 부모 컴포넌트 렌더링하면 자식 컴포넌트도 따라서 렌더링
   - 속성값이 변경될 때만 렌더링 -> React.memo
   ```
   function Title({title}){}
   export default React.memo(Title); //속성값 title이 변경될 때만 이 컴포넌트가 렌더링
   ```

#### 컴포넌트에서 반환할 수 있는 값
- React 요소 ( div, p, h1 등)
- 문자열, 숫자, 배열(key값 필요)
- Fragment(요소의 순서가 key역할을 해서 key값 필요 x)
  - 원하지 않는 div 대신 fragment 사용 (<React.Fragment> or <>)
  - {null}, {false}, {true} -> 조건부 렌더링할 때 유용
- 리액트 Portal 
  - public > index.html에 <div id='root'></div> 말고 다른 div 만들어서 렌더링 가능
  - ReactDOM.createPortal() : 보통 Modal을 위해 사용

#### 리액트 훅(Hook)
- 컴포넌트에 기능을 추가할 때 사용하는 함수
  - ex) 컴포넌트에 상태값 추가, 자식 요소에 접근
- 리액트 16.8에 추가
  - 이전에는 클래스형 컴포넌트 사용
  - 클래스형 컴포넌트보다 장점이 많으며 리액트팀에서도 훅(Hook)에 집중
- useState : 상태값 추가
  - 비동기 방식이면서 배치(Batch)로 처리 (이유 : 동기화 방식이면 상태값이 변할 때 마다 다시 렌더링하므로 성능저하 발생)
  - 동기화 방식처럼 사용 방법 : 상태값 변경 함수에 함수를 입력하는 것 (ex) setCount(v => v+1))
- useEffect : 부수효과(외부의 상태를 변경하는 것) 처리
  - 서버 API호출, 이벤트 핸들러 등록 등 
  - 렌더링 후에 비동기식으로 작동
  - 두번째 인자에 배열(의존성 배열)을 넣을 수 있어, 이 배열에 있는 값이 변경될 때에만 부수효과 함수 실행 / 이 배열에는 지역함수, 지역변수 모두 넣어줘야한다.
  - 부수함수의 return 값을 부수함수로 한다면 이것은 컴포넌트가 unmount 될 때 한번 실행한다. (보통 event handler를 등록/해제 할 때 사용)
- 리액트에서 관리하지 않는 외부에서 호출하는 경우에는 배치(batch)로 처리 안됨
  - 상태값 변경 함수 호출할 때 마다 렌더링 
  - 외부에서 호출할 때도 배치로 처리되길 원한다면 batchedUpdate 함수 호출
  - **concurrent Mode에서는 외부에서 호출되는 함수도 배치처리 될 예정**
- 커스터마이징 함수로 꺼내서 사용 가능

#### 리액트 훅(Hook) 사용 시 지켜야 할 규칙
- 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 함
  - if문/for문/함수 안에서 훅을 사용하면 안됨
- 훅은 함수형 컴포넌트 혹은 커스텀 훅 안에서만 호출되어야 함

#### Context
- props를 부모 컴포넌트에서 자식 컴포넌트로 전달해 줄 때 자식 컴포넌트와 부모 컴포넌트가 멀리 떨어져 있을 경우 중간에 계속 props를 전달해야 하는 불편함을 제거하기 위한 함수
- 초기에 createContext('초기값')을 통해 객체를 반환
- 부모 : Provider / 자식 : Consumer로 구분
  - Consumer입장에서는 가장 가까운 Provider의 value값을 참조한다.
  - root까지 Provider를 찾지 못한 경우 createContext('초기값')으로 설정된 초기값을 참조한다.
- Provider value값이 변하면 Consumer는 렌더링 된다.
  - 이 때, 중간층 컴포넌트는 렌더링 되지 않는다.
- Consumer 대신에 Hook을 이용해서 useContext()로 대체 가능
  - 따라서 Consumer 컴포넌트를 사용하는 일은 거의 없다. useContext이용

----
### 6. 리덕스로 상태 관리하기

#### 리덕스 (redux)
- 컴포넌트 코드로부터 상태 관리 코드를 분리할 수 있음
- 미들웨어를 활용한 다양한 기능 추가
  - 강력한 미들웨어 라이브러리 (redux-saga)
  - 로컬 스토리지에 데이터 저장하기 및 불러오기
- SSR 시 데이터 전달이 간편
- react context보다 효율적인 렌더링 가능

#### 액션 (action)
```
store.dispatch({type: 'todo/ADD', title: '영화 보기', priority: 'high'});
```
- dispatch 함수는 액션이 발생했다는 것을 리덕스에게 알려주는 함수 (매개변수 = 액션 객체)
- 액션 객체에 type 속성값 말고 원하는 대로 속성을 정의해서 전달할 수 있음 (데이터를 리듀서에서 받아서 처리)
- 액션을 구분하기 위해서 type 속성값을 사용하므로 type 속성값은 유니크 해야함 (위의 예제 처럼 주로 prefix를 붙여서 많이 사용)
```
function addTodo({title, priority}){
  return {type: 'todo/ADD', title, priority};
}
store.dispatch(addTodo({title:'영화 보기', priority: 'high'}));
```
- 위의 예제와 같이 action creator를 만들어서 사용하는 이유 : 각 액션 객체의 구조를 일관성 있게 만들기 위해서

```
const ADD = 'todo/ADD'
function addTodo({title, priority}){
  return {type: ADD, title, priority};
}
store.dispatch(addTodo({title:'영화 보기', priority: 'high'}));
```
- 위의 예제와 같이 type 속성은 action creator에서 사용하기도 하지만 리듀서에서도 사용하기 때문에 상수 변수로 만드는 것이 좋음

#### 미들웨어 (middleware)
```
const myMiddelware = store => next => action => next(action);
```
- 위의 예제와 같이 여러 함수가 엉켜있는 이유 : 결론적인 함수 next(action)에서 store 와 next를 사용하기 위해서
- 미들웨어를 작성할 때 스토어가 필요한 경우가 많음
```
const reportCrash = store => next => action =>{
  try{
    return next(action)
  } catch(err){
    //서버로 예외 정보 전송
  }
}
```
- 위의 예제와 같이 예외처리를 할 수 있음
```
const delayAction = store => next => action =>{
  const delay = action.meta?.delay;
  if (!delay){
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), delay);
  return function cancel(){
    clearTimeout(timeoutId);
  }
}
```
- 위의 예제와 같이 delayAction을 만들 수 있음 (action.meta에 delay라는 값이 있을 때 딜레이를 해줘서 리듀서를 늦게 실행 시킴)
```
const saveToLocalStorage = store => next => action => {
  if (action.meta?.localStorageKey){
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
  return next(action);
}
```
- 위의 예제와 같이 localStorage에 저장해주는 미들웨어도 가능함

#### 리듀서 (reducer)
- 리듀서는 액션이 발생했을 때 새로운 상태값을 만드는 함수
- 리듀서 작성 중 주의해야할 점 
  ```
  function reducer(state = INITIAL_STATE, action) {
    return produce(state, draft => {
      switch(action.type){
        case SET_SELECTED_PEOPLE:
          draft.selectedPeople = draft.peopleList.find(
            item => item.id === action.id  
          );
          break;
        case EDIT_PEOPLE_NAME:
          const people = draft.peopleList.find(item => item.id === action.id);
          people.name = action.name;
          break;
      }
    });
  }
  ```
  - 위의 예제에서 EDIT_PEOPLE_NAME에서 people객체가 만들어지고 people의 name을 변경해도
    SET_SELECTED_PEOPLE에서는 예전의 객체 레퍼런스를 들고 있기 때문에 name은 변경되지 않은채로 예전값을 참조
  - 따라서, 객체의 레퍼런스가 아니라 객체의 고유한 id값을 참조해서 이 값을 활용하는게 좋다.
- 리듀서는 순수 함수로 작성해야 함 (부수효과(외부 상태 변경) 없어야함)
  - 즉, 서버 API를 리듀서에서 호출하면 안됨 
  - 입력이 같을 때 같은 결과를 출력해야함 (random 함수 사용하면 안됨)
- createReducer
  ```
  function createReducer(initialState, handlerMap){
    return function (state = initialState, action){
      return produce(state, draft => {
        const handler = handlerMap[action.type];
        if (handler){
          handler(draft, action);
        }
      });
    };
  }
  ```
- createStore
  - 리덕스에서 store를 만들 때 사용되는 함수 : createStore(reducer)
  - store는 상태값을 저장하는 역할도 있고 액션 처리가 끝났다는 것을 외부에 알려주는 역할도 함 - store.subscribe() 
  
#### react-redux
- Provider 컴포넌트에서는 리액트에서 액션이 처리됐을 떄 이벤트를 받아서 하위에 있는 다른 컴포넌트가 다시 렌더링 될 수 있도록 도와줌
- 리덕스에서 데이터를 가져올 때는 useSelector Hook을 사용
  - useSelect(state => state.friend.friends) : 리덕스의 상태값이 매개변수로 넘어오고 사용하려는 데이터를 가져오면 됨 -> 안의 함수의 반환 값이 Hook의 반환값이 됨

#### reselect
- 리덕스에 저장된 데이터를 화면에 보여줄 때 다양한 형식으로 가공할 필요 있음 => 이 때 도움되는 reselect 라이브러리
- 메모이제이션 기능을 지원되어 특정한 값이 변경되었을 때만 연산이 되도록 할 수 있음

#### 리덕스에서 비동기 처리
- 리덕스에서 액션이 발생한 이후에 비동기 처리를 통해서 상태값을 변경하고 싶은 경우 (api로 서버에서 데이터 가져올 때)
- redux-thunk
  - 비동기 로직이 간단할 때 사용
  - 가장 간단하게 시작
- redux-observable
  - 비동기 코드가 많을 때 사용
  - RxJS 패키지를 기반으로 만들어짐
    - 리액티브 프로그래밍을 공부해야하므로 진입 장벽이 가장 높음
- redux-saga
  - 비동기 코드가 많을 때 사용
  - 제너레이터를 적극적으로 활용
  - 테스트 코드 작성이 쉬움


