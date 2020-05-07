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
                console.log(incomes.incomes);
            })

    }, []);

    return (
        <>
            <td className='tab'>{incomes.reduce((a, b) => a + Number(b.value), 0).toFixed(2)}</td>
            <td className='tab'>{((incomes.reduce((a, b) => a + Number(b.value), 0).toFixed(2)) / (Number(incomes.length))).toFixed(2)}</td>
            <td className='tab'>{'last month income'}</td>
        </>
    )
}
export default Incomes;