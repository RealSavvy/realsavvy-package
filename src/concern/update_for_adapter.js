export default (superclass) => class extends superclass {
  update ({id = null, attributes = null}) {
    attributes = attributes || {}
    return this.put(`/${id}`, {data: {data: {attributes: attributes}}})
  }
}
