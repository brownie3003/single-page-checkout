import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNames: ['order-total'],
    showShippingOptions: false,
    actions: {
        toggleShowShippingOptions() {
            this.toggleProperty('showShippingOptions');
        },
        setShippingOption(shippingOption) {
            this.sendAction('setShippingOption', shippingOption);
        }
    }
});
