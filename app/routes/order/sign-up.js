import Ember from 'ember';

export default Ember.Route.extend({
    userService: Ember.inject.service(),
    model() {
        return this.store.createRecord('user');
    },
    setupController(controller, model) {
        let order = this.modelFor('order');
        
        controller.set('user', model);
        controller.set('order', order);
    },
    actions: {
        createUser(user) {
            let userService = this.get('userService');
            
            this.send('setUser', user);
            this.transitionTo('order.addresses');
            // Not syncing to users to keep record isNew for nav
            // userService.createUser(user).then((user) => {
            //     this.send('setUser', user);
            //     this.transitionTo('order.addresses');
            // });
        }
    }
});
