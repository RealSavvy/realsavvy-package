export default (superclass) => class extends superclass {
  index (options = {}) {
    return this.get(``, {params: options})
  }
}
