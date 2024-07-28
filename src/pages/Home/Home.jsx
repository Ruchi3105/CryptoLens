import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (evt) => {
    setInput(evt.target.value);
    if (evt.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (evt) => {
    evt.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          The Ultimate <br />
          Crypto Marketplace
        </h1>
        <p>
          Dive into comprehensive trends, real-time data, and in-depth analysis
          of the world’s leading cryptocurrencies.
        </p>
        <form onSubmit={searchHandler} className="search-form" action="">
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search crypto.."
            required
          />

          <datalist id="coinlist">
            {allCoin.map((item, idx) => (
              <option key={idx} value={item.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p><b>#</b></p>
          <p><b>Coins</b></p>
          <p><b>Price</b></p>
          <p><b>24H Change</b></p>
          <p className="market-cap"><b>Market Cap</b></p>
        </div>
        {displayCoin.slice(0, 20).map((item, idx) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={idx}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p style={{ textAlign: "right" }}>
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
