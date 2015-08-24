import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: ['hasError', 'hasSuccess'],
    hasError: false,
    hasSuccess: false,
    actions: {
        checkForErrors: function() {
            var errors = this.get('errors');
            if (errors.length) {
                this.set('hasError', true);
                this.set('hasSuccess', false);
            } else {
                this.set('hasSuccess', true);
                this.set('hasError', false);
            }
            this.sendAction();
        },
        checkForSuccess: function() {
            var errors = this.get('errors');
            if (errors.length === 0) {
                this.set('hasSuccess', true);
                this.set('hasError', false);
            }
        }
    }
});
