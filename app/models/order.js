import DS from 'ember-data';

export default DS.Model.extend({
    shippingAddress: DS.belongsTo('address'),
    billingAddress: DS.belongsTo('address'),
    items: DS.hasMany('item', { async: true }),
    user: DS.belongsTo('user', { async: true }),
    isPaid: DS.attr('boolean', { defaultValue: false }),
    deliveryMethod: DS.belongsTo('delivery-method', { defaultValue: null })
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
