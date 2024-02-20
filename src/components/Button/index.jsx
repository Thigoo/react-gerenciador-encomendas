import React from 'react'
import '../Button/style.css'
import { useNavigate } from 'react-router-dom'

function Button({ title, rota }) {

    const navigate = useNavigate();

    const irParaAdd = () => {
        navigate(rota);
    }

    return (
        <div>
            <button className='button' onClick={irParaAdd}>{title}</button>
        </div>
    )
}

export default Button