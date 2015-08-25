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
            presence: {
                message: "We require a first name"
            },
            length: {
                minimum: 2,
                messages: {
                    tooShort: " Your last name must be at least 2 characters"
                }
            }
        },
        lastName: {
            presence: {
                message: "We require a last name"
            },
            length: {
                minimum: 2,
                messages: {
                    tooShort: "Your last name must be at least 2 characters"
                }
            }
        },
        email: {
            presence: {
                message: "We require an email address"
            }
        }
    }
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            firstName: "Stephen",
            lastName: "Hemmingswiggle",
            email: "stephenh@moo.com",
            addressBook: [1, 2],
            paymentBook: [1, 2, 3]
        },
        {
            id: 2,
            firstName: "Eddard",
            lastName: "Stark",
            email: "eddard@winterfell.com"
        }
    ]
});
