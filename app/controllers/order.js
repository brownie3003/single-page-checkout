import Ember from 'ember';
import EmberValidations from 'ember-validations';


export default Ember.Controller.extend(EmberValidations, {
    validations: {
        'model.test': {
            presence: true,
            length: { minimum: 5 }
        }
    }
});
