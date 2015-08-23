import Ember from 'ember';
const { computed } = Ember;

export default Ember.Route.extend({
    model: function(params) {
        let store = this.store;
        let order = store.find('order', params.order_id);
        // let order = store.createRecord('order');
        // 
        // store.find('user', 1).then(function (user) {
        //     let defaultAddress = user.get('addressBook').get('firstObject');
        //     // should check whether an address exists, if not create a new record.
        //     // For prototype assume user has a saved address which can inform about
        //     // shipping country for delivery methods.
        //     order.set('shippingAddress', defaultAddress);
        //     order.set('billingAddress', defaultAddress);
        //     order.set('user', user);
        // });
        // 
        // store.find('item', 1).then(function (item) {
        //     order.get('items').pushObject(item);
        // });
        // 
        // store.find('item', 2).then(function (item) {
        //     order.get('items').pushObject(item);
        // });

        return order;
    },
    afterModel(model) {
        // Make sure items promise is resolved for rendering of components.
        model.get('paymentMethod');
        return model.get('items');
    },
    setupController(controller, model) {
        controller.set("order", model);
        controller.set("currentRoute", this.get("routeName"));
    },
    // getDefaultDeliveryMethod: computed(function(order, deliveryMethods) {
    //     let shippingCountry = this.get('order').get('shippingAddress').get('country');
    //     let cheapestMethod = deliveryMethods.get('first');
    //     deliveryMethods.forEach(function(deliveryMethod){
    //         if (deliveryMethod.get('price') < cheapestMethod.get('price')) {
    //             cheapestMethod = deliveryMethod;
    //         }
    //     });
    //     
    //     return cheapestMethod;
    // }),
    actions: {
        setDeliveryMethod: function(deliveryMethod) {
            let order = this.modelFor('order');
            order.set('deliveryMethod', deliveryMethod);
        },
        // Surely some refactoring can be done here with shipping/billing
        // if only I had some tests to ensure refactoring didn't break the code... 
        // TODO write route and component tests
        // TODO refactor this code.
        setShippingAddress: function(shippingAddress) {
            let order = this.modelFor('order');
            order.set('shippingAddress', shippingAddress);
        },
        setBillingAddress: function(billingAddress) {
            let order = this.modelFor('order');
            order.set('billingAddress', billingAddress);
        },
        setUser: function(user) {
            let order = this.modelFor('order');
            return order.set('user', user);
        },
        // All we do here is clear the shipping address. It represents the user telling us they are 
        // going to submit a new address, but not an actual address.
        // We need to wait for a valid  address before setting it on the order.
        enterNewShippingAddress: function() {
            let order = this.modelFor('order');
            this.send('clearAddress', order, 'shippingAddress');
        },
        enterNewBillingAddress: function() {
            let order = this.modelFor('order');
            this.send('clearAddress', order, 'billingAddress');
        },
        clearAddress: function(order, addressType) {
            order.set(addressType, null);
        },
        saveAddress: function(address) {
            let order = this.modelFor('order');
            let user = order.get('user');
            address.set('user', user);
            address.save();
        },
        setShippingCountry(shippingCountry) {
            let order = this.modelFor('order');
            order.set('shippingCountry', shippingCountry);
        },
        applyDiscount(code) {
            let order = this.modelFor('order');
            order.set('discount', -10.00);
        },
        setPaymentMethod(paymentMethod) {
            let order=this.modelFor('order');
            order.set('paymentMethod', paymentMethod);
        },
        clearPaymentMethod() {
            let order = this.modelFor('order');
            order.set('paymentMethod', null);
        },
        savePaymentMethod(paymentMethod) {
            let order = this.modelFor('order');
            let user = order.get('user');
            paymentMethod.set('user', user);
            paymentMethod.set('type', "AMEX");
            paymentMethod.save();
        }
    }
});
