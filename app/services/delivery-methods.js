import Ember from 'ember';

// TODO check this is not being used at the moment.
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
