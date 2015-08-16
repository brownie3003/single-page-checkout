import DS from 'ember-data';

export default DS.Model.extend({
  deliveryDate: DS.attr('date'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  trackable: DS.attr('boolean'),
  shippingCountry: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            deliveryDate: moment().add(1, 'days').format('Do MMMM'),
            description: "1 Day",
            price: 22.00,
            trackable: true,
            shippingCountry: 'UK'
        },
        {
            id: 2,
            deliveryDate: moment().add(2, 'days').format('Do MMMM'),
            description: "2 Days",
            price: 16.00,
            trackable: true,
            shippingCountry: 'UK'
        },
        {
            id: 3,
            deliveryDate: moment().add(4, 'days').format('Do MMMM'),
            description: "4 Days",
            price: 8.00,
            trackable: true,
            shippingCountry: 'UK'
        },
        {
            id: 4,
            deliveryDate: moment().add(7, 'days').format('Do MMMM'),
            description: "7 Days",
            price: 3.00,
            trackable: false,
            shippingCountry: 'UK'
        },
        {
            id: 5,
            deliveryDate: moment().add(1, 'days').format('Do MMMM'),
            description: "1 Day",
            price: 13.00,
            trackable: true,
            shippingCountry: 'USA'
        },
        {
            id: 6,
            deliveryDate: moment().add(3, 'days').format('Do MMMM'),
            description: "3 Days",
            price: 10.00,
            trackable: true,
            shippingCountry: 'USA'
        },
        {
            id: 7,
            deliveryDate: moment().add(6, 'days').format('Do MMMM'),
            description: "6 Days",
            price: 3.00,
            trackable: true,
            shippingCountry: 'USA'
        },
        {
            id: 8,
            deliveryDate: moment().add(10, 'days').format('Do MMMM'),
            description: "10 Days",
            price: 0.00,
            trackable: false,
            shippingCountry: 'USA'
        },
    ]
});
