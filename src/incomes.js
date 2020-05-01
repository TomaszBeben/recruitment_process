import React,{useState, useEffect} from 'react';
//import Companies from './components/companies';



const Incomes = (props) => {
    const [incomes, setIncomes] = useState([]);
   console.log(props);
   
    useEffect((props) => {
      fetch(`https://recruitment.hal.skygate.io/incomes/${props}`)
      .then(response =>{
        return response.json();
        
        

    })
    .then(incomes => {
        setIncomes(incomes.incomes);
        console.log(incomes.incomes);
        
        
    })
    },[]);
   
    return(
        <>
        <ul>
            <li></li>
            {incomes.map(income =>(
                <li key={income.id}>
                <h3>value: {income.value}</h3>
                <data>date: {income.date}</data>
                </li>
    ))}
        </ul>
        </>

    )
  }
export default Incomes;