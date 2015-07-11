import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        // return this.store.find('order', 1);
        var store = this.store;
        var order = store.createRecord('order');
        var shippingAddress = store.createRecord('address');
        order.set('shippingAddress', shippingAddress);

        store.find('user', 1).then(function (user) {
            order.set('user', user);
        });

        return order;
    }
});
