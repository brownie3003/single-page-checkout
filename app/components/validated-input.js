import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    classNameBindings: ['hasError', 'hasSuccess'],
    hasSuccess: false,
    hasError: false,
    // Computed function that observes if the parent form wants all errors to be shown.
    showErrors: computed('showAllErrors', 'errors', function() {
        let showAllErrors = this.get('showAllErrors');
        let errors = this.get('errors');
        
        if (errors.length && showAllErrors) {
            this.set('hasError', true);
        }
    }),
    actions: {
        checkForErrors: function() {
            let errors = this.get('errors');
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
            let errors = this.get('errors');
            if (errors.length === 0) {
                this.set('hasSuccess', true);
                this.set('hasError', false);
            }
        }
    }
});
