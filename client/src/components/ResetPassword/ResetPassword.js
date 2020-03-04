import React, { useState } from 'react'
import { navigate, useParams } from '@reach/router'
import './_ResetPassword.scss'

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
            <div className="container-reset-password">
                <form className="form">
                    <label htmlFor="newPassword">New Password</label>
                    <input name="newPassword" type="password" onChange={handleChange} />
                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    <input name="confirmNewPassword" type="password" onChange={handleChange} />
                    <div className="errors">{errors.message}</div>
                    <button onClick={submit}>Send</button>
                </form>
            </div>
        )
    }
}

export default ResetPassword