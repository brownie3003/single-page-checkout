import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNames: ['delivery-methods'],
    shippingService: Ember.inject.service(),
    showAllDeliveryOptions: false,
    
    popularDeliveryOptions: computed('deliveryOptions.[]', function() {
        let deliveryOptions = this.get('deliveryOptions');
        return deliveryOptions.objectsAt([ 0, 2, 3]);
    }),
    
    actions : {
        setShippingOption(deliveryOption) {
            this.sendAction('setShippingOption', deliveryOption);
        },
        setShippingCountry(shippingCountry) {
            this.sendAction('setShippingCountry', shippingCountry);
        },
        toggleShowAllDeliveryOptions() {
            this.toggleProperty('showAllDeliveryOptions');
        }
    }
});
