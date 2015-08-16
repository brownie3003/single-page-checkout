import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('guest-checkout-form', 'Integration | Component | guest checkout form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{guest-checkout-form}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#guest-checkout-form}}
      template block text
    {{/guest-checkout-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
