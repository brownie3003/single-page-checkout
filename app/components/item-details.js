import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['item-details'],
    quantities: Ember.computed(function() {
        let itemType = this.get('item').get('type');
        switch (itemType) {
            case "print":
                return [50, 100, 200, 400];
                break;
            case "accessory":
                return [1, 2, 3, 4];
                break;
            default:
                return [50, 100, 200, 400];
        }
    })
});
