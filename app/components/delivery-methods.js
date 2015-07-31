import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNames: ['delivery-methods'],
    store: Ember.inject.service(),

    deliveryMethods: computed('store', function() {
        let store = this.get('store');

        return store.find('delivery-method');
    }),

    availableDeliveryMethods: computed(
        'deliveryMethods.@each.shippingCountry', 'shippingCountry',
        function() {
            let deliveryMethods = this.get('deliveryMethods');
            let shippingCountry = this.get('shippingCountry');
            let availableDeliveryMethods = deliveryMethods.filterBy('shippingCountry', shippingCountry);

            this.send('setDeliveryMethod', availableDeliveryMethods.get('firstObject'));
            return availableDeliveryMethods;
        }
    ),

    actions : {
        setDeliveryMethod: function(deliveryMethod) {
            this.sendAction('setDeliveryMethod', deliveryMethod);
        }
    }
});
