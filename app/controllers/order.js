import Ember from 'ember';
import EmberValidations from 'ember-validations';


export default Ember.Controller.extend(EmberValidations, {
    totalItemsPrice: Ember.computed('order.items.[]', function() {
        var items = this.get('order.items');
        var totalPrice = 0;
        items.forEach(function(item) {
            totalPrice += item.get('price');
        });
        return totalPrice.toFixed(2);
    })
});
