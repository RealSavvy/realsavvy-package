export default (superclass) => class extends superclass {
  create (attributes = {}) {
    return this.post(``).send({data: {attributes: attributes}})
  }
}
