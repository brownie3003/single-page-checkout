import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    tagName: "nav",
    classNames: ['navbar', 'navbar-default', 'checkout-nav'],
    isSignedIn: computed('user', function() {
        if (this.get('user') === undefined || this.get('user').get('content') === null) {
            return false;
        }
        else {
            return true;
        }
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
