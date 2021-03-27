# ReactStudy

## 왜 리액트를 쓸까?

> 1. 사용자 경험 - 웹페이지를 이동하는게 아니라, 필요한 부분만 render 해서 사용자경험 증가
> 2. 재사용 컴포넌트
> 3. 데이터 - 화면 일치 쉬움

## Gugudan

1. state란 존재를 바꿈으로서 화면을 바로바로 리액트가 바꿔줌

2. jsx 에서 화면을 그릴 때 하나의 element로 만들어서 리턴 해줘야한다. 만약 여러개의 <div></div><div></div><div></div> 라면?
   <React.Fragment></React.Fragment> or **<></>** 를 이용해주면 된다.

3. react에서 setState()함수를 실행시키면 state가 바뀔 뿐만 아니라 화면도 그린다. 만약 이 함수가 동기적으로 처리 된다면 호출 될 때마다 화면을 다시 그리는데 → setState()함수가 한 컴포넌트 안에 대체 얼마나 많을까? 이는 결국 성능 이슈로 번지기 때문에 리액트는 setState를 비동기로 처리한다. 그래서 한번에 값을 처리해 한번에 render 할 수 있는 것이다.

```jsx
state({count : 0})
this.setState({count : this.state.count + 1)})
this.setState({count : this.state.count + 1)})
this.setState({count : this.state.count + 1)})
this.setState({count : this.state.count + 1)})
```

만약 동기적으로 처리된다면 count가 4가 되는게 아니라 1 이 되는 것을 볼 수 있다.  
그래서 이전 state의 값을 이용해야 한다면,
```jsx
this.setState((prevState) => {count: prevState.count + 1})
this.setState((prevState) => {count: prevState.count + 1})
this.setState((prevState) => {count: prevState.count + 1})
this.setState((prevState) => {count: prevState.count + 1})
```

다음과 같이 사용하는게 마땅하다.

4. document element의 focus기능을 사용하기 위해서 ref를 이용한다.
```jsx
ref={(c) => {this.input = c}}


// 훅에선 다음과 같이 사용한다.

const inputRef = useRef(null);
inputRef.current.focus();
// class에서도 된다 ref.current는
// createRef(NULL); 가능
// inputRef.current.focus();
```

5. 훅도 setState에 객체를 이용하면 여러개의 상태를 동시에 관리할 수 있는데, 대신 class와는 달리 기존의 state도 spread연산을 이용해서 복사 해줘야된다. 아니면 state가 사라짐
```jsx
setState({ ...state, name: e.target.value });
```

6. [github.com/browserslists](http://github.com/browserlists) ~를 이용하면 chrome의 최신버전까지 혹은 한국에서 점유율 몇퍼이상 그런식으로 지원할 수 있는 preset-env의 설정 값 마저 찾아 볼 수 있다. 그리고 preset-env의  옵션은

```jsx
options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
	       },
```

로 사용한다.

7. webpack을 사용하다보니 개발시 저장하고 다시 실행할 때 빌드를 매번 해줘야한다는 번거로움이 있었는데 이것을 해결하기 위해서 hot reload를 도입한다. hot reload 자체는 

[https://github.com/pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) 이 라이브러리를 이용해서 쉽게 구현할 수 있다.

> npm i react-refresh -D

dev server 설정을 위해 다음과 같이 실행해준다.

> npm i -D webpack-dev-server 도 추가해준다.
"dev": "webpack serve --env development" 로 npm에서 시작해주는게 중요함

8. jsx에서 {[<component />, <component />, <component />]} 를 하면 일련의 컴포넌트를 사용가능함. ==> array function (map, reduce, foreach, every 등등 적극 이용)

9. li에 key를 정해줄 땐 index같은걸로 하지말고 실제로 의미있는 값을 넣어야 삭제나 수정할 때 쉽게 할 수 있다.

10. 여기서 의문점? jsx 태그에서는 파라미터는 어떻게 전달할까?
-> props 이용 **<Try value={v} index={i} />** 를 써서 마치 html attribute 쓸 때처럼 쓴다.

+그리고 **const { title, age } = props** Destructuring을 사용하도록 함.

11. props 를 전달하다 보면 더 이상 prop를 추적하는게 불가능한 수준에 온다. 그 때, redux, mobx, context Api등의 상태관리 도구를 이용함.

# 숫자야구 게임

1. 리액트는 state는 state가 바뀔 때 마다 render가 일어나기 때문에 불변성을 유지하는게 중요하다. 그래서 ... spread연산자를 적극 활용하자.

2.  💥💥💥 주의 💥💥💥 render or hook에선 return 안에 setState를 넣어선 안됨

3. 부모 node의 props를 받아 쓸 때 직접 변경하지 말고 사용하고 싶다면 state로 추가해서 사용하기
