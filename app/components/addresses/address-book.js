import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['address-book'],
    store: Ember.inject.service(),
    showAddressEntryForm: false,
    newAddress: null,
    didInsertElement() {
        let addresses = this.get('addresses');
        if (addresses.length === 0) {
            this.send('enterNewAddress');
        }
    },
    actions: {
        // User selects an address from their saved addresses
        selectSavedAddress: function(address){
            this.send('hideAddressEntryForm');
            this.send('setAddress', address);
        },
        // User attempts to enter new address, clear the current address and create a new record instance.
        enterNewAddress: function() {
            let store = this.get('store');
            let user = this.get('user');
            let newAddress = store.createRecord('address');
            newAddress.set('firstName', user.get('firstName'));
            newAddress.set('lastName', user.get('lastName'));
            newAddress.set('companyName', user.get('companyName'));
            this.set('showAddressEntryForm', true);
            this.set('newAddress', newAddress);
            this.sendAction('enterNewAddress');
        },
        setAddress: function(address) {
            this.sendAction('setAddress', address);
        },
        hideAddressEntryForm: function() {
            this.set('showAddressEntryForm', false);
        },
        saveAddress: function(address) {
            this.send('hideAddressEntryForm');
            this.sendAction('saveAddress', address);
            this.set('newAddress', null);
        }
    }
});
