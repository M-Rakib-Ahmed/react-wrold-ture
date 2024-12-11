import { useState } from 'react';
import './Country.css'
const Country2 = ({country}) => {
    const {name, flags, population
, area,cca3} = country
    console.log(country);

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
        
    }
    
    return (
        <div className='country'>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Poplation:{population}</p>
            <p>area{area}</p>
            <p><small>cca3{cca3}</small></p>
            <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
            {visited? 'I have visited this country': 'I Want to visit'}
        </div>
    );
};

export default Country2;