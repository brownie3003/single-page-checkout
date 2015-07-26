import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    showAddressEntryForm: false,
    newAddress: null,
    actions: {
        // User selects an address from their saved addresses
        selectSavedAddress: function(address){
            this.send('hideAddressEntryForm');
            this.send('setAddress', address);
        },
        // User attempts to enter new address, clear the current address and create a new record instance.
        enterNewAddress: function() {
            var store = this.get('store');
            var newAddress = store.createRecord('address');
            this.set('showAddressEntryForm', true);
            this.set('newAddress', newAddress);
            this.sendAction('enterNewAddress');
        },
        setAddress: function(address) {
            this.sendAction('setAddress', address);
        },
        hideAddressEntryForm: function() {
            this.set('showAddressEntryForm', false);
        }
    }
});
