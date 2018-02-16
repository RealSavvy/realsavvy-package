export default (superclass) => class extends superclass {
  show ({complexId = null, feed = null, key = null}) {
    if (!feed && !key && complexId) {
      let complexIdParts = complexId.split('~')
      feed = complexIdParts[0]
      key = complexIdParts[1]
    }
    return this.get(`/${feed}/${key}`)
  }
}
