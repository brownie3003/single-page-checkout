import Ember from 'ember';

// TODO payment, shipping routes all return the model for order, could set up class hierachy.
// I've seen a post on how to do it somewhwere...
export default Ember.Route.extend({
    model() {
        let order = this.modelFor('order');
        
        return order.get('user').then(
            (user) => {
                if (user) {
                    return this.getPaymentBook(user);
                } else {
                    // Just set a dummy user for testing as we'll reload this route so often
                    // and I don't want to have to create a new user each time.
                    return this.store.find('user', 2).then(
                        (user) => {
                            order.set('user', user);
                            return this.getPaymentBook(user);
                        }
                    )
                }
            }
        )
    },
    afterModel(model, transition) {
        let paymentBook = model;
        let order = this.modelFor('order');
        
        let defaultPaymentMethod = paymentBook.get('firstObject');
        // Use transition object if we've not loaded any other routes yet (hitting url directly gave me the error)
        transition.send('setPaymentMethod', defaultPaymentMethod);
    },
    setupController(controller, model) {
        let order = this.modelFor('order');
        
        controller.set("paymentBook", model);
        controller.set("order", order);
        controller.set("user", order.get('user'));
    },
    getPaymentBook(user) {
        return user.get('paymentBook');
    },
});
