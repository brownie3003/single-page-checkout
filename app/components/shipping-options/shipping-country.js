import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        setShippingCountry(shippingCountry) {
            this.sendAction('setShippingCountry', shippingCountry)
        },
        showShippingOptions() {
            this.sendAction('showShippingOptions');
        }
    }
});
