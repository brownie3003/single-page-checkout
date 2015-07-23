import Ember from 'ember';

export default Ember.Component.extend({
    addNewAddress: false,
    // This does not work. Doesn't make the currentAddress checked reliably, think it interferes with native HTML actions.
    currentAddress: Ember.computed('addresses.@each', 'targetAddress', function() {
        var currentAddress = this.get('targetAddress');
        var addresses = this.get('addresses');
        return addresses.map(function(address) {
            if (address === currentAddress) {
                address.set('currentAddress', true);
            } else {
                address.set('currentAddress', false);
            }
        });
    }),
    actions: {
        toggleAddNewAddress: function(){
            this.toggleProperty('addNewAddress');
        },
        setAddress: function(address) {
            this.sendAction('setAddress', address);
        }
    }
});
