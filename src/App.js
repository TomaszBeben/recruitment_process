import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Companies from './components/Companies';


const App = () =>{
    return(
        <>
        
        <Companies/>
        
        </>

    ) ;
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>,document.getElementById('app'))
})
export default App;