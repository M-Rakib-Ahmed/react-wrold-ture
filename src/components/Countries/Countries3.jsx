import { useEffect, useState } from "react";
import Country3 from "../Country/Country3";
import './Countries3.css'
const Countries3 = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])
    const [visitedFlags, setVisitedFlags] =useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
        
     }
    const handleVisitedCountry = (country)=>{
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountry, country]
       setVisitedCountry(newVisitedCountries)
        
     
     
    }
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {/* visited country */}
            <div>
                <h3>Visited Countries{visitedCountry.length}</h3>
                <ul>
                  {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                  }
                </ul>
            </div>
            <div className="flag-container">
                {
                   visitedFlags.map(flag => <img src={flag}></img>)
                }

            </div>
            {/* display countries */}
            <div className="country-container">
                {
                countries.map(country => <Country3
                     key={country.cca3}
                handleVisitedCountry ={handleVisitedCountry}
                handleVisitedFlags ={handleVisitedFlags}
                     
                country={country}></Country3>)
            }
            </div>
        </div>
    );
};

export default Countries3;