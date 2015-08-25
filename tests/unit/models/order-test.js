import { moduleForModel, test } from 'ember-qunit';

moduleForModel('order', 'Unit | Model | order', {
  // Specify the other units that are required for this test.
  needs: ['model:addresses', 'model:billing-address', 'model:delivery-method']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
