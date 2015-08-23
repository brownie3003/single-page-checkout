import Ember from 'ember';

export default Ember.Route.extend({
    userService: Ember.inject.service(),
    actions: {
        createUser(user) {
            let userService = this.get('userService');
            userService.createUser(user).then((user) => {
                let order = this.modelFor('order');
                this.send('setUser', user);
                this.transitionTo('order.shipping-options');
            });
        }
    }
});
