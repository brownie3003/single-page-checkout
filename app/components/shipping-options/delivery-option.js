import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNames: ['delivery-method', 'col-sm-4', 'col-xs-6'],
    actions: {
        setShippingOption: function(deliveryOption) {
            this.sendAction('setShippingOption', deliveryOption);
        }
    }
});
