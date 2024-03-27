import React, { useEffect, useState } from 'react';

function Weatherapi({ countryEng, countryRegion, region }) {
  const [res, setRes] = useState(
    { dataTime: "", 
      conditionText: "", 
      conditionIcon:"", 
      temperature: "",
      weatherCurrent:"",
      weatherMin: "",
      weatherMax:""
  });
  const [weekData, setWeekData] = useState([]);
  const [error,setError] = useState();


  useEffect(() => {
    const weatherapi = async (countryEng) => {
      // dataCountry='Israel'
      let URL;
      if(countryRegion === null){
         URL= `http://api.weatherapi.com/v1/forecast.json?q=${countryEng}&key=9d7b3cdfd84c4e7e834174818230210&days=7`;
      }else {
         URL= `http://api.weatherapi.com/v1/forecast.json?q=${countryRegion},${countryEng}&key=9d7b3cdfd84c4e7e834174818230210&days=7`;
  
        };
  
      try {
        const countriesResponse = await fetch(URL);
        const countriesData = await countriesResponse.json();
        const dataTime = countriesData.location.localtime;
        const conditionText = countriesData.current?.condition.text;
        const conditionIcon = countriesData.current?.condition.icon;
        const weatherCurrent = countriesData.current?.temp_c;
        const weatherMin = countriesData.forecast?.forecastday[0]?.day.mintemp_c;
        const weatherMax = countriesData.forecast?.forecastday[0]?.day.maxtemp_c;
        const dataWeek = countriesData.forecast?.forecastday?.map((item, i) => {
          const date = item.date;
          const maxTemp =  Math.round(item.day.maxtemp_c);
          const minTemp = Math.round(item.day.mintemp_c);
          const icon = item.day.condition.icon;
            return { date, maxTemp, minTemp, icon };
        });
        setWeekData(dataWeek);    
        setRes(
          {dataTime,
          conditionText,
          conditionIcon,
          weatherCurrent,
          weatherMin,
          weatherMax
          }
        )
      } catch (error) {
        setError(error.message);
      }
    };
    weatherapi(countryEng);
  }, [countryEng,countryRegion]);

  return (
      <div className='general-information-city'>
       {/* {error === null ? (
        <ul className="info-list-1">
          <li>
            <span>{`מידע על ${region} בזמן אמת`}</span>
            <ul className="info-sublist">
              <li><i className="bx bx-x" />תאריך ושעה כעת: {res?.dataTime}</li>
              <li><i className="bx bx-x" />{res?.conditionText} <img src={res?.conditionIcon} alt='Weather' /></li>
              <li><i className="bx bx-x" /> מזג האויר כעת: {res?.weatherCurrent}<span>°c</span></li>
              <li><i className="bx bx-x" />
                {res && Math.round(res?.weatherMax)}<span>°c</span> מקסימום / {res && Math.round(res?.weatherMin)}<span>°c </span>מינימום 
              </li>
            </ul>
          </li>
        </ul>
      ) : (
        <div>
          <h3>{`יש שגיאה, לא ניתן לראות את המזג אוויר בזמן אמת ב- ${region}`}</h3>
          {error}
        </div>
      )}      */}
      <ul className="info-list-1">
          <li>
            <span>{`מידע על ${region} בזמן אמת`}</span>
            <ul className="info-sublist">
              <li><i className="bx bx-x" />תאריך ושעה כעת: {res?.dataTime}</li>
              <li><i className="bx bx-x" />{res?.conditionText} <img src={res?.conditionIcon} alt='Weather' /></li>
              <li><i className="bx bx-x" /> מזג האויר כעת: {res?.weatherCurrent}<span>°c</span></li>
              <li><i className="bx bx-x" />
                {res && Math.round(res?.weatherMax)}<span>°c</span> מקסימום / {res && Math.round(res?.weatherMin)}<span>°c </span>מינימום 
              </li>
            </ul>
          </li>
      </ul>
      <div className="weather-container">
        <h3>{`תחזית מזג האויר ל-3 ימים הבאים ב${region} `}</h3>
        <ul className="week-list">
          {weekData.map((dayData, index) => (
            <li key={index} className="day-card">
              <p>{dayData.date}</p>
              <img src={dayData.icon} alt="תמונת תחזית" className="weather-icon" />
              <p> <span>{dayData.minTemp}°</span> {dayData.maxTemp}°</p>
            </li>
          ))}
        </ul>
      </div>
    </div> 
  );
}

export default Weatherapi;
