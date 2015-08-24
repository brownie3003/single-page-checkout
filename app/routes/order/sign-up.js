import Ember from 'ember';

export default Ember.Route.extend({
    userService: Ember.inject.service(),
    model() {
        return this.modelFor('order');
    },
    setupController(controller, model) {
        controller.set('order', model);
    },
    actions: {
        createUser(user) {
            let userService = this.get('userService');
            
            this.send('setUser', user);
            this.transitionTo('order.shipping-address');
            // Not syncing to users to keep record isNew for nav
            // userService.createUser(user).then((user) => {
            //     this.send('setUser', user);
            //     this.transitionTo('order.shipping-address');
            // });
        }
    }
});
