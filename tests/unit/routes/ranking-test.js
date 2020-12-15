import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ranking', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ranking');
    assert.ok(route);
  });
});
