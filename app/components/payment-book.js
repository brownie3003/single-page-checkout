import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    showCardEntryForm: false,
    newCard: null,
    actions: {
        setPaymentMethod(paymentMethod) {
            this.sendAction('setPaymentMethod', paymentMethod);
        },
        enterNewCard() {
            let store = this.get('store');
            let newCard = store.createRecord('paymentMethod');
            this.send('toggleShowCardEntryForm');
            this.set('newCard', newCard);
            this.sendAction('clearPaymentMethod');
        },
        savePaymentMethod(card) {
            this.sendAction('savePaymentMethod', card)
            this.set('newCard', null);
            this.send('toggleShowCardEntryForm');
        },
        toggleShowCardEntryForm() {
            this.toggleProperty('showCardEntryForm');
        }
    }
});
