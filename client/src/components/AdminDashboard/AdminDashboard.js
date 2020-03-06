import React from 'react'
import { Router, Link, navigate } from '@reach/router'
import { Helmet } from 'react-helmet'
import './_AdminDashboard.scss'

import useStateValue from '../../lib/hooks/useStateValue'
import ContentEditor from './ContentEditor'
import Settings from './Settings'
import ServiceRequest from './ServiceRequest'

const AdminDashboard = ({ ...props }) => {

    const [, dispatch] = useStateValue()

    const handleLogout = (e) => {
        fetch('/api/auth/logout')
            .then(response => {
                localStorage.clear('jwt')
                dispatch({
                    type: 'ADMIN_LOGOUT',
                })
            })
        navigate(`/`)
    }

    return (
        <div className="dashboard">
            <Helmet>
                <html lang="en" />
                <title>"Admin Dashboard- Mission Mechanical Services Inc." </title>
                <meta name="description" content=" Welcome to your administrative panel, Tia or Rick or maybe even Brett." />
            </Helmet>
            <div className="responsive-warning">
                <p>Sorry, but we haven't optimized this view for mobile yet. Please open this back up on a desktop.</p>
            </div>
            <div className="container-admin">
                <div className="sidebar">
                    <h1>Admin Dashboard</h1>
                    <ul className="link-list">
                        <li><Link to={`/owner-admin/content-editor`} className="link">Content Editor</Link></li>
                        <li> <Link to={`/owner-admin/settings`} className="link">Settings</Link></li>
                        <li> <Link to={`/owner-admin/request-service`} className="link">Request Service</Link></li>
                    </ul>
                    <img className="company-logo" src="/favicon.ico" alt="Company logo." />
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
                <div className="container-active-pane">
                    <Router basepath="/owner-admin">
                        <ContentEditor path="/content-editor" />
                        <Settings path="/settings" />
                        <ServiceRequest path="/request-service" />
                        <Home path="/" />
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard

const Home = (props) => (
    <div className="dashboard-default">
        <img src="/media/logo.png" alt="Company Logo" />
        <p>Make a selection in the left menu to get started!</p>
    </div>
)
