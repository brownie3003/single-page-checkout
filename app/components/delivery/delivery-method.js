import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNames: ['delivery-method', 'col-xs-6', 'col-md-4'],
    actions: {
        setDeliveryMethod: function(deliveryMethod) {
            this.sendAction('setDeliveryMethod', deliveryMethod);
        }
    }
});
