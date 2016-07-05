import { moduleForModel, test } from 'ember-qunit';

moduleForModel('schedule', 'Unit | Model | schedule', {
  // Specify the other units that are required for this test.
  needs: ['model:event', 'model:place', 'model:session']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
