import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createUser(form) {
            console.log("hello");
            debugger;
            this.sendAction('createUser', form)
        }
    }
});
