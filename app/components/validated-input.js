import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['form-group'],
    showErrors: false,
    actions: {
        showErrors: function() {
            var errors = this.get('errors');
            this.set('showErrors', true);
            this.sendAction();
        }
    }
});
