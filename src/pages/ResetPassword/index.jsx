import React, { useEffect, useState } from 'react'
import '../ResetPassword/style.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';

function ResetPassword() {

    const [email, setEmail] = useState('');
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/home');
    }, [user, navigate]);

    return (
        <div className="reset">
            <div className="reset-container">
                <input
                    type="text"
                    className='register-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Endereço de email'
                />
                <button
                    className='reset-btn'
                    onClick={() => sendPasswordResetEmail(email)}
                >
                    Enviar email para redefinir senha
                </button>
                <div>
                    Não possui uma conta? <Link to='/register'>Cadastre-se</Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword