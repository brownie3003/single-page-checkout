import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['payment-options'],
    // This is probably a terrible way to monitor the selected payment option.. but it works for now #rapidPrototyping
    // In fact this is in place of having a payment options model which I've not created. See thoughts.md in notes folder ;)
    paymentOptions: ["creditCard", "payPal", "googleWallet", "giftCard"],
    selectedPaymentOption: "creditCard",
    actions: {
        setPaymentMethod(paymentMethod) {
            this.sendAction('setPaymentMethod', paymentMethod);
        },
        savePaymentMethod(card) {
            this.sendAction('savePaymentMethod', card)
        },
        clearPaymentMethod() {
            this.sendAction('clearPaymentMethod');
        },
        setPaymentOption(option) {
            this.set('selectedPaymentOption', option)
        }
    }
});
