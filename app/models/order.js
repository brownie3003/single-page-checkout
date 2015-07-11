import DS from 'ember-data';

export default DS.Model.extend({
    shippingAddress: DS.belongsTo('address'),
    billingAddress: DS.belongsTo('address'),
    test: DS.attr('string'),
    user: DS.belongsTo('user', { async: true})
    // deliveryMethod: DS.belongsTo('delivery-method')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            shippingAddress: 2,
            billingAddress: 1,
            test: "hello",
            user: 1
        }
    ]
});
