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

                    
                })
        }
    }, []);

    return (



        <>
            <div className='tab'>{incomes.reduce((a, b) => a + Number(b.value), 0).toFixed(2)}</div>
    <div className= 'tab'>{}</div>
        </>
    )
}
export default Incomes;