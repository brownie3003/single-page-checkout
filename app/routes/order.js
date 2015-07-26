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
        var deliveryMethods = this.store.find('deliveryMethod');
        controller.set("order", model);
    },
    actions: {
        setDeliveryMethod: function(deliveryMethod) {
            var order = this.modelFor('order');
            order.set('deliveryMethod', deliveryMethod);
        },
        // Surely some refactoring can be done here with shipping/billing
        // if only I had some tests to ensure refactoring didn't break the code... 
        // TODO write route and component tests
        // TODO refactor this code.
        setShippingAddress: function(shippingAddress) {
            var order = this.modelFor('order');
            order.set('shippingAddress', shippingAddress);
        },
        setBillingAddress: function(billingAddress) {
            var order = this.modelFor('order');
            order.set('billingAddress', billingAddress);
        },
        // All we do here is clear the shipping address. It represents the user telling us they are 
        // going to submit a new address, but not an actual address.
        // We need to wait for a valid  address before setting it on the order.
        enterNewShippingAddress: function() {
            var order = this.modelFor('order');
            this.send('clearAddress', order, 'shippingAddress');
        },
        enterNewBillingAddress: function() {
            var order = this.modelFor('order');
            this.send('clearAddress', order, 'billingAddress')
        },
        clearAddress: function(order, addressType) {
            order.set(addressType, null);
        }
    }
});
