import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        setPaymentMethod(paymentMethod) {
            this.sendAction('setPaymentMethod', paymentMethod);
        }
    }
});
