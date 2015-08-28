import Ember from 'ember';

export default Ember.Component.extend({
    isEnteringNewAddress: false,
    didInsertElement() {
        let addresses = this.get('addresses');
        
        if (addresses.length) {
            Ember.$("input[name='savedAddresses']:first").attr('checked', true);
        } else {
            this.set('isEnteringNewAddress', true);
        }
    },
    actions: {
        // User selects an address from their saved addresses
        selectSavedAddress: function(address){
            this.set('isEnteringNewAddress', false);
            this.sendAction('selectSavedAddress', address);
        },
        // User attempts to enter new address, clear the current address and create a new record instance.
        enterNewAddress: function(newAddress) {
            // remove checked from radio
            Ember.$('input[name="savedAddresses"]').each(function(index, radio) {
                $(radio).attr('checked', false);
            })
            this.set('isEnteringNewAddress', true);
            this.sendAction('enterNewAddress');
        },
        saveAddress: function(address) {
            this.send('hideAddressEntryForm');
            this.sendAction('saveAddress', address);
            this.set('newAddress', null);
        },
    }
});
