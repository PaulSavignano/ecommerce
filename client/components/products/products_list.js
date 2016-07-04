import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'
import accounting from 'accounting'

import { Products } from '../../../imports/collections/products'

class ProductsList extends Component {
  renderList() {
    return this.props.products.map((product) => {
      const { name, description, price } = product
      const url = `products/${product._id}`
      return (
        <div key={product._id}>
          <div className="thumbnail">
              <img src="http://placehold.it/320x150" />
              <div className="caption">
                  <h4 className="pull-right">{accounting.formatMoney(price)}</h4>
                  <h4><Link to={url}>{name}</Link>
                  </h4>
                  <p>{description}</p>
              </div>
              <div className="ratings">
                  <p className="pull-right">15 reviews</p>
                  <p>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                  </p>
              </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="products-list">
        {this.renderList()}
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('products')
  return { products: Products.find().fetch() }
}, ProductsList)
