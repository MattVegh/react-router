import React from "react"
import { Link, Switch, Route, useRouteMatch } from "react-router-dom"

import Settings from "./Settings"
import Info from "./Info"

function Profile() {

    const { path, url } = useRouteMatch()
    

    return (
        <div>
            <h1>Profile Page</h1>
            {/* <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/settings">Profile Settings</Link></li>
            </ul> */}

            <Switch>
                <Route exact path='/profile'>
                    <ul>
                        <li><Link to="/profile/info">Profile Info</Link></li>
                        <li><Link to="/profile/settings">Profile Settings</Link></li>
                    </ul>
                </Route>
                <Route path='/profile/settings'>
                    <Settings />
                </Route>

                <Route path='/profile/info'>
                    <Info />
                </Route>
            </Switch>
        </div>
    )
}

export default Profile