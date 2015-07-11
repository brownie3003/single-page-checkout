import Ember from 'ember';

export default Ember.Component.extend({
    addNewAddress: false,
    foo: Ember.computed('shippingAddress', function() {
        return this.get('shippingAddress');
    }),
    actions: {
        toggleAddNewAddress: function(){
            this.toggleProperty('addNewAddress');
        }
    }
});
