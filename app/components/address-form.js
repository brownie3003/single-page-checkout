import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row'],
    actions: {
        checkAddressIsValid: function() {
            var address = this.get('address');
            if (address.get('isValid')) {
                this.sendAction('setAddress', address);
            }
        }
    }
});
