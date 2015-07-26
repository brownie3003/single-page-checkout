import Ember from 'ember';

export default Ember.Component.extend({
    totalItemsPrice: Ember.computed('order.items.[]', function() {
        var items = this.get('order.items');
        var totalItemsPrice = 0;
        items.forEach(function(item) {
            totalItemsPrice += item.get('price');
        });
        return totalItemsPrice.toFixed(2);
    }),
    totalPrice: Ember.computed('totalItemsPrice', 'order.deliveryMethod.price', function() {
        var totalItemsPrice = parseFloat(this.get('totalItemsPrice'));
        var deliveryPrice = this.get('order.deliveryMethod.price');
        var totalPrice = deliveryPrice + totalItemsPrice;
        return totalPrice.toFixed(2);
    })
});
