import Ember from 'ember';

export default Ember.Component.extend({
    // These should be routes
    showSignIn: false,
    showSignUp: false,
    showGuestCheckout: false,
    actions: {
        showSignIn() {
            this.set('showSignIn', true);
            this.set('showSignUp', false);
            this.set('showGuestCheckout', false);
        },
        showSignUp() {
            this.set('showSignIn', false);
            this.set('showSignUp', true);
            this.set('showGuestCheckout', false);
        },
        showGuestCheckout() {
            this.set('showSignIn', false);
            this.set('showSignUp', false);
            this.set('showGuestCheckout', true);
        },
    }
});
