# brandage

A subclass of WeakSet useful for object identity branding.

## Install

```sh
npm install brandage
```

## Usage

```js
import Brand from 'brandage';

const brand = new Brand('Sheep');

class Sheep {

  constructor() {
    this._wool = new Wool();
    brand.add(this);
  }

  sheer() {
    // Don't sheer the goat
    brand.check(this);
    return this._wool.cut();
  }

  static isSheep(obj) {
    return brand.has(obj);
  }

}
```

## API

`Brand` inherits all of the methods of the [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) class.

### new Brand ( _description_? )

Creates a new Brand object. The optional _description_ is used in the error message for failed brand checks.

### brand.check ( )

Throws a `TypeError` if the object has not been marked with this brand.
