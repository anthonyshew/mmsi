import React from 'react'
import { useNavigate } from '@reach/router'
import useStateValue from '../../lib/hooks/useStateValue'

const AdminDashboard = ({ ...props }) => {
    const navigate = useNavigate()

    const [, dispatch] = useStateValue()

    const handleLogout = (e) => {
        fetch('/api/admin/auth/logout')
            .then(response => {
                localStorage.clear('jwt')
                dispatch({
                    type: 'authLogout',
                })
            })
            .then(res => navigate("/"))
    }

    return (
        <div className="dashboard" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
        }}>
            <p>Welcome to the admin dashboard.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default AdminDashboard