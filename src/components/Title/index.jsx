import React from 'react'
import '../Title/style.css'

function Title({title}) {
    return (
        <div className="title-header">
            <h2>{title}</h2>
        </div>
    )
}

export default Title