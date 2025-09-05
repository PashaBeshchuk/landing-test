import React, { useEffect, useState } from 'react'
import { ReactComponent as GirlIcon } from '../../assets/girl.svg';
import './search.css'

const Search = ({setQuery}) => {
  const [temperature, setTemperature] = useState(0)
  useEffect(() => {
    fetch('http://localhost:8000/api/temperature')   
    .then(res => res.json())
    .then(data => setTemperature(data?.temperature));
  }, [])
  
  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <div className="newsletter-title">Stay always tuned with planting trends</div>
          <div className="newsletter-subtitle">Tips & Tricks selected specially for you!</div>
          <div className="newsletter-subtitle__desktop">Current temperature is: {temperature}°C</div>
          <div className="newsletter-input-wrapper">
            <input
              className="newsletter-input"
              type="text"
              placeholder="Search"
              onChange={(e)=>setQuery(e.target.value)}
            />
            <svg
              className="search-icon"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3764 9.47687C13.0463 7.13367 12.8302 3.85958 10.7279 1.75736C8.38479 -0.585787 4.5858 -0.585786 2.24265 1.75736C-0.100496 4.1005 -0.100496 7.89949 2.24265 10.2426C4.34488 12.3449 7.61896 12.561 9.96216 10.8911L15.6777 16.6066L17.0919 15.1924L11.3764 9.47687ZM9.31372 3.17157C10.8758 4.73367 10.8758 7.26633 9.31372 8.82843C7.75162 10.3905 5.21896 10.3905 3.65686 8.82843C2.09477 7.26633 2.09477 4.73367 3.65686 3.17157C5.21896 1.60948 7.75162 1.60948 9.31372 3.17157Z"
                fill="#ADB8C8"
              />
            </svg>
          </div>
        </div>
        <div className="newsletter-image">
          <GirlIcon/>
        </div>
      </div>
    </div>
  );
};


export default Search
