import Ember from 'ember';

export default Ember.Component.extend({
    addressSummary: Ember.computed(
        'address.firstName',
        'address.lastName',
        'address.companyName',
        'address.firstLine',
        'address.secondLine',
        'address.thirdLine',
        'address.city',
        'address.state',
        'address.postcode',
        'address.country',
        function() {
            let address = this.get('address');
            let firstName = address.get('firstName') ? address.get('firstName') + " " : "";
            let lastName = address.get('lastName') ? address.get('lastName') + ", " : "";
            let companyName = address.get('companyName') ? address.get('companyName') + ", " : "";
            let firstLine = address.get('firstLine') ? address.get('firstLine') + ", " : "";
            let secondLine = address.get('secondLine') ? address.get('secondLine') + ", " : "";
            let thirdLine = address.get('thirdLine') ? address.get('thirdLine') + ", " : "";
            let city = address.get('city') ? address.get('city') + ", " : "";
            let state = address.get('state') ? address.get('state') + ", " : "";
            let postcode = address.get('postcode') ? address.get('postcode') + ", " : "";
            let country = address.get('country') ? address.get('country') : "";
            return firstName + lastName + companyName + firstLine + secondLine + thirdLine + city + state + postcode + country;
        }
    ),
});
