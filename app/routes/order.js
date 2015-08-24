import Ember from 'ember';
const { computed } = Ember;

export default Ember.Route.extend({
    shippingService: Ember.inject.service(),
    model: function(params) {
        let store = this.store;
        let order = store.find('order', params.order_id);

        return order;
    },
    afterModel(model) {
        // Make sure items promise is resolved for rendering of components.
        let order = model;
        
        // If, for whatever reason, we don't have a shipping option, let's set the default.
        model.get('shippingOption').then(shippingOption => {
            if (!shippingOption) {
                return this.setDefaultshippingOption(order);
            }
        })
        
        order.get('paymentMethod');
        
        return order.get('items');
    },
    setupController(controller, model) {
        controller.set("order", model);
    },
    setDefaultshippingOption(model) {
        let shippingService = this.get('shippingService');
        let shippingCountry = model.get('shippingCountry');
    
        return shippingService.getDefaultShippingOption(shippingCountry)
            .then(defaultshippingOption => {
                model.set('shippingOption', defaultshippingOption);
            });
    },
    actions: {
        setShippingOption: function(shippingOption) {
            let order = this.modelFor('order');
            order.set('shippingOption', shippingOption);
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
