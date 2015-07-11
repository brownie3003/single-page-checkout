import Ember from 'ember';

export default Ember.Component.extend({
    addNewAddress: false,
    actions: {
        toggleAddNewAddress: function(){
            this.toggleProperty('addNewAddress');
        }
    }
});
