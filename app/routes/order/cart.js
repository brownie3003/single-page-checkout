import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        var order = this.modelFor('order');
        controller.set("order", order);
    }
})
