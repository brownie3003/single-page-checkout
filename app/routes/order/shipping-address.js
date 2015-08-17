import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.modelFor('order');
    },
    afterModel(model) {
        // Let's assume we can't get here without a user.
        let user = model.get('user');
        if (Object.keys(user.get('addressBook').getProperties()).length > 0) {
            let defaultAddress = user.get('addressBook').get('firstObject');
            model.set('shippingAddress', defaultAddress);
            model.set('billingAddress', defaultAddress);
        }
        return model;
    },
    setupController(controller, model) {
        controller.set("order", model);
    },
})
