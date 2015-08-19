import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    tagName: "label",
    classNames: ['payment-method', 'radio'],
    classNameBindings: ['active'],
    active: computed('paymentMethod', 'selectedPaymentMethod', function() {
        let paymentMethod = this.get('paymentMethod');
        let selectedPaymentMethod = this.get('selectedPaymentMethod');
        // TODO I seriously need to figure out how to wait for promises to resolve before doing these checks.
        // Or figure out why paymentMethod is an ember object but selectedPaymentMethod is a promise object!
        return paymentMethod.get('cardNumber') === selectedPaymentMethod.get('cardNumber') ? "active" : ""
    }),
    actions: {
        setPaymentMethod(paymentMethod) {
            this.sendAction('setPaymentMethod', paymentMethod);
        }
    }
});
