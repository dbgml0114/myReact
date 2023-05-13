import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Coins...({loading ? "" : `${coins.length}`})</h1>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name}: {coin.quotes.USD.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
