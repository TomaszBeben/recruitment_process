import React from 'react';
import Incomes from './Incomes'

const Companies = ({companies}) => {
    
    
    return (
        <>
        {companies.map( company => (
        <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.name}</td>
            <td>{company.city}</td>
            <Incomes id={company.id}/>
        </tr>
        ))}
        </>
    )
}

export default Companies;
