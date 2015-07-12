import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  description: DS.attr('string'),
  price: DS.attr('number'),
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            quantity: 200,
            description: "Matte Original Bussiness Cards",
            price: 34.99
        },
        {
            id: 2,
            quantity: 1,
            description: "Leather Business Card Holder",
            price: 10.99,
        }
    ]
});
