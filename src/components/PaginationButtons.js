import React from 'react'
import Companies from './companies'

const PaginationButtons = ({companies}) => {
    return (
        <div>
            {companies.map(button =>(
                <button button={companies.id}>{companies.id}</button>
                ))}
        </div>
    )
}

export default PaginationButtons;
