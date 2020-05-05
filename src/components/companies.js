import React, { useState, useEffect } from 'react';
import Incomes from './Incomes'
// import PaginationButtons from './PaginationButtons';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    // const [currentPage, setCorrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(20);
    useEffect(() => {
        fetch("https://recruitment.hal.skygate.io/companies")
            .then(response => {
                return response.json();
            })
            .then(companies => {
                setCompanies(companies);
            })

    }, []);
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPost = companies.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
            <div className='mainTab header-tab'>
                <div className='tab-id'>ID</div>
                <div className='tab-name'>NAME</div>
                <div className='tab'>CITY</div>
                <div className='tab'>TOTAL INCOME</div>
                <div className='tab'>AVERAGE INCOME</div>
                <div className='tab'>LAST MONTH INCOME</div>
            </div>
            {/* sorting ?? */}
            {companies.sort((a, b) => Number(a.id) > Number(b.id)).map(company => (
                <div className='mainTab' key={company.id}>
                    <div className='tab-id'>{company.id}</div>
                    <div className='tab-name'>{company.name}</div>
                    <div className='tab'>{company.city}</div>
                    <Incomes id={company.id} />

                </div>
            ))}
            {/*Pagination ??*/}
            {/* <PaginationButtons companies={currentPost} /> */}




        </>

    )
}

export default Companies;