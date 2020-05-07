import React from 'react';
import ReactDOM from 'react-dom';
import FetchCompanies from './components/FetchCompanies'



const App = () =>{
    return(
        <>
        <FetchCompanies/>
        </>

    ) ;
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>,document.getElementById('app'))
})
export default App;