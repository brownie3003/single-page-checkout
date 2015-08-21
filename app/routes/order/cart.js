import Ember from 'ember';

export default Ember.Route.extend({
    deliveryService: Ember.inject.service('deliveryMethods'),
    model() {
        return this.modelFor('order');
    },
    afterModel(model) {
        return model.get('deliveryMethod').then(deliveryMethod => {
            if (!deliveryMethod) {
                return this.setDefaultDeliveryMethod(model);
            }
        });
    },
    setupController(controller, model) {
        controller.set("order", model);
    },
    setDefaultDeliveryMethod(model) {
        let deliverySerice = this.get('deliveryService');
        let shippingCountry = model.get('shippingCountry');
    
        return deliverySerice.getDefaultDeliveryMethod(shippingCountry)
            .then(defaultDeliveryMethod => {
                model.set('deliveryMethod', defaultDeliveryMethod);
            });
    }
});
