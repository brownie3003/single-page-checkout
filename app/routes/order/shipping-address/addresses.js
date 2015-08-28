import Ember from 'ember';
const { computed } = Ember;

export default Ember.Route.extend({
    userService: Ember.inject.service(),
    model() {
        let order = this.modelFor('order');
        return order.get('user').then(
            (user) => {
                if (user) {
                    return this.getAddressBook(user);
                } else {
                    // Just set a dummy user for testing as we'll reload this route so often
                    // and I don't want to have to create a new user each time.
                    return this.store.find('user', 2).then(
                        (user) => {
                            order.set('user', user);
                            return this.getAddressBook(user);
                        }
                    )
                }
            }
        )
    },
    afterModel(model, transition) {
        let addressBook = model;
        let order = this.modelFor('order');
        
        if (!addressBook.length) {
            this.transitionTo('order.shipping-address.addresses.new');
        }
        
        // I would say lets not set a default address until the users told us what to set explicity.
        // order.get('shippingAddress').then(
        //     (shippingAddress) => {
        //         if (!shippingAddress) {
        //             let defaultAddress = addressBook.get('firstObject');
        //
        //             if (defaultAddress) {
        //                 // Use transition object if we've not loaded any other routes yet (hitting url directly gave me the error)
        //                 transition.send('setShippingAddress', defaultAddress);
        //             }
        //         }
        //     }
        // )
        
    },
    setupController(controller, model) {
        let order = this.modelFor('order');
        let shippingAddress = this.modelFor('order.shipping-address');
        
        controller.set("order", order);
        controller.set("savedAddresses", model);
        controller.set("shippingAddress", shippingAddress);
    },
    getAddressBook(user) {
        return user.get('addressBook');
    },
    actions: {
        enterNewAddress() {
            this.transitionTo('order.shipping-address.addresses.new');
        },
        selectSavedAddress() {
            this.transitionTo('order.shipping-address.addresses');
        }
    }
})
