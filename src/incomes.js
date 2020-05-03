import React,{useState, useEffect} from 'react';
//import Companies from './components/companies';
import IncomeValues from './components/incomesValues';
const Incomes = ({companies},{value}) => {
    const [incomes, setIncomes] = useState([]);
    useEffect(() => {
      fetch(`https://recruitment.hal.skygate.io/incomes/1`)
      .then(response =>{
        return response.json();
        })
    .then(incomes => {
        setIncomes(incomes.incomes);

    })
    },[]);
    
    console.log();
    return(
        
        
        
        <>
        <div>
            
            {incomes.map(income =>(
                <div key={income.id}>
                <div>value: {income.value}</div>
                <div>date: {income.date}</div>
                <div>sum of incomes: </div>
                </div>
    ))}
        </div>
        </>
    )
  }
export default Incomes;