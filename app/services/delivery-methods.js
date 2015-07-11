import Ember from 'ember';

var uk = [
    {
        id: 1,
        deliveryDate: moment().add(1, 'days').format('Do MMMM'),
        price: 22.00,
        trackable: true
    },
    {
        id: 2,
        deliveryDate: moment().add(2, 'days').format('Do MMMM'),
        price: 16.00,
        trackable: true
    },
    {
        id: 3,
        deliveryDate: moment().add(4, 'days').format('Do MMMM'),
        price: 8.00,
        trackable: true
    },
    {
        id: 4,
        deliveryDate: moment().add(7, 'days').format('Do MMMM'),
        price: 3.00,
        trackable: false
    }
],
us = [
     {
         id: 5,
         deliveryDate: moment().add(2, 'days').format('Do MMMM'),
         price: 13.00,
         trackable: true
     },
     {
         id: 6,
         deliveryDate: moment().add(4, 'days').format('Do MMMM'),
         price: 10.00,
         trackable: true
     },
     {
         id: 7,
         deliveryDate: moment().add(6, 'days').format('Do MMMM'),
         price: 3.00,
         trackable: true
     },
     {
         id: 8,
         deliveryDate: moment().add(10, 'days').format('Do MMMM'),
         price: 0.00,
         trackable: false
     },
];

export default Ember.Service.extend({
    getDeliveryMethods: function(country) {
        if (country === "uk") {
            return uk;
        }
        if (country === "us") {
            return us;
        }
        
    }
});
