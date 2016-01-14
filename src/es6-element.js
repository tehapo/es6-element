/* src/es6-element.js */
class Es6Element {
  beforeRegister() {
    this.is = 'es6-element';
    this.properties = {
      message: {
        type: String,
        value: 'No message defined'
      }
    };
  }
}

Polymer(Es6Element);
