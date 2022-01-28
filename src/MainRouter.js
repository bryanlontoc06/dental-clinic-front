import React from 'react'
import {Switch, Route, useLocation, Redirect} from 'react-router-dom'
import Home from './core/Home'
import Users from './core/Patient'
import Menu from './core/Menu'
import Footer from './core/Footer'
import Signin from './core/SignIn'
import Signup from './core/Register'
import Appointments from './core/Appointments'
import Services from './core/Services'
import NewAppointments from './core/Appointments/NewAppointment'
import {isAuthenticated} from './auth'
import PrivateRoute from './auth/PrivateRoute'



const MainRouter = () => {
    const location = useLocation();
    if(isAuthenticated() && ((location.pathname === '/signin') || (location.pathname === '/signup') || (location.pathname === '/admin'))) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <Menu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/users" component={Users} /> */}
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/admin" component={Signin} />
                    <Route exact path="/services" component={Services} />
                    <PrivateRoute exact path="/appointments" component={Appointments} />
                    <PrivateRoute exact path="/appointments/new" component={NewAppointments} />
                    {/* <Route exact path="/users" component={Users} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoute exact path="/post/create" component={NewPost} /> */}
                </Switch>
            <Footer />
        </div>
    )
}

export default MainRouter;
