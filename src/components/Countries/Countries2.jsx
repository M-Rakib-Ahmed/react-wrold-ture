// import { useEffect } from "react";
// import { useState } from "react";
// import Country2 from "../Country/Country2";
// import './Countries.css'

// const Countries2 = () => {
//     const [countries, setCountries] = useState([])
//     useEffect(() => {
//         fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => setCountries(data))
    
//     }, [])
//     return (
//         <div>
//             <h3>Countries:{countries.length}</h3>
//             <div className="countty-container">
//                 {
//                 countries.map(country => <Country2 key={countries.cca3} country={country}></Country2>)
//             }
//             </div>
//         </div>
//     );
// };

// export default Countries2;