import React,{useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';


const Companies = (props) => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("")
   
    useEffect(() => {
      fetch("https://recruitment.hal.skygate.io/companies")
      .then(response =>{
        console.log(response);
        if (response.status === 200) return response.json();
        else setErr('ERROR!!')
        
    })
    .then(data => {
        console.log(data);
        setData(data);
    })
    },[]);
   
    return(
        <>
        <ul>
            {data.map(data =>(
                <li key={data.id}>
                <h3>{data.id} {data.name}</h3>
                <data> {data.city}</data>
                </li>
    ))}
        </ul>
        </>

    )
  }
export default Companies;