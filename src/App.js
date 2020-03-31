import React from "react"
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import About from "./About"

function App() {

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>

            <Switch>
                {/* <Route exact path='/' render={() => <h1>Home Page</h1>} />
                <Route path='/about' render={() => <h1>About Page</h1>} /> */}

                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Switch>
        </div>
    )
}

export default App