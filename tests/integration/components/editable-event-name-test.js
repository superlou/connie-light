import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('editable-event-name', 'Integration | Component | editable event name', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('name', 'Cool Event');
  this.render(hbs`{{editable-event-name value=name}}`);

  assert.equal(this.$('input').val(), 'Cool Event');
});
