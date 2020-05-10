import React from 'react'

const Pagination = ({ postsPerPage, totalPost, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pageNumber.push(i);
    }
    
    return (
        <div>
            {pageNumber.map(number => (
                <button onClick={() => paginate(number)} key={number}>{number}</button>
            ))}
        </div>
    )
}

export default Pagination;
