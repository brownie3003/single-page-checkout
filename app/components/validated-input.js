import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    showThisSuccess: false,
    showThisError: false,
    showSuccess: computed('hasSuccess', 'showAllValidation', 'showThisSuccess', function() {
        let hasSuccess = this.get('hasSuccess');
        let showAllValidation = this.get('showAllValidation');
        let showThisSuccess = this.get('showThisSuccess');
        
        return (hasSuccess && (showAllValidation || showThisSuccess));
    }),
    showErrors: computed('hasError', 'showAllValidation', 'showThisError', function() {
        let hasError = this.get('hasError');
        let showAllValidation = this.get('showAllValidation');
        let showThisError = this.get('showThisError');
        
        return (hasError && (showAllValidation || showThisError));
    }),
    hasSuccess: computed('errors', function() {
        let errors = this.get('errors');
        
        return (errors.length === 0);
    }),
    hasError: computed('hasSuccess', function() {
        return !this.get('hasSuccess');
    }),
    showAllErrors: null,
    actions: {
        checkForErrors: function() {
            if (this.get('hasError')) {
                this.set('showThisError', true);
            }
            this.sendAction();
        },
        checkForSuccess: function() {
            if (this.get('hasSuccess')) {
                this.set('showThisSuccess', true);
            }
        }
    }
});
