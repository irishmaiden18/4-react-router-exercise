import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Users from './components/Users'
import UserDetails from './components/UserDetails'

function App() {

  return (
    <>
      <h1>React Router</h1>

      <Navbar/>

      {/* Routes allow us to add different individual Route elements so we can create different pages in our React app */}
      {/* each Route takes in a url string path and the element we want to display when our url matches the path */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        {/* Dynamic Route - utilizes dynamic parameters that we can set up :paramName */}
        <Route path="/users/:id" element={<UserDetails/>}/>
        {/* use * for your catch all route */}
        <Route path="*" element={<h1>404 NOT Found!</h1>}/>
      </Routes>
    </>
  )
}

export default App
