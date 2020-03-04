import React, { useState } from 'react'
import { navigate } from '@reach/router'
import './_ContactForm.scss'

import PhoneIcon from '../../SVGs/PhoneIcon/PhoneIcon'
import EmailIcon from '../../SVGs/EmailIcon/EmailIcon'

const ContactForm = (props) => {
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState({})
    const [buttonText, setButtonText] = useState("Send")

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        setButtonText("...")
        fetch('/api/send-message', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInput)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.success === false) {
                    setErrors(res.errors)
                    setButtonText("Send")
                } else {
                    navigate('/thank-you')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="contact-form" >
            <h3 className="h3">Get In Touch</h3>
            <span className="split phone">
                <PhoneIcon fill={props.svgFill} />
                <p className="paragraph">(949) 768-4675</p>
            </span>
            <span className="split email">
                <EmailIcon fill={props.svgFill} />
                <p className="paragraph"><span className="word-break">rick@</span><span className="word-break">missionmechanicalservices.com</span></p>
            </span>
            <form className="form" style={{ backgroundColor: props.backgroundColor, boxShadow: `2px 2px 10px ${props.backgroundColor}` }}>
                <h4 className="h4">Or use this form to contact us!</h4>
                <div className="form-section">
                    <label
                        htmlFor="name"
                        className="label"
                        style={{ color: props.labelColor }}>
                        <p className="label-text">Your Name</p>
                        {errors.name ? <span className="error">{errors.name}</span> : null}
                    </label>
                    <input name="name"
                        onChange={handleChange}
                        style={{ backgroundColor: props.inputBackgroundColor, color: props.inputColor }}
                        aria-label="Input your name."
                        aria-required="true"
                    />
                </div>
                <div className="form-section">
                    <label
                        htmlFor="email"
                        className="label"
                        style={{ color: props.labelColor }}>
                        <p className="label-text">Your Email</p>
                        {errors.email ? <span className="error">{errors.email}</span> : null}
                    </label>
                    <input name="email"
                        onChange={handleChange}
                        style={{ backgroundColor: props.inputBackgroundColor }}
                        aria-label="Input your email."
                        aria-required="true"
                    />
                </div>
                <div className="form-section">
                    <label
                        htmlFor="message"
                        className="label"
                        style={{ color: props.labelColor }}>
                        <p className="label-text">Your Message</p>
                        {errors.message ? <span className="error">{errors.message}</span> : null}
                    </label>
                    <textarea
                        name="message"
                        onChange={handleChange}
                        style={{ backgroundColor: props.inputBackgroundColor }}
                        aria-label="Input your message."
                        aria-required="true"
                    />
                </div>
                <div>{errors.backend ? <span className="error-other" role="alert" aria-relevant="all">{errors.backend}</span> : null}</div>
                <button
                    name="submit"
                    className="submit"
                    onClick={submit}
                    style={{ backgroundColor: props.buttonBackgroundColor, color: props.buttonColor }}>
                    {buttonText}
                </button>
            </form>
        </section>
    )
}

export default ContactForm