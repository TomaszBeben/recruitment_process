import React, { useState, useEffect } from 'react';
//import Companies from './components/companies';
import IncomeValues from './components/incomesValues';
const Incomes = (props) => {
    const [incomes, setIncomes] = useState([]);
    useEffect(() => {
        fetch(`https://recruitment.hal.skygate.io/incomes/${props.id}`)
        headers: {
            'Content-Type': 'application/json'
            },
            .then(response => {
                return response.json();
            })
            .then(incomes => {
                setIncomes(incomes.incomes);

            })
    }, []);

    console.log();
    return (



        <>
            <div>

                {incomes.map(income => (
                    <div key={income.id}>
                        <div>suma: {income.value.reduce((a, b) => a + b)}</div>
                        <div> {income.date}</div>
                        <div>{income.date[0]} </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Incomes;