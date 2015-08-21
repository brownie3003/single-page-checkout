import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNames: ['delivery-methods'],
    deliveryService: Ember.inject.service('delivery-methods'),
    showAllDeliveryMethods: false,
    
    
    // didInsertElement() {
    //     let popularDeliveryMethods = this.get('popularDeliveryMethods');
    //     let selectedDeliveryMethod = this.get('selectedDeliveryMethod');
    //     // this doesn't work because the promise is still resolving. Need a loading state and to check this after
    //     // everything has resolved.
    //     if (popularDeliveryMethods.indexOf(selectedDeliveryMethod) === -1) {
    //         this.send('toggleShowAllDeliveryMethods');
    //     }
    // },
    
    deliveryMethods: computed('shippingCountry', function() {
        let shippingCountry = this.get('shippingCountry');
        let deliveryService = this.get('deliveryService');

        return deliveryService.getDeliveryMethods(shippingCountry);
    }),

    popularDeliveryMethods: computed('deliveryMethods.[]', function() {
        let deliveryMethods = this.get('deliveryMethods');
        return deliveryMethods.objectsAt([ 0, 2, 3]);
    }),
    
    actions : {
        setDeliveryMethod(deliveryMethod) {
            this.sendAction('setDeliveryMethod', deliveryMethod);
        },
        setShippingCountry(shippingCountry) {
            this.sendAction('setShippingCountry', shippingCountry);
        },
        toggleShowAllDeliveryMethods() {
            this.toggleProperty('showAllDeliveryMethods');
        }
    }
});
