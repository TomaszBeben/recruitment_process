import React, { useState, useEffect } from 'react';
import Companies from './Companies';
import Pagination from './Pagination';
import '../scss/main.scss';

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
                setCompanies(companies
                .sort((a, b) => {
                    return (a.id - b.id)
                }))
                console.log(companies);
                
            })

    },[]);

    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = companies.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrertPage(pageNumber);
    
    
    // setCompanies = sortCompanies;
    // console.log(companies);
    
    // console.log(paginate);
    // setCompanies = () => companies.sort((a, b) => {
    //     return (a.id - b.id)
    // })

    
    return (
        <div>
            <Companies companies={currentPost} />
            <Pagination postsPerPage={postsPerPage} totalPost={companies.length} paginate={paginate}/>
        </div>
    )
}

export default FetchCompanies
