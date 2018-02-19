export default (superclass) => class extends superclass {
  create (attributes = {}) {
    return this.post(``, {data: {data: {attributes: attributes}}})
  }
}
