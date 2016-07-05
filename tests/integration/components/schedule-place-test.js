import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('schedule-place', 'Integration | Component | schedule place', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.set('place', {name: 'Cool Place'});
  this.render(hbs`{{schedule-place place=place}}`);

  assert.equal(this.$().text().trim(), 'Cool Place');
});
