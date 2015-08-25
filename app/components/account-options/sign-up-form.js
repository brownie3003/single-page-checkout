import Ember from 'ember';
import EmberValidations from 'ember-validations';
const { computed } = Ember;

export default Ember.Component.extend(EmberValidations, {
    store: Ember.inject.service(),
    user: null,
    password: null,
    passwordConfirmation: null,
    showAllErrors: false,
    didInsertElement() {
        let store = this.get('store');
        
        let user = store.createRecord('user');
        this.set('user', user);
    },
    signUpIsValid: computed(
        'user.firstName', 
        'user.lastName', 
        'user.email', 
        'password',
        'passwordConfirmation', function() {
            let user =  this.get('user');
            return this.get('isValid') && user.get('isValid');
        }
    ),
    validations: {
        password: { 
            presence: true, 
            length: { minimum: 8 },
            confirmation: true
        }
    },
    actions: {
        createUser() {
            if (this.get('signUpIsValid')) {
                // TODO I would like this to be a promise, as we should sync
                // with server and return success/failure/pending, 
                // but at the moment 'send' & 'sendAction'
                // are not a promises, they return true or false.
                // potential way around http://discuss.emberjs.com/t/sendaction-as-a-promise/3143
                this.sendAction('createUser', this.get('user'));
            } else {
                this.set('showAllErrors', true);
            }
        }
    }
});
