import React from 'react';
import Incomes from './Incomes'

const Companies = ({ companies }) => {

    


    return (
        <>
            <table>

                <tbody>
                    <tr>
                        <td >id</td>
                        <td>name</td>
                        <td>city</td>
                        <td>total income</td>
                        <td>averag income</td>
                        <td>last income</td></tr>
                </tbody>
            </table>
            <table>
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
