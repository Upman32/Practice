 import React, { useContext } from 'react'
import { AuthContext } from '../components/Context'
import Buttonis from '../components/UI/Button/MyButton'
import Inputis from '../components/UI/Input/Myinput'

 const Login = () => {
     const {isAuth, setIsAuth} = useContext(AuthContext)
const login = event => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
    }

     return (
    <div>
        <h1> Login </h1>
        <form onSubmit={login}>
            <Inputis type="text" placeholder="Login"/>
            <Inputis type="password" placeholder="Password"/>
            <Buttonis>Вход</Buttonis>
        </form>
    </div>

     )
 }

 export default Login