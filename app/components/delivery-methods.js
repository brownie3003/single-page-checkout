import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    availableDeliveryMethods: Ember.computed('deliveryMethods', 'shippingCountry', function() {
        var shippingCountry = this.get('shippingCountry');
        var store = this.get('store');
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
