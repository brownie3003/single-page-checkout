import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    isSignedIn: computed('user', function() {
        return this.get('user');
    }),
    navItemWidth: computed('isSignedIn', function() {
        let isSignedIn = this.get('isSignedIn');
        if (isSignedIn) {
            return "thirty-percent"
        } else {
            return "twenty-two-percent"
        }
    }),
    hasShippingAddress: computed('shippingAddress', function() {
        let shippingAddress = this.get('shippingAddress');
        return !Object.keys(shippingAddress.getProperties()).length === 0 
    })
});
