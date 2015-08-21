import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    
    createUser(user) {
        let store = this.get('store');
        debugger;
        store.createRecord('user', { email: user.get('email') });
        store.save();
    }
});
