import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const Companies2 = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://recruitment.hal.skygate.io/companies')
        .then(res => res.json())
        .then(json => setData(json.results))
        console.log(data);
        
        
        
    },[])
   
    return (
    <div>{data}</div>
    )
  }
export default Companies2;