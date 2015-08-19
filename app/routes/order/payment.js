import Ember from 'ember';

// TODO payment, shipping routes all return the model for order, could set up class hierachy.
// I've seen a post on how to do it somewhwere...
export default Ember.Route.extend({
    model() {
        return this.modelFor('order');
    },
    setupController(controller, model) {
        controller.set("order", model);
    },
});
