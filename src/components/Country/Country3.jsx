import { useState } from 'react';
import './Country3.css'
const Country3 = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name,flags, population, area,cca3} =country
    console.log(country);
    const [visited, setVisited] = useState(false)
    const handleVisited = () =>{
      setVisited(!visited)
        
    }
   
    

    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
           <h3 style={{color: visited? 'purple': 'white'}}>Name:{name.common}</h3>
           <img src={flags.png} alt="" /> 
           <p>Population:{population}</p>
           <p><small>area:{area}</small></p>
           <p><small>cca3:{cca3}</small></p>
           <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
           <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
           <button onClick={handleVisited}>{visited? 'visited':'Going'}</button>
           {visited? 'I have visited': 'I Want visit'}
        </div>
        
    );
};

export default Country3;