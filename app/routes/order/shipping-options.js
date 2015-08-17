import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.modelFor('order');
    },
    setupController(controller, model) {
        controller.set("order", model);
    },
})
