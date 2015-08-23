import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    
    createUser(user) {
        let store = this.get('store');

        let newUser = store.createRecord('user', { email: user.email });
        return newUser.save();
    }
});
