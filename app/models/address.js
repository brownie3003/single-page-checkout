import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    companyName: DS.attr('string'),
    firstLine: DS.attr('string'),
    secondLine: DS.attr('string'),
    thirdLine: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    postcode: DS.attr('string'),
    country: DS.attr('string'),
    user: DS.belongsTo('user', { async: true }),

    validations: {
        firstName: {
            presence: {
                message: "Hello Sweetums, please tell us your first name so we can get your package to you."
            }
        },
        lastName: {
            presence: {
                message: "Hello hot stuff, I'd like to know your last name, you know, polite society and all."
            }
        },
        firstLine: {
            presence: {
                message: "Just a hint of your address, pretty please."
            }
        },
        city: {
            presence: {
                message: "Represent your city, right here, right now."
            }
        },
        postcode: {
            presence: {
                message: "Postcode, Zipcode, something, we need it."
            },
            length: { minimum: 3 },
        },
        country: {
            presence: true,
            inclusion: {
                in: ['UK', 'USA'],
                message: "For this demo, only 'uk' or 'us' will be accepted for the country. (Yes lowercase becasue I'm a lazy ballbag.)"
            }
        }
    }
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            firstName: "Stephen",
            lastName: "Hemmingswiggle",
            companyName: "Hipster Inc.",
            firstLine: "123 Dalston",
            city: "London",
            postcode: "E8 4RQ",
            country: "UK",
            orders: [1],
            user: 1
        },
        {
            id: 2,
            firstName: "Andy",
            lastName: "Brown",
            firstLine: "123 Daily Planet",
            city: "Boston",
            postcode: "112312",
            country: "USA",
            orders: [1],
            user: 1
        }
    ]
});
