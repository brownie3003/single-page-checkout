import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createUser() {
            let user = {
                firstName: this.get('firstName'),
                lastName: this.get('lastName'),
                email: this.get('email'),
            }
            // TODO I would like this to be a promise, as we should sync
            // with server and return success/failure/pending, 
            // but at the moment 'send' & 'sendAction'
            // are not a promises, they return true or false.
            // potential way around http://discuss.emberjs.com/t/sendaction-as-a-promise/3143
            this.sendAction('createUser', user)
        }
    }
});
