import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    store: Ember.inject.service(),
    finalItemsPrice: computed('order.items.isFulfilled', 'order.items.[]', function() {
        let items = this.get('order.items');
        // Check the promise has returned.
        if (items.get('isFulfilled')) {
            let finalItemsPrice = 0;
            items.forEach(function(item) {
                // For prototype we'll never have null for final price (and in reality, we should always have a price
                // for the customer, even if it's 0)
                finalItemsPrice += item.get('finalPrice')
            });
            return finalItemsPrice.toFixed(2);
        }
    }),
    originalItemsPrice: computed('order.items.[]', 'finalItemsPrice', function() {
        let items = this.get('order.items');
        let originalItemsPrice = 0;
        items.forEach(function(item) {
            if (item.get('originalPrice') !== undefined) {
                originalItemsPrice += item.get('originalPrice')
            } else if (item.get('finalPrice') !== undefined ) {
                originalItemsPrice += item.get('finalPrice')
            }
        });
        return (originalItemsPrice !== this.get('finalItemsPrice') ? originalItemsPrice.toFixed(2) : null);
    }),
    shippingPrice: computed('order.deliveryMethod.price', function() {
        // Delivery Method not set for some reason (promises?) so need to check
        // before setting this variable, annoying.
        if (this.get('order').get('deliveryMethod') === null) {
            return null;
        }
        if (this.get('order').get('deliveryMethod').get('price') === null) {
            return null;
        }
        return this.get('order').get('deliveryMethod').get('price');
    }),
    tax: computed('finalItemsPrice', 'shippingPrice', function() {
        let finalItemsPrice = parseFloat(this.get('finalItemsPrice'));
        let shippingPrice = this.get('shippingPrice');
        let untaxedTotal = shippingPrice + finalItemsPrice;
        
        // Set 20% for now. Not internationalised.
        return (untaxedTotal * 0.2).toFixed(2);
    }),
    totalPrice: computed('finalItemsPrice', 'shippingPrice', 'tax', function() {
        let finalItemsPrice = parseFloat(this.get('finalItemsPrice'));
        let shippingPrice = this.get('shippingPrice');
        let tax = parseFloat(this.get('tax'))
        return (finalItemsPrice + shippingPrice + tax).toFixed(2);
    }),
    // deliveryMethods: computed('store', function() {
    //     let store = this.get('store');
    // 
    //     return store.find('delivery-method');
    // }),
    // availableDeliveryMethods: computed(
    //     'deliveryMethods.@each.shippingCountry', 'shippingCountry',
    //     function() {
    //         let deliveryMethods = this.get('deliveryMethods');
    //         let shippingCountry = this.get('order').get('shippingAddress').get('country');
    //         let availableDeliveryMethods = deliveryMethods.filterBy('shippingCountry', shippingCountry);
    // 
    //         this.send('setDeliveryMethod', availableDeliveryMethods.get('firstObject'));
    //         return availableDeliveryMethods;
    //     }
    // ),
    // actions : {
    //     setDeliveryMethod: function(deliveryMethod) {
    //         this.sendAction('setDeliveryMethod', deliveryMethod);
    //     }
    // }
    // totalItemsPrice: Ember.computed('order.items.[]', function() {
    //     var items = this.get('order.items');
    //     var totalItemsPrice = 0;
    //     items.forEach(function(item) {
    //         totalItemsPrice += item.get('price');
    //     });
    //     return totalItemsPrice.toFixed(2);
    // }),
    // totalPrice: Ember.computed('totalItemsPrice', 'order.deliveryMethod.price', function() {
    //     var totalItemsPrice = parseFloat(this.get('totalItemsPrice'));
    //     var deliveryPrice = this.get('order.deliveryMethod.price');
    //     var totalPrice = deliveryPrice + totalItemsPrice;
    //     return totalPrice.toFixed(2);
    // })
});
