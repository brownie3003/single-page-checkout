import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['form-group'],
    classNameBindings: ['hasError'],
    hasError: false,
    actions: {
        checkForErrors: function() {
            var errors = this.get('errors');
            if (errors.length) {
                this.set('hasError', true);
            } else {
                this.set('hasError', false);
            }
            this.sendAction();
        }
    }
});
