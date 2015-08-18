import DS from 'ember-data';
import EmberValidations from 'ember-validations';
const { computed } = Ember;

export default DS.Model.extend(EmberValidations, {
    shippingAddress: DS.belongsTo('address', { async: true }),
    billingAddress: DS.belongsTo('address', { async: true }),
    items: DS.hasMany('item', { async: true }),
    user: DS.belongsTo('user', { async: true }),
    isPaid: DS.attr('boolean', { defaultValue: false }),
    deliveryMethod: DS.belongsTo('delivery-method'),
    // Don't know if this is a good idea, but struggle to pass in shipping Address's
    // country to components and if we don't have a saved shipping Address.
    shippingCountry: DS.attr('string', { defaultValue: "UK" }),
    discount: DS.attr('number', { defaultValue: null }),
    mooScenarioDescription: DS.attr('string'),
    
    // The following are computed properties on the model
    
    finalItemsPrice: computed('items.[]', function() {
        let finalItemsPrice = 0;
        let items = this.get('items');
        items.forEach(function(item) {
            // For prototype we'll never have null for final price (and in reality, we should always have a price
            // for the customer, even if it's 0)
            finalItemsPrice += item.get('finalPrice')
        });
        return finalItemsPrice.toFixed(2);
    }),
    originalItemsPrice: computed('finalItemsPrice', function() {
        let items = this.get('items');
        let originalItemsPrice = 0;
        items.forEach(function(item) {
            if (item.get('originalPrice') !== undefined) {
                originalItemsPrice += item.get('originalPrice')
            } else if (item.get('finalPrice') !== undefined ) {
                originalItemsPrice += item.get('finalPrice')
            }
        });
        return (originalItemsPrice !== this.get('finalItemsPrice') ? originalItemsPrice.toFixed(2) : null);
    }),
    shippingPrice: computed('deliveryMethod.price', function() {
        // Delivery Method not set for some reason (promises?) so need to check
        // before setting this variable, annoying.
        if (this.get('deliveryMethod') === null) {
            return null;
        }
        if (this.get('deliveryMethod').get('price') === null) {
            return null;
        }
        return this.get('deliveryMethod').get('price');
    }),
    tax: computed('finalItemsPrice', 'shippingPrice', function() {
        let finalItemsPrice = parseFloat(this.get('finalItemsPrice'));
        let shippingPrice = this.get('shippingPrice');
        let untaxedTotal = shippingPrice + finalItemsPrice;
        
        // Set 20% for now. Not internationalised.
        return (untaxedTotal * 0.2).toFixed(2);
    }),
    totalPrice: computed('finalItemsPrice', 'shippingPrice', 'tax', 'discount', function() {
        let finalItemsPrice = parseFloat(this.get('finalItemsPrice'));
        let shippingPrice = this.get('shippingPrice');
        let tax = parseFloat(this.get('tax'));
        let discount = parseFloat( + this.get('discount'));
        return (finalItemsPrice + shippingPrice + tax + discount).toFixed(2);
    }),
    
    validations: {
        shippingAddress: {
            presence: true
        },
        billingAddress: {
            presence: true
        },
        deliveryMethod: {
            presence: true
        }
    }
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            items: [1, 2],
            user: 1,
            shippingCountry: "UK",
            mooScenarioDescription: "Returning Users"
        }
    ]
});
