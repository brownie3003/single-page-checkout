import Ember from 'ember';

export default Ember.Component.extend({
    isSelected: Ember.computed('address', 'selectedAddress', function() {
        return this.get('address') == this.get('selectedAddress');
    }),
    click: function() {
        this.set('selectedAddress', this.get('address'));
    }
});
