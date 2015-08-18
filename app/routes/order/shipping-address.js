import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        let self = this;
        let order = this.modelFor('order');
        controller.set("order", order);
        
        // Get the first saved object in addres book and set it as the
        // shipping address for the order. Maybe this should live in a
        // model hook but it was a bastard to figure out becasue I forgot
        // it's all promises. Should try moving it later #TODO
        if (Ember.isEmpty(order.get('shippingAddress').get('content'))) {
            order.get('user').then(function(user) {
                user.get('addressBook').then(function(addressBook) {
                    let defaultAddress = addressBook.get('firstObject');
                    self.send('setShippingAddress', defaultAddress);
                })
            });
        }
    },
})
