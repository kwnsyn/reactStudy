import "../App.css";

/*
에러 구문
function App() {
  const name = undefined;
  return name;
}

export default App;
*/

function App() {
  const name = undefined;
  return name || "값이 undefined입니다.";
}

export default App;
