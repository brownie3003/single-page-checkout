import DS from 'ember-data';

export default DS.Model.extend({
    address: DS.belongsTo('address', { async: true }),
    test: DS.attr('string')
    // billingAddress: DS.belongsTo('address'),
    // deliveryMethod: DS.belongsTo('delivery-method')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            address: 2,
            test: "hello"
        }
    ]
});
