import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Companies from './components/companies';
import Incomes from './incomes';
//import Incomes from './incomes';

const App = () =>{
    return(
        <>
        <Incomes/>
        <Companies/>
        
        </>

    ) ;
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>,document.getElementById('app'))
})
export default App;