import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNameBindings: ['hasError', 'hasSuccess'],
    hasSuccess: false,
    hasError: false,
    // Computed function that observes if the parent form wants all errors to be shown.
    showErrors: computed('showAllErrors', function() {
        let showAllErrors = this.get('showAllErrors');
        
        if (showAllErrors) {
            this.set('hasError', true);
        }
    }),
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
