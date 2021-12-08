import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [domainname,setDomainname] = useState("");
  const [list,setList] = useState({})
  const url = "http://ip-api.com/json/"
  
  const fetchdomain = async() =>{
    const {data} = await axios.get(url+domainname);
    setList(data)

  }

  useEffect(() =>{
    
    fetchdomain()
    
    

  },[domainname])

  return (
    <div className="main">
    <p className="name">Enter the domain name </p>
    <input type="text" name="domain" id="domain" value={domainname} onChange={e => setDomainname(e.target.value)} />
    <div className="box">
    {
      list ? <>
        <div className="data">Status : {list.status}</div>
        <div className="data">Region : {list.region}</div>
        <div className="data">Region Name: {list.regionName}</div>
        <div className="data">IP : {list.query}</div>
        <div className="data">City : {list.city}</div>
        
      </> : <p>no data</p>
    }
    </div>
    
    
      
    </div>
  )
}

export default App
