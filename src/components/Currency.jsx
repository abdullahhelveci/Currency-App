import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_ggP6QxpqIyZ1e5apcA1oEoRiwclkSMt4Vu5PbHcl";


const Currency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

  const exchange = async () => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency${fromCurrency}`)
  const resultt = (response.data.data[toCurrency] * amount).toFixed(2);
  setResult(resultt)

  };

  return (
    <div className="currency-div">
      <div>
        <h3 style={{ marginTop: "-20px" }}>Döviz Kuru Uygulaması</h3>
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option >USD</option>
          <option >EUR</option>
          <option >TRY</option>
        </select>

        <FaArrowCircleRight style={{ fontSize: "25px", marginRight: "10px" }} />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option >TRY</option>
          <option >EUR</option>
          <option >USD</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>
      <div>
        <button
          onClick={exchange}
          style={{
            marginTop: "20px",
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "20px",
          }}
        >
          cevir
        </button>
      </div>
    </div>
  );
};

export default Currency;
