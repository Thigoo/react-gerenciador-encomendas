import React from 'react'
import '../Button/style.css'
import { useNavigate } from 'react-router-dom'

function Button({ title }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create');
    }

    return (
        <div>
            <button className='button' onClick={handleClick}>{title}</button>
        </div>
    )
}

export default Button