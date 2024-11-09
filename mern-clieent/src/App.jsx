import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter' 
import axios from 'axios'


function App() {
  const [name, setName] =useState()
  const [email, setEmail] = useState()
  const[password, setPassword] = useState()
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('storylane-com-api.vercel.app/register', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  

  return (
    <>
      <Navbar/>
      <div className='min-h-screen'><Outlet/></div>
      
      <MyFooter/>
    </>
  )
}

export default App
