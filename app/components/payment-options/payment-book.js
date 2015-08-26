import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['book'],
    store: Ember.inject.service(),
    showCardEntryForm: false,
    // Card form will have an address form rendered into it for billing address.
    showFullAddressFormForBilling: false,
    showAddressServiceForBilling: true,
    newCard: null,
    billingAddress: null,
    didInsertElement() {
        let paymentMethods = this.get('paymentMethods');
        if (paymentMethods.length === 0) {
            this.send('enterNewCard');
        }
    },
    actions: {
        selectSavedPayment(card) {
            this.send('hideCardEntryForm');
            this.send('setPaymentMethod', card);
        },
        setPaymentMethod(paymentMethod) {
            this.sendAction('setPaymentMethod', paymentMethod);
        },
        enterNewCard() {
            let store = this.get('store');
            let newCard = store.createRecord('paymentMethod');
            let newAddress = store.createRecord('address');
            let user = this.get('user');
            
            newAddress.set('firstName', user.get('firstName'));
            newAddress.set('lastName', user.get('lastName'));
            newAddress.set('companyName', user.get('companyName'));
            newCard.set('address', newAddress);
            
            this.send('toggleShowCardEntryForm');
            this.set('newCard', newCard);
            this.set('billingAddress', newAddress)
            this.sendAction('clearPaymentMethod');
        },
        hideCardEntryForm() {
            this.set('showCardEntryForm', false);
        },
        savePaymentMethod(card) {
            this.sendAction('savePaymentMethod', card)
            this.set('newCard', null);
            this.send('toggleShowCardEntryForm');
        },
        toggleShowCardEntryForm() {
            this.toggleProperty('showCardEntryForm');
        },
        useShippingAsBilling() {
            let shippingAddress = this.get('shippingAddress');
            this.set('billingAddress', shippingAddress);
            this.set('showFullAddressFormForBilling', true);
            this.set('showAddressServiceForBilling', false);
        }
    }
});
