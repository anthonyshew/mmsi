import React, { useState } from 'react'

const ServiceRequest = ({ ...props }) => {
    const [formInput, setFormInput] = useState({
        message: ''
    })

    const [submissionErrors, setSubmissionErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        fetch('/api/mail/service-request', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInput)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setIsSubmitting(false)
                if (!response.success) { setSubmissionErrors(response.errors) }
                else {
                    setSubmissionErrors({})
                    setSuccess(true)
                }
            })
    }

    if (success) {
        return (
            <div className="admin-service-request">
                <p style={{ padding: "3rem" }}>Thank you for your message. We will be with you as soon as possible (Usually within 24 hours).</p>
            </div>
        )
    } else {
        return (
            <div className="admin-service-request">

                <form className="form">
                    <h1 className="h1">Request Service</h1>
                    <p>Having an issue?</p>
                    <p>Let us know below.</p>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        name="message"
                        onChange={handleChange}
                        value={formInput.email}
                    />
                    {
                        <ul className="errors">
                            {submissionErrors.message}
                        </ul>
                    }
                    <button
                        id="submit"
                        className="submit"
                        onClick={handleSubmit}
                    >
                        {isSubmitting ? "..." : "Login"}
                    </button>
                </form>
            </div>
        )
    }
}

export default ServiceRequest