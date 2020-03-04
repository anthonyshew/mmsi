import React from 'react'
import './_ContainerColumns.scss'

const ContainerColumns = (props) => {
    return (
        <section className="container-columns" style={{ backgroundColor: props.backgroundColor || "transparent" }}>
            {props.children}
        </section>
    )
}

export default ContainerColumns