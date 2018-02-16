export default (superclass) => class extends superclass {
  show ({id = null}) {
    return this.get(`/${id}`)
  }
}
