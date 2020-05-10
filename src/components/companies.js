import React from 'react';
import Incomes from './Incomes'

const Companies = ({companies}) => {
    
    const Sortedcompanies= () => companies.sort((a, b)=>{
        return (a.id - b.id)
    })
     
    return (
        <>
        <table>
            
                <thead>
                <th onClick={Sortedcompanies()}>id</th>
                <th>name</th>
                <th>city</th>
                <th>total income</th>
                <th>averag income</th>
                <th>last income</th>
                </thead>
            
        {companies.map( company => (
        <tbody key={company.id}>
            <th>{company.id}</th>
            <th>{company.name}</th>
            <th>{company.city}</th>
            <Incomes id={company.id}/>
        </tbody>
        ))}
        </table>
        </>
    )
}

export default Companies;
