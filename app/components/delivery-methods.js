import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    availableDeliveryMethods: Ember.computed('deliveryMethods', 'shippingCountry', function() {
        var shippingCountry = this.get('shippingCountry');
        var store = this.get('store');

        // store.filter returns a magically auto-updating RecordArray,
        // but it does *not* fetch records from the API.
        //
        // Thus, we need to explicitly trigger the fetch here.
        store.find('delivery-method');

        return store.filter('deliveryMethod', function(deliveryMethod) {
            return deliveryMethod.get('shippingCountry') === shippingCountry;
        })
    }),
    actions : {
        setDeliveryMethod: function(deliveryMethod) {
            this.sendAction('setDeliveryMethod', deliveryMethod)
            console.log("yell");
        }
    }
});
