import React, { useState } from 'react'
import { Router, navigate, useParams } from '@reach/router'
import { Helmet } from 'react-helmet'
import '../styles/_ResetPassword.scss'

import Navbar from '../components/utils/Navbar/Navbar'
import Footer from '../components/utils/Footer/Footer'

export default ({ ...props }) => (
    <Router basepath="/reset-password">
        <ResetPassword path="/" />
        <ResetPassword path="/:token" />
    </Router>
)

const ResetPassword = ({ ...props }) => {
    const { token } = useParams()

    const [formInput, setFormInput] = useState({
        token: token,
        newPassword: '',
        confirmNewPassword: ''
    })

    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        fetch(`/api/administrator/reset-password`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInput)
        })
            .then(response => response.json())
            .then(response => {
                if (!response.success) {
                    setErrors(response.errors)
                } else {
                    setSuccess(true)
                }
            })
    }

    if (success) {
        return navigate('/')
    } else {
        return (
            <>
                <Helmet>
                    <html lang="en" />
                    <title>Reset Password - Mission Mechanical Services Inc.</title>
                    <meta name="description" content=" Reset the administrative password of MMSI (with the proper credentials)." />
                </Helmet>
                <Navbar />
                <main className="container-reset-password">
                    <form className="form">
                        <label htmlFor="newPassword">New Password</label>
                        <input name="newPassword" type="password" onChange={handleChange} />
                        <label htmlFor="confirmNewPassword">Confirm New Password</label>
                        <input name="confirmNewPassword" type="password" onChange={handleChange} />
                        <div className="errors">{errors.message}</div>
                        <button onClick={submit}>Send</button>
                    </form>
                </main>
                <Footer
                    backgroundColor="#131241"
                    headerColor="#bfbfbf"
                    linkColor="#bfbfbf"
                />
            </>
        )
    }
}