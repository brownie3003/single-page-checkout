import Ember from 'ember';

export default Ember.Component.extend({
    apiService: Ember.inject.service('delivery-methods'),
    deliveryMethods: Ember.computed('shippingCountry', function() {
        var deliveryMethods =  this.get('apiService').getDeliveryMethods(this.get('shippingCountry'));
        return deliveryMethods;
    })
});
