import React from 'react'
import './_Column.scss'

const Column = (props) => {
    return (
        <span className="column" style={{
            backgroundColor: props.backgroundColor || 'transparent',
            color: props.color || '#000000'
        }}>
            {props.icon ? <div className="icon">{props.icon}</div> : null}
            {props.heading ? <h3 className="heading">{props.heading}</h3> : null}
            <p className="text">{props.text}</p>
        </span>
    )
}

export default Column