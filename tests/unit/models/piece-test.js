import { moduleForModel, test } from 'ember-qunit';

moduleForModel('piece', 'Unit | Model | piece', {
  // Specify the other units that are required for this test.
  needs: ['model:artist', 'model:exhibition']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
