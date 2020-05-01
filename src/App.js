import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Companies from './components/companies';
import Incomes from './incomes';

const App = () =>{
    return(
        <>
        <Companies/>
        <Incomes/>
        </>

    ) ;
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>,document.getElementById('app'))
})
export default App;