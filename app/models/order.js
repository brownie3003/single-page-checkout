import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
    shippingAddress: DS.belongsTo('address'),
    billingAddress: DS.belongsTo('address'),
    items: DS.hasMany('item', { async: true }),
    user: DS.belongsTo('user', { async: true }),
    isPaid: DS.attr('boolean', { defaultValue: false }),
    deliveryMethod: DS.belongsTo('delivery-method', { defaultValue: null }),
    // Don't know if this is a good idea, but struggle to pass in shipping Address's
    // country to components and if we don't have a saved shipping Address.
    shippingCountry: DS.attr('string', { defaultValue: "UK" }),
    
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
            shippingAddress: 2,
            billingAddress: 1,
            items: [1, 2],
            user: 1
        }
    ]
});
