import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import ServicesList from "./pages/services/ServicesList"
import ServiceDetail from "./pages/services/ServiceDetail"
import './App.css'

import { Link, Switch, Route, Redirect } from "react-router-dom"

function App() {

    return (
        <div>
            {/* <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route path="/services/:serviceId" >
                    <ServiceDetail />
                </Route>
            </Switch>
            
            <Footer /> */}

            <Link to="/">Home</Link>
            <Link to="/private">Private</Link>

            <Switch>
                <Route exact path="/">
                    <h1>Home page, anyone is allowed here</h1>
                </Route>
                <Route path="/private">
                    <h1>Protected page, must be logged in to be here</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default App