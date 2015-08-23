import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    
    createUser(user) {
        return user.save();
    }
});
