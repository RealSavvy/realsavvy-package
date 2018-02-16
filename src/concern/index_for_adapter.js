export default (superclass) => class extends superclass {
  index (options = {}) {
    return this.get(``).query(options)
  }
}
