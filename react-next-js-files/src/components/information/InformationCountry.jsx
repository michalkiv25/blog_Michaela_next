import React, { useEffect, useState } from 'react';


function InformationCountry({ countryEng, country, flag, recommendedSeason }) {
  
  const country_code = flag?.replace(/"/g, "");
  const [res, setRes] = useState({ capital: "", region: "", timezones: "" });
  // const [errorMes,setError] = useState();


  const informationapi = async (countryEng) => {
    const countriesApiUrl = `https://restcountries.com/v3.1/name/${countryEng}?language=he`;

    try {
      const countriesResponse = await fetch(countriesApiUrl);
      const countriesData = await countriesResponse.json();
      let chinaData = countriesData.find(country => country.name.common === 'China');
      let capital;
      if(chinaData !== undefined)
          capital = chinaData.capital[0];
      else 
          capital = countriesData[0].capital[0];

      let region = countriesData[0]?.region;
      let timezones = countriesData[0]?.timezones?.[0];

      setRes({ capital, region, timezones });
    } catch (error) {
      // setError(error.message);
      console.log(error)
    }
  }

  useEffect(() => {
    informationapi(countryEng);
  }, [countryEng]);
  return (
  
      <div className="tour-info-list-area">
        {/* {errorMes === undefined ? 
        (    <ul className="info-list-1">
        <li><span>מידע כללי על:</span><span>{country}</span></li>
        <li><span>{`עיר בירה של ${country}: `}</span><span>{res?.capital}</span></li>
        <li><span>{`יבשת ${country}: `}</span><span>{res?.region}</span></li>
        <li><span>{`הפרש שעות בין ישראל ל-${country}: `}</span><span>{res?.timezones}</span></li>
        <li><span>{` דגל המדינה ${country}: `}</span><span>  <img src={`https://flagsapi.com/${country_code}/flat/${64}.png`} alt="Belgium Flag" width="64" height="64" />   </span></li>
      </ul>) :
      <div>
        <div>{`לא ניתן כעת לראות את המידע הכללי עבור מדינת ${country}`}</div>
        <div>{errorMes}</div>
      </div>
      } */}
          <ul className="info-list-1">
            <li><span>מידע כללי על:</span><span>{country}</span></li>
            <li><span>{`עיר בירה של ${country}: `}</span><span>{res?.capital}</span></li>
            <li><span>{`יבשת ${country}: `}</span><span>{res?.region}</span></li>
            <li><span>{`הפרש שעות בין ישראל ל-${country}: `}</span><span>{res?.timezones}</span></li>
            <li><span>{` דגל המדינה ${country}: `}</span><span>  <img src={`https://flagsapi.com/${country_code}/flat/${64}.png`} alt="Belgium Flag" width="64" height="64" />   </span></li>
          </ul>
          <iframe
          title='map'
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAtTlXHfFZxnOKBYGL81IS44T05Erbdhbo&q=${country}&language=he&zoom=3`}>
          </iframe>
          {recommendedSeason != null && (
          <div className='recommended-season'>
            <h3>{`עונה מומלצת לטוס ל-${country}`}</h3>
            <div>{recommendedSeason}</div>
          </div>

          )}
      </div>
    
  )
}


export default InformationCountry