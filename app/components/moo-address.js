import Ember from 'ember';

export default Ember.Component.extend({
    addressSummary: Ember.computed(
        'address.firstName',
        'address.lastName',
        'address.firstLine',
        'address.postcode',
        function() {
            return this.get('address.firstName') + ' ' 
                + this.get('address.lastName') + ', '
                + this.get('address.firstLine') + '... '
                + this.get('address.postcode');
        }
    ),
});
