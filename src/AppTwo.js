import React from "react"
import { Route, Link, Switch } from 'react-router-dom'
import Home from './AppTwoComponents/Home'
import Products from './AppTwoComponents/Products'
import ProductsDetail from './AppTwoComponents/ProductDetail'

function App() {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </nav>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/products'>
                    <Products />
                </Route>

                <Route path='/products/:productsId'>
                    <ProductsDetail />
                </Route>
            </Switch>

        </div>
    )
}

export default App