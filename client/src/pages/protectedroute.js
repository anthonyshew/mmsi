import React from 'react'
import useStateValue from '../lib/hooks/useStateValue'
import AdminDashboard from '../components/AdminDashboard'
import AdminLogin from '../components/lib/AdminLogin'

const Protectedroute = ({ ...props }) => {
    const [{ isAuthenticated }] = useStateValue()

    if (isAuthenticated) {
        return (
            <AdminDashboard />
        )
    } else {
        return (
            <AdminLogin />
        )
    }
}

export default Protectedroute