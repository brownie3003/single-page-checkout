import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    addressBook: DS.hasMany('address', { async: true }),
    paymentBook: DS.hasMany('payment-method', { async: true }),
    
    validations: {
        firstName: {
            presence: true
        },
        lastName: {
            presence: true
        },
        email: {
            presence: true
        }
    }
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            email: "stephenh@moo.com",
            addressBook: [1, 2],
            paymentBook: [1, 2, 3]
        }
    ]
});
