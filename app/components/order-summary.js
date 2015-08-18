import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    collapsed: true,
    store: Ember.inject.service(),
    itemsInflection: computed('order.items', function() {
        let itemLength = this.get('order.items').length;
        return itemLength === 1 ? "item" : "items";
    }),
    actions: {
        toggleCollapsed() {
            this.toggleProperty('collapsed');
        }
    }
});
