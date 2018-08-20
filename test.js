const Brand = require('./');
const assert = require('assert');

{
  let brand = new Brand('X');

  let yes = {};
  let no = {};

  brand.add(yes);
  brand.check(yes);

  try {
    brand.check(no);
  } catch (err) {
    assert.equal(err.name, 'TypeError');
    assert.ok(err.message.includes('X'));
  }
}

{
  let brand = new Brand();
  let no = {};

  try {
    brand.check(no);
  } catch (err) {
    assert.equal(err.name, 'TypeError');
  }
}

{
  assert.equal(Brand[Symbol.species], WeakSet);
}
