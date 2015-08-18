import Ember from 'ember';

export default Ember.Component.extend({
    enteringPromo: false,
    code: null,
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
