import { moduleForModel, test } from 'ember-qunit';

moduleForModel('delivery-method', 'Unit | Model | delivery method', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
