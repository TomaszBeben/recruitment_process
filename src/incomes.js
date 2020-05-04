import React, { useState, useEffect } from 'react';
import Companies from './components/companies';
import IncomeValues from './components/incomesValues';
const Incomes = (props) => {
    const [incomes, setIncomes] = useState([]);
    useEffect(() => {
        if (props.id) {
            fetch(`https://recruitment.hal.skygate.io/incomes/${props.id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => {
                    return response.json();
                })
                .then(incomes => {
                    setIncomes(incomes.incomes);
                    console.log(incomes.incomes);
                    
                    console.log(incomes.incomes[0].value);

                    
                    
                })
        }
    }, []);
    
    return (



        <>
            <div className='tab'>{incomes.reduce((a, b) => a + Number(b.value), 0).toFixed(2)}</div>
            <div>{incomes && incomes[0].date}</div>
            <div>{1}</div>
        </>
    )
}
export default Incomes;