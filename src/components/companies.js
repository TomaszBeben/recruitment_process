import React, { useState, useEffect } from 'react';
import Incomes from '../incomes'
import IncomesValues from './incomesValues'

// import ReactDOM from 'react-dom';
const Companies = (company) => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCorrentPage] = useState(1);
    const[postsPerPage, setPostsPerPage] = useState(20);

    useEffect(() => {
        setLoading(true)
        fetch("https://recruitment.hal.skygate.io/companies")
            
            .then(response => {
                return response.json();
            })
            .then(companies => {
                setCompanies(companies);
            })
            setLoading(false);
    }, []);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = companies.slice(indexOfFirstPost, indexOfLastPost);
    
    return (
        <>
            <div><IncomesValues/></div>
            <div className='mainTab'>
                <div className='tab'>id</div>
                <div className='tab'>name</div>
                <div className='tab'>city</div>
                <div className='tab'>total income</div>
                <div className='tab'>average income</div>
                <div className='tab'>last month income</div>
            </div>
                {companies.map(company => (
                    <div className='mainTab' key={company.id}>
                        <div className='tab'>{company.id}</div>
                        <div className='tab'>{company.name}</div>
                        <div className='tab'>{company.city}</div>
                        <div className='tab'>{company.city}</div>
                        <div className='tab'>{company.city}</div>
                        <div className='tab'>{company.city}</div>
                        {/* <div className='tab'><Incomes companies={company.id}/></div> */}
                        
                    </div>
                ))}


            
            
        </>

    )
}

export default Companies;