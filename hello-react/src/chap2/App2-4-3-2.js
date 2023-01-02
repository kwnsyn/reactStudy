function App() {
  const name = "뤼액트";
  // << 결과 값이 리액트가 아닙니다. 로 나옴
  return (
    <div>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}

export default App;
