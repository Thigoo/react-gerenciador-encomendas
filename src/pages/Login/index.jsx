import React, { useEffect } from 'react'
import '../Login/style.css'
import { useState } from 'react'
import { auth, signInWithGoogle } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if(user) navigate('/');
    }, [user]);

  return (
    <div className="login">
        <div className="login-container">
            <label>Email:</label>
            <input 
                type="text"
                className='login-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email' />
                <label>Email:</label>
            <input 
                type="password"
                className='login-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
        </div>
        <button 
            className='login-btn'
            onClick={() => signInWithEmailAndPassword(email, password)}>
            Login
        </button>
        <button 
            className='login-btn login-google'
            onClick={signInWithGoogle}>
            Login with Google
        </button>
        <div>
            <Link to='/reset'>Esqueceu sua senha?</Link>
        </div>
        <div>
            Não possui uma conta? <Link to='/register'>Cadastre-se</Link>
        </div>
    </div>
  )
}

export default Login