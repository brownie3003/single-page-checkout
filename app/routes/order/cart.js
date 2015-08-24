import Ember from 'ember';

export default Ember.Route.extend({
    shippingService: Ember.inject.service(),
    model() {
        return this.modelFor('order');
    },
    setupController(controller, model) {
        controller.set("order", model);
    }
});
