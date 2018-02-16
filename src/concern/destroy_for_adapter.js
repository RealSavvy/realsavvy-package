export default (superclass) => class extends superclass {
  destroy ({id = null}) {
    return this.delete(`/${id}`)
  }
}
