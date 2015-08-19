import Ember from 'ember';

export default Ember.Component.extend({
    showCardEntryForm: false,
    actions: {
        setPaymentMethod(paymentMethod) {
            this.sendAction('setPaymentMethod', paymentMethod);
        },
        toggleShowCardEntryForm() {
            this.toggleProperty('showCardEntryForm');
        }
    }
});
