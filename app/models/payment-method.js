import DS from 'ember-data';
const { computed } = Ember;

// This is not an accurate representation of a payment method, in fact it's a card payment method, which should
// probably be a child of payment method. However for prototype Paypal and other payment methods are links/not working
// so this is all I need at the moment.
export default DS.Model.extend({
    cardNumber: DS.attr('string'),
    expiryDate: DS.attr('string'),
    name: DS.attr('string'),
    type: DS.attr('string'),
    
    // Computed properties
    lastFourDigits: computed('cardNumber', function() {
        let cardNumber = this.get('cardNumber');
        if (!Ember.isEmpty(cardNumber)) {
            return cardNumber.replace(/ /g, "").substr(-4);
        }
    })
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            cardNumber: "3434 2988 9123 1231",
            expiryDate: "11/19",
            name: "Rob Stark",
            type: "VISA"
        },
        {
            id: 2,
            cardNumber: "2324 4838 3943 0293",
            expiryDate: "02/18",
            name: "Jon Snow",
            type: "AMEX"
        },
        {
            id: 3,
            cardNumber: "3929 8348 2093 1293",
            expiryDate: "04/21",
            name: "Arya Stark",
            type: "MASTERCARD"
        }
    ]
});
