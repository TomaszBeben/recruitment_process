import React, { useState, useEffect } from 'react';
import Companies from './Companies';
import Pagination from './Pagination';

const FetchCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrertPage] = useState(1);
    const [postsPerPage] = useState(25);


    useEffect(() => {
        fetch("https://recruitment.hal.skygate.io/companies")
            .then(response => {
                return response.json();
            })
            .then(companies => {
                setCompanies(companies);
                return companies;

            })

    }, []);

    // console.log(companies.length && companies[0].id);

    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = companies.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrertPage(pageNumber);
    
    
    // setCompanies = sortCompanies;
    // console.log(companies);
    
    
    
    return (
        <div>
            <Companies companies={currentPost} />
            <Pagination postsPerPage={postsPerPage} totalPost={companies.length} paginate={paginate}/>
        </div>
    )
}

export default FetchCompanies
