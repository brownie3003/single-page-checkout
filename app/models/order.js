import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
    shippingAddress: DS.belongsTo('address', { async: true }),
    billingAddress: DS.belongsTo('address', { async: true }),
    items: DS.hasMany('item', { async: true }),
    user: DS.belongsTo('user', { async: true }),
    isPaid: DS.attr('boolean', { defaultValue: false }),
    deliveryMethod: DS.belongsTo('delivery-method'),
    // Don't know if this is a good idea, but struggle to pass in shipping Address's
    // country to components and if we don't have a saved shipping Address.
    shippingCountry: DS.attr('string', { defaultValue: "UK" }),
    mooScenarioDescription: DS.attr('string'),
    
    validations: {
        shippingAddress: {
            presence: true
        },
        billingAddress: {
            presence: true
        },
        deliveryMethod: {
            presence: true
        }
    }
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            items: [1, 2],
            user: 1,
            shippingCountry: "UK",
            mooScenarioDescription: "Returning Users"
        }
    ]
});
