import './App.scss';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile';
import Main from './Pages/Main';
import Toolbar from './Components/Item/Toolbar/Toolbar';
function App() {
  const [data, setData] = React.useState([])
  const [loading,setLoading] = React.useState(true)
  React.useEffect(()=>{
    fetchData()
  }
  ,[]);
  async function fetchData(){
    await axios.get('https://jsonplaceholder.typicode.com/users').then(resp=>setData(resp.data));
    setLoading(false)
  }
  console.log(data)
  let sorted;
  const onCityClick = () =>{
    sorted = [...data].sort((a,b)=>{
      return ('' + a.address.city[0]).localeCompare(b.address.city[0]);
    })
    setData(sorted)
  }
  const onCompanyClick = () =>{
    sorted = [...data].sort((a,b)=>{
      return ('' + a.company.name[0]).localeCompare(b.company.name[0]);
    })
    setData(sorted)
  }
  return (
    <div className="App">
      <Toolbar items={data} onCityClick={onCityClick} onCompanyClick={onCompanyClick}/>
      <Routes>
        <Route path='/' element={<Main data={data} loading={loading}/>}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;


