import React, { useState, useEffect } from 'react'

import useStateValue from '../../lib/hooks/useStateValue'

const AdminLogin = ({ ...props }) => {

    const [, dispatch] = useStateValue()

    const [formInput, setFormInput] = useState({
        email: '',
        password: '',
        domain: '',
    })

    const [submissionErrors, setSubmissionErrors] = useState('Form initialized.')
    const [isValidated, setIsValidated] = useState(false)

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
                type: 'authLogin',
                boolean: isValidated
            })
        }
    }, [dispatch, isValidated])

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

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
                console.log(response)
                return response
            })
            .then(response => {
                if (response.data.jwt) {
                    localStorage.setItem('jwt', response.data.jwt)
                    dispatch({ type: "ADMIN_LOGIN" })
                }
                setSubmissionErrors(response.errors)
            })
    }

    return (
        <div className="admin-login" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
        }}>
            <img style={{ maxWidth: "10%", marginBottom: "1rem" }} src="/media/logo.png" alt="Company logo." />
            <h1>Administrative Login</h1>
            <h2>Company</h2>
            <form style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handleChange} value={formInput.email} required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={formInput.password} required />
                {
                    submissionErrors === 'Form initialized.' ? null :
                        submissionErrors.length === 0 ? null :
                            <ul className="errors">
                                {submissionErrors.map((elem, index) => {
                                    return <li key={index}>{elem}</li>
                                })}
                            </ul>
                }
                <button id="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default AdminLogin