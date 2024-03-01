import React, { useEffect, useState } from 'react'
import '../Register/style.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../../services/firebase';
import { Link, useNavigate,  } from 'react-router-dom';


function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const register = () => {
        if(!name) alert('Por favor insira seu nome');
        registerWithEmailAndPassword(name, email, password);
    } 

    useEffect(() => {
        if(user) navigate('/');
    }, [user, navigate]);

  return (
    <div className="register">
        <div className="register-container">
            <input 
                type="text"
                className='register-input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Nome completo' />
            <input 
                type="text"
                className='register-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email' />
            <input 
                type="password"
                className='register-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Senha' />
            <button
                className='register-btn'
                onClick={register}
            >
                Cadastre-se
            </button>
            <button
            className='register-btn register-google'
            onClick={signInWithGoogle}
            >
                Cadastrar com Google
            </button>
            <div>
                Já possui uma conta? <Link to='/login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register