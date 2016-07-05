import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('datetime-input', 'Integration | Component | datetime input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('date', new Date("2015-10-05T10:00:00-04:00"));
  this.render(hbs`{{datetime-input value=date}}`);

  // todo This is brittle and may fail if run in a timezone other than EST
  assert.equal(this.$('input').val(), '10:00 am, Oct 5th 2015');
});
