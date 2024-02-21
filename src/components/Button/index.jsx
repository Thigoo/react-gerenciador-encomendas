import React from 'react'
import '../Button/style.css'
import { useNavigate } from 'react-router-dom'

function Button({ title, rota }) {

    const navigate = useNavigate();

    const goToAdd = () => {
        navigate(rota);
    }

    return (
        <div>
            <button className='button' onClick={goToAdd}>{title}</button>
        </div>
    )
}

export default Button