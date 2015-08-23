import Ember from 'ember';
import DS from 'ember-data';
const { computed } = Ember;
const { PromiseArray } = DS;

export default Ember.Service.extend({
    store: Ember.inject.service(),
    
    all: computed(function() {
        var store = this.get('store');
        return store.find('delivery-method');
    }),
    
    /**
     * This returns a Promise which we convert to a promise array http://emberjs.com/api/data/classes/DS.PromiseArray.html.
     * Conversion allows us to treat it as an Array for use on the template and manipulation.
     * @param  {[string]} country The shipping country
     * @return {[DS.PromiseArray]} A Promise array that can be treated like an array.
     */
    getShippingOptions(shippingCountry) {
        let store = this.get('store');
        let promise = store.find('shipping-option').then(shippingOptions => {
            return shippingOptions.filterBy('shippingCountry', shippingCountry)
        });
        
        return PromiseArray.create({ promise });
    },
    
    getDefaultShippingOption(shippingCountry) {
        return this.getShippingOptions(shippingCountry)
            .then(shippingOptions => {
                return shippingOptions.get('lastObject');
            });
    }
});
