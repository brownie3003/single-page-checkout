import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        // return this.store.find('order', 1);
        var address = this.store.createRecord('address');
        var order = this.store.createRecord('order');
        order.set('address', address);
        return order;
    }
});
