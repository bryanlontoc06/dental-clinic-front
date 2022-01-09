import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import Patients from './core/Patient'
import Menu from './core/Menu'
import Footer from './core/Footer'



const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/patients" component={Patients} />
                {/* <Route exact path="/users" component={Users} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <PrivateRoute exact path="/post/create" component={NewPost} /> */}
            </Switch>
            <Footer />
        </div>
    )
}

export default MainRouter;
