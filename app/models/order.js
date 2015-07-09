import DS from 'ember-data';

export default DS.Model.extend({
    shippingAddress: DS.belongsTo('address', { async: true }),
    test: DS.attr('string'),
    user: DS.belongsTo('user', { async: true})
    // billingAddress: DS.belongsTo('address'),
    // deliveryMethod: DS.belongsTo('delivery-method')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            shippingAddress: 2,
            test: "hello",
            user: 1
        }
    ]
});
