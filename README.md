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
this.setState({count : this.state.count + 1)})
this.setState({count : this.state.count + 1)})
this.setState({count : this.state.count + 1)})
this.setState({count : this.state.count + 1)})
```

만약 동기적으로 처리된다면
와 같이 사용하면 count 는 4가 증가하지 않고 1만 증가하는 것을 보인다.
