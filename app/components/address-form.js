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
            this.set('addresses', addresses);
        },
        selectAddressServiceAddress: function(selectedAddress) {
            let address = this.get('address');
            $.each(selectedAddress, function(key, value) {
                address.set(key, value);
            });
            this.send('checkAddressIsValid');
        }
    }
});
