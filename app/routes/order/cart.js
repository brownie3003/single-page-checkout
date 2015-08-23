import Ember from 'ember';

export default Ember.Route.extend({
    shippingService: Ember.inject.service(),
    model() {
        return this.modelFor('order');
    },
    afterModel(model) {
        return model.get('shippingOption').then(shippingOption => {
            if (!shippingOption) {
                return this.setDefaultshippingOption(model);
            }
        });
    },
    setupController(controller, model) {
        controller.set("order", model);
    },
    setDefaultshippingOption(model) {
        let shippingService = this.get('shippingService');
        let shippingCountry = model.get('shippingCountry');
    
        return shippingService.getDefaultShippingOption(shippingCountry)
            .then(defaultshippingOption => {
                model.set('shippingOption', defaultshippingOption);
            });
    }
});
