import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './main/home'
import Login from './authentication/login'
import Portfolio from './portfolio/portfolio'
import Register from './authentication/register'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>             
            <Route index path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>                                                          
            <Route path="portfolio/:userId" element={<Portfolio />}/>                    
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App