import React from 'react'
import '../Button/style.css'
import { useNavigate } from 'react-router-dom'

function Button({ title }) {

    const navigate = useNavigate();

    const irParaAdd = () => {
        navigate('/create');
    }

    return (
        <div>
            <button className='button' onClick={irParaAdd}>{title}</button>
        </div>
    )
}

export default Button