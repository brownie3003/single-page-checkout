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
    // TODO figure out logic for disabling links
    // disableAddress: computed('shippingAddress', function() {
    //     let shippingAddress = this.get('shippingAddress');
    //     
    //     return Ember.isEmpty(shippingAddress.get('content'));
    // }),
    // disableShipping: computed('disableAddress', 'shippingOption', function() {
    //     let disableAddress = this.get('disableAddress');
    //     let shippingOption = this.get('shippingOption');
    //     
    //     return (disableAddress && shippingOption);
    // }),
    // disablePayment: computed('disableShipping', 'paymentMethod', function() {
    //     let disableShipping = this.get('disableShipping');
    //     let paymentMethod = this.get('paymentMethod');
    //     
    //     return !(disableShipping && paymentMethod)
    // }),
    navItemWidth: computed('isNew', function() {
        let isNew = this.get('user').get('isNew');
        if (isNew) {
            return "twenty-two-percent"
        } else {
            return "thirty-percent"
        }
    }),
    hasShippingAddress: computed('shippingAddress', function() {
        let shippingAddress = this.get('shippingAddress');
        return !Object.keys(shippingAddress.getProperties()).length === 0 
    })
});
