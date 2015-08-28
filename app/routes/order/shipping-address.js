import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let order = this.modelFor('order')
        return order.get('shippingAddress');
    },
    afterModel() {
        this.transitionTo('order.shipping-address.addresses')
    },
    setupController(controller, model) {
        let order = this.modelFor('order');

        controller.set("order", order);
    }
});
