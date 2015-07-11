import DS from 'ember-data';

export default DS.Model.extend({
  deliveryDate: DS.attr('date'),
  price: DS.attr('number'),
  trackable: DS.attr('boolean')
});
