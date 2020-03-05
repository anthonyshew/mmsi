import React, { useState } from 'react'
import { navigate } from '@reach/router'

const Settings = ({ ...props }) => {
    return (
        <div className="container-settings">
            <ResetPassword />
        </div>
    )
}

export default Settings

const ResetPassword = ({ ...props }) => {
    const [formInput, setFormInput] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
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

        fetch('/api/administrator/change-password', {
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
                if (!response.success) { setSubmissionErrors(response.errors) }
                else {
                    localStorage.clear('jwt')
                    setSuccess(true)
                }
            })
    }

    if (success) {
        return (
            navigate("/")
        )
    } else {
        return (
            <div className="admin-service-request">

                <form className="form">
                    <h1 className="h1">Reset Password</h1>
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        type="password"
                        name="currentPassword"
                        onChange={handleChange}
                        value={formInput.email}
                    />
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        onChange={handleChange}
                        value={formInput.email}
                    />
                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    <input
                        type="password"
                        name="confirmNewPassword"
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
                        {isSubmitting ? "..." : "Submit New Password"}
                    </button>
                </form>
            </div>
        )
    }
}