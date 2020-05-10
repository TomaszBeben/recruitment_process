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

    const newest = new Date(
        Math.max.apply(
            null,
            incomes.map((e) => {
                return new Date(e.date);
            })
        )
    );

    return (
        <>
            <td >{incomes.reduce((a, b) => a + Number(b.value), 0).toFixed(2)}</td>
            <td >{((incomes.reduce((a, b) => a + Number(b.value), 0).toFixed(2)) / (Number(incomes.length))).toFixed(2)}</td>
            <td>{newest.toLocaleString()}</td>
        </>
    )
}
export default Incomes;