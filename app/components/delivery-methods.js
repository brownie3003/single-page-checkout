import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNames: ['delivery-methods'],
    store: Ember.inject.service(),
    showAllDeliveryOptions: false,
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
    popularDeliveryMethods: computed('availableDeliveryMethods', function() {
        let availableDeliveryMethods = this.get('availableDeliveryMethods');
        // Some function to select 3 most popular methods.
        return [ availableDeliveryMethods[0], availableDeliveryMethods[2], availableDeliveryMethods[3] ];
    }),
    actions : {
        setDeliveryMethod(deliveryMethod) {
            this.sendAction('setDeliveryMethod', deliveryMethod);
        },
        setShippingCountry(shippingCountry) {
            this.sendAction('setShippingCountry', shippingCountry);
        },
        toggleShowAllDeliveryOptions() {
            this.toggleProperty('showAllDeliveryOptions');
        }
    }
});
