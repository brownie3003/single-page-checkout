import Ember from 'ember';
import EmberValidations from 'ember-validations';
const { computed } = Ember;

export default Ember.Component.extend(EmberValidations, {
    classNames: ['row'],
    card: null,
    expiryMonth: null,
    expiryYear: null,
    ccv: null,
    // This is what we calculate from the expiry month and expiry year inputs on the page and will be
    // set as the expiry date on the payment method.
    computedExpiryDate: computed('expiryYear', 'expiryMonth', 'card', function() {
        let expiryMonth = this.get('expiryMonth');
        let expiryYear = this.get('expiryYear');
        let card = this.get('card');
        let computedExpiryDate = expiryMonth + expiryYear
        card.set('expiryDate', computedExpiryDate);
        return computedExpiryDate;
    }),
    computedCardIsValid: computed('card.name', 'card.cardNumber', 'expiryMonth', 'expiryYear', 'ccv', function() {
        let card = this.get('card');
        return this.get('isValid') && card.get('isValid');
    }),
    validations : {
        expiryYear: { presence: true },
        expiryMonth: { presence: true },
        ccv: {
            presence: true,
            length: {
                minimum: 3,
                messages: {
                    tooShort: "CCV must be 3 characters"
                }
            }
        }
    },
    actions: {
        checkCardIsValid() {
            let card = this.get('card');
            if (this.get('computedCardIsValid')) {
                this.sendAction('setPaymentMethod', card);
            }
        },
        savePaymentMethod(card) {
            this.sendAction('savePaymentMethod', card);
        }
    }
});
