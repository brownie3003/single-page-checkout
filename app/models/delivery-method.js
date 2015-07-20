import DS from 'ember-data';

export default DS.Model.extend({
  deliveryDate: DS.attr('date'),
  price: DS.attr('number'),
  trackable: DS.attr('boolean'),
  shippingCountry: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            deliveryDate: moment().add(1, 'days').format('Do MMMM'),
            price: 22.00,
            trackable: true,
            shippingCountry: 'uk'
        },
        {
            id: 2,
            deliveryDate: moment().add(2, 'days').format('Do MMMM'),
            price: 16.00,
            trackable: true,
            shippingCountry: 'uk'
        },
        {
            id: 3,
            deliveryDate: moment().add(4, 'days').format('Do MMMM'),
            price: 8.00,
            trackable: true,
            shippingCountry: 'uk'
        },
        {
            id: 4,
            deliveryDate: moment().add(7, 'days').format('Do MMMM'),
            price: 3.00,
            trackable: false,
            shippingCountry: 'uk'
        },
        {
            id: 5,
            deliveryDate: moment().add(2, 'days').format('Do MMMM'),
            price: 13.00,
            trackable: true,
            shippingCountry: 'us'
        },
        {
            id: 6,
            deliveryDate: moment().add(4, 'days').format('Do MMMM'),
            price: 10.00,
            trackable: true,
            shippingCountry: 'us'
        },
        {
            id: 7,
            deliveryDate: moment().add(6, 'days').format('Do MMMM'),
            price: 3.00,
            trackable: true,
            shippingCountry: 'us'
        },
        {
            id: 8,
            deliveryDate: moment().add(10, 'days').format('Do MMMM'),
            price: 0.00,
            trackable: false,
            shippingCountry: 'us'
        },
    ]
});
