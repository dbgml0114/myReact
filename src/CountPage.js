import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("always render");
  useEffect(() => {
    console.log("API render"); //딱 한번만 실행됨 (배열 빈값 = 지켜볼게 없다)
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("검색합니다", keyword);
    }
  }, [keyword]);

  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="검색.."
      />
      <h1 className={styles.title}>클릭한 횟수 :: {counter}</h1>
      <button onClick={onClick}>버튼임당</button>
    </div>
  );
}

export default App;
