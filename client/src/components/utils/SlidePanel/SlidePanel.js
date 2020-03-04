import React from 'react'
import { Link } from '@reach/router'
import './_SlidePanel.scss'

const SlidePanel = (props) => {
    return (
        <section className="container-slide-panel" style={{
            flexDirection: `${props.mirror ? 'row-reverse' : 'row'}`,
            backgroundColor: `${props.backgroundColor || "none"}`,
            color: props.color
        }
        }>
            {props.svg ? props.svg : <img className="image" src={props.image} alt={props.imageAlt} title={props.imageAlt} />}
            <div className="container-inner">
                <h3 className="heading"> {props.heading} </h3>
                <p className="paragraph"> {props.text} </p>
                {props.button ? <Link to={props.buttonLink} title={`Visit the "${props.buttonText}" page.`}>
                    <button className="link-button" style={{
                        backgroundColor: props.buttonBackgroundColor,
                        color: props.buttonColor
                    }}>
                        {props.buttonText}
                        <svg className="button-icon" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 30H87M87 30L57 5M87 30L57 55" stroke={props.buttonColor} strokeWidth="20" strokeLinecap="round" />
                        </svg>
                    </button>
                </Link> : null}
            </div>
        </section>
    )
}

export default SlidePanel