import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('orders');
    this.route('order', { path: "/order/:order_id" }, function () {
        this.route('cart');
        this.route('sign-in');
        this.route('shipping-address');
        this.route('shipping-options');
        this.route('payment');
    });
});

export default Router;
