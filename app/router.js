import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('orders');
    this.route('order', { path: "/order/:order_id" }, function () {
        this.route('cart');
        this.route('account', function() {
            this.route('sign-in');
        });
        this.route('sign-up', { path: "/about-you"});
        this.route('shipping-address', function() {
            this.route('addresses', function() {
                this.route('new');
            });
        });
        this.route('shipping-options');
        this.route('payment');
        this.route('confirmation');
    });
});

export default Router;
