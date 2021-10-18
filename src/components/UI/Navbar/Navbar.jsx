import React, { useContext } from 'react'
import {  Link, Route } from 'react-router-dom';
import About from '../../../Pages/About';
import Posts from '../../../Pages/Posts';
import { AuthContext } from '../../Context';
import Buttonis from '../Button/MyButton';


const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
const logout = () => {
  setIsAuth(false);
  localStorage.removeItem('auth')
}

return (
    
    <div className="navbar">
      <Buttonis onClick={logout}>
        Выйти
      </Buttonis>
    <div className="navbar__links">
      <Link to="/about">111</Link>
      <Link to="/posts">posts</Link>
      </div>
        </div>

)

  
}
export default Navbar