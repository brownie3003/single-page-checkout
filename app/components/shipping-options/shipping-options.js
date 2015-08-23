import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    shippingService: Ember.inject.service(),
    // TODO for future use with collection options.
    shippingType: "delivery",
    shippingOptions: computed('shippingCountry', 'shippingType', function() {
        let shippingCountry = this.get('shippingCountry');
        let shippingType = this.get('shippingType');
        let shippingService = this.get('shippingService');

        return shippingService.getShippingOptions(shippingCountry);
    }),
    actions: {
        setShippingOption(shippingOption) {
            this.sendAction('setShippingOption', shippingOption);
        }
    }
});
