import React from 'react';
import Incomes from './Incomes'

const Companies = ({ companies }) => {

    return (
        <>
            <table>

                
                    <tr>
                        <th className='id'>ID</th>
                        <th>NAME</th>
                        <th>CITY</th>
                        <th>TOTAL INCOME</th>
                        <th>AVERAGE INCOME</th>
                        <th>LAST INCOME</th>
                        </tr>
                
            
                <tbody>
                    {companies.map(company => (
                        <tr key={company.id}>
                            <td>{company.id}</td>
                            <td>{company.name}</td>
                            <td>{company.city}</td>
                            <Incomes id={company.id} />
                        </tr>
                    ))}</tbody>
            </table>
        </>
    )
}

export default Companies;
