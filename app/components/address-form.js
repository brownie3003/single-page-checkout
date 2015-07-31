import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row'],
    addressService: Ember.inject.service(),
    addresses: null,
    showAddressService: true,
    showFullForm: false,
    actions: {
        checkAddressIsValid: function() {
            let address = this.get('address');
            if (address.get('isValid')) {
                this.sendAction('setAddress', address);
            }
        },
        addAddress: function() {
            let address = this.get('address');
            this.sendAction('saveAddress', address);
        },
        findAddress: function(postcode) {
            let addressService = this.get('addressService');
            
            let addresses = addressService.findByPostCode(postcode);
            // Lame, tired, make address object Ember objects here.
            // We need to do this for display in moo-address component, but probably a better way.
            let emberAddresses = []
            $.each(addresses, function(index, address) {
                emberAddresses.push(Ember.Object.create(address));
            })
            this.set('addresses', emberAddresses);
        },
        selectAddressServiceAddress: function(selectedAddress) {
            let address = this.get('address');
            $.each(selectedAddress, function(key, value) {
                address.set(key, value);
            });
            this.set('showAddressService', false);
            this.set('showFullForm', true);
            this.send('checkAddressIsValid');
        },
        showAddressService: function() {
            this.set('showAddressService', true);
            this.set('showFullForm', false);
        }
    }
});
