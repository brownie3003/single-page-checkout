import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    getDeliveryMethods: function(country) {
        var store = this.get('store');
        store.find('deliveryMethod').then(function() {
            return store.filter('deliveryMethod', function(deliveryMethod) {
                return deliveryMethod.get('shippingCountry') === country;
            });
        });
    }
});
