import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import './App.css'

import {Switch, Route} from "react-router-dom"

function App() {

    return (
        <div>
            {/* <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>

            <Switch>
                 <Route exact path='/' render={() => <h1>Home Page</h1>} />
                <Route path='/about' render={() => <h1>About Page</h1>} /> 

                 <Route exact path='/' component={Home} />
                <Route path='/about' component={About} /> 

                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Switch> */}

            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App