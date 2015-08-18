import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('mini-promo-code', 'Integration | Component | mini promo code', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mini-promo-code}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#mini-promo-code}}
      template block text
    {{/mini-promo-code}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
