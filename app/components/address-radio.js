import Ember from 'ember';
/**
 * A radio button for selecting an address in an address book and applying the selection to some model (e.g. order).
 * TODO this is probably too specific for a component, I think it relies on an external model which is bad. Also is it two way data binding?
 * @param Address address - instance of address model to be shown with this radio-button
 * @param Address selectedAddress - instance of address that is set on model a Model
 * @param String radioName - A name for the property the radio-buttons set, e.g. Shipping Address or Billing Address
 * @property boolean isSelected - Compares whether address and selectedAddress are the same in order to check the radio button.
 * @action setAddress - changes selectedAddress
 */

export default Ember.Component.extend({
    isSelected: Ember.computed('address', 'selectedAddress', function() {
        return this.get('address') === this.get('selectedAddress');
    }),
    click: function() {
        this.set('selectedAddress', this.get('address'));
    }
});
