import Ember from 'ember';

export default Ember.Service.extend({
    findByPostCode: function(postcode) {
        // We could have an actual service returning an array of addresses here
        return [
            {
                firstLine: "Cribbage Causeway",
                city: "Dublin",
                postcode: postcode,
                country: "UK"
            }, {
                firstLine: "New Cribbage Causeway",
                secondLine: "example",
                city: "Boston",
                postcode: postcode,
                country: "USA"
            }
        ]
    }
});
