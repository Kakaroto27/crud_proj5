import './styles/Login.css';
import {React, useRef} from 'react';
import { Link } from 'react-router-dom';
import 'cors';



const Login = () => {
    return (
    <div className='Page_login' action='/'>
      <h3 className='title_acess'>
        Acesse com seu Usuário
      </h3>
        
      <div className='logando'> 
        <label className='apres_caixa'>
          Usuário/E-mail:</label>
        <input className='user'
          type={'text'}
          placeholder="usuário/e-mail"
          outline = 'none'>
        </input>
        
        <label className='apres_caixa'>
          Senha:</label>
      
        <input className='password'
          type={"password"}
         placeholder='senha'>
        </input>
      </div>
    
  
    <div className='buttons_login'>  
        <Link to={'./Register.jsx'}>
        <button 
        className='buttonlogin' 
        type="submit" 
        name="login" 
        id="login" 
        value="cadastro" 
        placeholder='Cadastre-se'
        >
        
        Cadastre-se 
         </button></Link> 
  
         <Link to='/'>
        <button 
        className='buttonlogin' 
        type="submit" 
        name="login" 
        id="login" 
        value="login" 
        placeholder='Login'> 
        
          Login  </button></Link>
    </div>
  
  </div>
  
  
  
  ) };
  
  export default Login