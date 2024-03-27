import React, { useEffect, useState } from 'react';

function MoneyExchange({ currency,country }) {
  const [res, setRes] = useState({ conversionResult: "", conversionRate: "" });
  const [amount, setAmount] = useState(); // ערך ברירת המחדל של ה-amount
  const [error,setError] = useState();

  const moneyExchangeApi = async (targetCurrency) => {
    const API_KEY = '78bf2a3f54769b78607b6125';
    const BASE_CURRENCY = 'ILS';
    const TARGET_CURRENCY = targetCurrency;
    // https://www.exchangerate-api.com/docs/pair-conversion-requests
    const moneyExcUrll = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${BASE_CURRENCY}/${TARGET_CURRENCY}/${amount}`;

    try {
      const moneyExcResponse = await fetch(moneyExcUrll);
      const data = await moneyExcResponse.json();
      let conversionResult = data.conversion_result * amount;
      let conversionRate = data.conversion_rate;
      setRes({ conversionResult, conversionRate });
    } catch (error) {
      setError(error.message);
    }
  }

  const handleSend = () => {
    moneyExchangeApi(currency);
  }

  const handleChange = (e) => {
    setAmount(e.target.value);
    setRes({ conversionResult: "", conversionRate: "" }); // איפוס התוצאות כאשר ה- input משתנה
  }

  return (
    <div className='money-exchange'>
      <h3>{`המרת מטבע ישראלי ל${country}`}</h3>
      <div className='form'>
        <input
          type="number"
          value={amount}
          onChange={handleChange}
          placeholder='כמה כסף להמיר'
        />
        <button onClick={handleSend}>שלח</button>
      </div>
      {res.conversionResult && res.conversionRate !== undefined && 
        <div>{`${amount} ש"ח שווה ל-${res.conversionResult} ${currency} (${res.conversionRate} יחס המרה)`}</div>
      }
    </div>
  )
}

export default MoneyExchange;
