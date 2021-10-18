import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route , Switch, Redirect} from 'react-router-dom';
import { AuthContext } from './components/Context';
import AppRouter from './components/UI/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import About from './Pages/About';
import Posts from './Pages/Posts';
import './styles/App.css';





function App() {
  const [isAuth, setIsAuth] = useState(false)
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
if(localStorage.getItem('auth')) {
  setIsAuth(true)
  
}
setIsLoading(false)
  } , [])
  return (
  <AuthContext.Provider value={{
    isAuth,
    setIsAuth,
    isLoading
  }}>
  <BrowserRouter>
<Navbar/>
<AppRouter/>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
