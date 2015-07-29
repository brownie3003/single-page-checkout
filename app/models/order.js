import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
    shippingAddress: DS.belongsTo('address'),
    billingAddress: DS.belongsTo('address'),
    items: DS.hasMany('item', { async: true }),
    user: DS.belongsTo('user', { async: true }),
    isPaid: DS.attr('boolean', { defaultValue: false }),
    deliveryMethod: DS.belongsTo('delivery-method', { defaultValue: null }),
    
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
