import { Meteor } from 'meteor/meteor';
import { Products } from '../imports/collections/products.js'

Meteor.startup(() => {
  Meteor.publish('products', function() {
    return Products.find({})
  })
});
