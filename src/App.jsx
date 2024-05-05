import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import SignUp from './assets/components/SignUp'
import SignIn from './assets/components/SignIn'
// import Details from './pages/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Sign-Up' element={<SignUp />}/>
        <Route path='/Sign-In' element={<SignIn />}/>
        {/* <Route path='/details/:id' element={<Details />}/> */}
      </Routes>
    </>
  )
}

export default App
