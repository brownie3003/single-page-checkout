import Ember from 'ember';
const { computed } = Ember;

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('order');
    }
})
