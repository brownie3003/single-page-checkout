import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  originalPrice: DS.attr('number'),
  finalPrice: DS.attr('number'),
  type: DS.attr('string'),
  image: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Business Cards",
            quantity: 200,
            description: "Matte Original Bussiness Cards",
            originalPrice: 34.99,
            finalPrice: 28.99,
            type: 'print',
            image: 'assets/images/products/business_cards/front.png'
        },
        {
            id: 2,
            title: "Business Card Holder",
            quantity: 1,
            description: "Leather Business Card Holder",
            finalPrice: 10.99,
            type: 'accessory',
            image: 'assets/images/products/holder/main.png'
        }
    ]
});
