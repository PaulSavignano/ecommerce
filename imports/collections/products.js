import { Mongo } from 'meteor/mongo'

Meteor.methods({
  'products.insert': function() {
    return Products.insert({
      createdAt: new Date(),
      image: 'http://placehold.it/320x150',
      name: 'Product Name',
      description: 'An example product description.',
      price: 99.95,
      ownerId: this.userId
    })
  },
  'products.remove': function(product) {
    return Products.remove(product)
  },
  'products.update': function(product, key) {
    return Products.update(product, { $set: { key } })
  }
})

export const Products = new Mongo.Collection('products')
