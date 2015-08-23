import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNames: ['text-right'],
    enteringPromo: false,
    code: null,
    displayDiscount: computed('discount', function() {
        let discount = this.get('discount');
        return Math.abs(discount);
    }),
    actions: {
        toggleEnteringPromo() {
            this.toggleProperty('enteringPromo');
        },
        applyDiscount(code) {
            // No validation obvs.
            if (code) {
                this.sendAction('applyDiscount', code);
            }
        } 
    }
});
