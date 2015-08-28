import Ember from 'ember';

export default Ember.Component.extend({
    addressService: Ember.inject.service(),
    addresses: null,
    showAddressService: true,
    showFullForm: false,
    // Set this true in any failed action that needs to indicate to users the validation errors, e.g. submitting the form with incomplete data.
    showAllValidation: false,
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
            // TODO We need to do this for display in moo-address component, but probably a better way.
            let emberAddresses = [];
            Ember.$.each(addresses, function(index, address) {
                emberAddresses.push(Ember.Object.create(address));
            });
            this.set('addresses', emberAddresses);
        },
        selectAddressServiceAddress: function(selectedAddress) {
            let address = this.get('address');
            // TODO find a nicer way to combine this Ember Object with the Address instance.
            let keys = ['firstLine', 'secondLine', 'thirdLine', 'city', 'state', 'postcode', 'country'];
            keys.forEach(function(value) {
                address.set(value, selectedAddress.get(value));
            });
            this.set('showAddressService', false);
            this.set('showFullForm', true);
            this.send('checkAddressIsValid');
            this.set('showAllValidation', true)
        },
        showAddressService: function() {
            this.set('showAddressService', true);
            this.set('showFullForm', false);
        }
    }
});
