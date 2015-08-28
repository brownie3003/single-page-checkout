import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('address');
    },
    afterModel(model, transition) {
        let order = this.modelFor('order');
        
        return order.get('user').then(
            (user) => {
                model.set('name', user.get('fullName'));
            }
        );
    }
});
