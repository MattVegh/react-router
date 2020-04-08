import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import ServicesList from "./pages/services/ServicesList"
import ServiceDetail from "./pages/services/ServiceDetail"
import './App.css'

import {Switch, Route} from "react-router-dom"

function App() {

    return (
        <div>

            <Header />
            
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
            
            <Footer />
        </div>
    )
}

export default App