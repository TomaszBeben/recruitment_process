import React, { useState, useEffect } from 'react';

const Incomes = (props) => {
    const [incomes, setIncomes] = useState([]);

    useEffect(() => {
        fetch(`https://recruitment.hal.skygate.io/incomes/${props.id}`)
            .then(response => {
                return response.json();
            })
            .then(incomes => {
                setIncomes(incomes.incomes);
                return incomes.incomes;
            })
    }, []);
    
    let sorted = incomes.sort((a, b)=>{
               return (b.value - a.value) 
            })
            let sortDate = incomes.sort((a, b)=>{
                return (b.date - a.date) 
             })
             console.log(sortDate);
             
            // const lastDate = sorted.length && sorted[0].date.Date.parse()
            // console.log(lastDate);
            
    
            return (
        <>
            <th className='tab'>{incomes.reduce((a, b) => a + Number(b.value), 0).toFixed(2)}</th>
            <th className='tab'>{((incomes.reduce((a, b) => a + Number(b.value), 0).toFixed(2)) / (Number(incomes.length))).toFixed(2)}</th>
            <th className='tab'>{sorted.length && sorted[0].value}</th>
        </>
    )
}
export default Incomes;