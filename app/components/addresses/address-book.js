import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['book'],
    store: Ember.inject.service(),
    showAddressEntryForm: false,
    newAddress: null,
    showAddressService: true,
    showFullForm: false,
    didInsertElement() {
        let addresses = this.get('addresses');
        let targetAddress = this.get('targetAddress');
        
        // IF we have an address, we need to check if it's one of our saved ones.
        if (targetAddress.get('content') !== null) {
            let isFound = null;
            addresses.forEach((address) => {
                if (address.get('id') === targetAddress.get('id')) {
                    return isFound = true;
                }
            });
            if (isFound == null) {
                this.send('enterNewAddress', targetAddress);
            }
        } else {
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
        enterNewAddress: function(newAddress) {
            let store = this.get('store');
            let user = this.get('user');
            let targetAddress = this.get('targetAddress');
            
            if (newAddress === undefined) {
                newAddress = store.createRecord('address');
                newAddress.set('firstName', user.get('firstName'));
                newAddress.set('lastName', user.get('lastName'));
                newAddress.set('companyName', user.get('companyName'));
            } else {
                this.set('showAddressService', false);
                this.set('showFullForm', true);
            }
            
            // TODO fix this horibbleness. 2 hours from user testing.
            Ember.$("#newAddress").attr('checked', true);
            
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
