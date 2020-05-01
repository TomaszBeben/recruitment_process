import React,{useState, useEffect} from 'react';
import Incomes from '../incomes';
// import ReactDOM from 'react-dom';


const Companies = (id) => {
    const [companies, setCompanies] = useState([]);
   
   
    useEffect(() => {
      fetch("https://recruitment.hal.skygate.io/companies")
      .then(response =>{
        return response.json();
    })
    .then(companies => {
        setCompanies(companies);
        console.log(id);
    })
    
    
    },[]);
   
    return(
        <>
        <ul>
            {companies.map(company =>(
                <li key={company.id}>
                <h3>id:{company.id} name: {company.name}</h3>
                <data>city: {company.city}</data>
                
                
                </li>
    ))}
        </ul>
        </>

    )
  }
export default Companies;