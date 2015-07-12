import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        // return this.store.find('order', 1);
        var store = this.store;
        var order = store.createRecord('order');
        // var shippingAddress = store.createRecord('address');
        // order.set('shippingAddress', shippingAddress);

        store.find('user', 1).then(function (user) {
            var defaultAddress = user.get('addressBook').get('firstObject');
            // should check whether an address exists, if not create a new record.
            order.set('shippingAddress', defaultAddress);
            order.set('billingAddress', defaultAddress);
            order.set('user', user);
        });
        
        store.find('item', 1).then(function (item) {
            order.get('items').pushObject(item);
        });
        
        store.find('item', 2).then(function (item) {
            order.get('items').pushObject(item);
        });

        return order;
    },
    setupController(controller, model) {
        controller.set("order", model)
    }
});
