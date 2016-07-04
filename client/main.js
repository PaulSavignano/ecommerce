import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/app'
import Home from './components/home'
import ProductsList from './components/products/products_list'
import ProductsMain from './components/products/products_main'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="products/:productId" component={ProductsMain} />
      <Route path="about" component={About} />
      <Route path="services" component={Services} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'))
})
