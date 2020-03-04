import React from 'react'

import useStateValue from '../../lib/hooks/useStateValue'

import AdminDashboard from '../../pages/owneradmin'

import AdminLogin from './AdminLogin'

const ProtectedRoute = ({ component: Component, ...props }) => {

    const [{ isAuthenticated }] = useStateValue()

    if (isAuthenticated) {
        return <AdminDashboard />
    }
    else {
        return <AdminLogin />
    }
}

export default ProtectedRoute