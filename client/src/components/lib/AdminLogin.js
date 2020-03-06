import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import gsap from 'gsap'

import useStateValue from '../../lib/hooks/useStateValue'

const AdminLogin = ({ ...props }) => {

    const [, dispatch] = useStateValue()

    const [formInput, setFormInput] = useState({
        email: '',
        password: '',
        domain: '',
    })

    const [showForgotPasswordLink, setShowForgotPasswordLink] = useState(false)
    const [submissionErrors, setSubmissionErrors] = useState('Form initialized.')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValidated, setIsValidated] = useState(false)

    useEffect(() => {
        if (showForgotPasswordLink) {
            gsap.to(".email-reset", {
                autoAlpha: 1
            })
        } else {
            gsap.to(".email-reset", {
                autoAlpha: 0
            })
        }
    }, [showForgotPasswordLink])

    useEffect(() => {
        if (submissionErrors.length > 0) {
            setIsValidated(false)
        } else {
            setIsValidated(true)
        }
    }, [submissionErrors])

    useEffect(() => {
        if (isValidated) {
            dispatch({
                type: 'ADMIN_LOGIN',
                boolean: isValidated
            })
        }
    }, [dispatch, isValidated])

    const sendEmailReset = (e) => {
        e.preventDefault()
        setShowForgotPasswordLink(false)
        fetch(`/api/administrator/forgot-password`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        fetch('/api/auth/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInput)
        })
            .then(response => response.json())
            .then(response => {
                setIsSubmitting(false)
                if (response.data.jwt) {
                    localStorage.setItem('jwt', response.data.jwt)
                    dispatch({ type: "ADMIN_LOGIN" })
                }
                setSubmissionErrors(response.errors)
            })
    }

    return (
        <div className="admin-login">
            <Helmet>
                <html lang="en" />
                <title>Admin Login - Mission Mechanical Services Inc.</title>
                <meta name="description" content=" Log into the MMSI Administrative Dashboard." />
            </Helmet>
            <img className="company-logo" src="/favicon.ico" alt="Company logo." />
            <h1 className="h1">Administrative Login</h1>
            <form className="form">
                <label htmlFor="email">Admin Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formInput.email}
                />
                <label htmlFor="password">Admin Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formInput.password}
                />
                <div className="container-forgot-password">
                    <button
                        type="button"
                        className="forgot-password-link"
                        onClick={(e) => { e.preventDefault(); setShowForgotPasswordLink(true) }}
                    >
                        Forgot Password?
                    </button>
                    <button
                        type="button"
                        className="email-reset"
                        onClick={sendEmailReset}
                    >
                        Send Reset Email
                        </button>
                </div>
                {
                    submissionErrors === 'Form initialized.' ? null :
                        submissionErrors.length === 0 ? null :
                            <ul className="errors">
                                {submissionErrors.map((elem, index) => {
                                    return <li key={index}>{elem}</li>
                                })}
                            </ul>
                }
                <button
                    id="submit"
                    type="submit"
                    className="submit"
                    onClick={handleSubmit}
                >
                    {isSubmitting ? "..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default AdminLogin