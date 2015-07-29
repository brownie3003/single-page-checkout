import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
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

            return deliveryMethods.filterBy('shippingCountry', shippingCountry);
        }
    ),

    actions : {
        setDeliveryMethod: function(deliveryMethod) {
            this.sendAction('setDeliveryMethod', deliveryMethod)
            console.log("yell");
        }
    }
});
