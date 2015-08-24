import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    shippingService: Ember.inject.service(),
    collapsed: true,
    showShippingCountry: false,
    showShippingOptions: false,

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
        },
        setShippingCountry(shippingCountry) {
            this.sendAction('setShippingCountry', shippingCountry);
        },
        toggleCollapsed() {
            this.toggleProperty('collapsed');
        },
        showShippingOptions() {
            this.set('showShippingOptions', true)
        }
    }
});
