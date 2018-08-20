class Brand extends WeakSet {

  constructor(desc) {
    super();
    this._desc = desc;
  }

  check(obj) {
    if (!this.has(obj)) {
      throw new TypeError(this._desc ?
        `Object is not an instance of ${ this._desc }` :
        'Invalid object type'
      );
    }
  }

  static get [Symbol.species]() {
    // Any future set methods which create derived instances should use
    // the WeakSet constructor instead of the Brand constructor
    return WeakSet;
  }

}

module.exports = Brand;
