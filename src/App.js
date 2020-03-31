import React from "react"
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'

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

            </Switch>
        </div>
    )
}

export default App