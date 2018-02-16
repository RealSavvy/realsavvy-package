export default (superclass) => class extends superclass {
  static get rootApiPath () { return '/api/v3/' }

  static get resourceTypeApiPath () { return this.rootApiPath + this.resourceType + '/' }

  head (actionPath) {
    return this.connection.head(this.constructor.resourceTypeApiPath + actionPath)
  }
  get (actionPath) {
    return this.connection.get(this.constructor.resourceTypeApiPath + actionPath)
  }
  post (actionPath) {
    return this.connection.post(this.constructor.resourceTypeApiPath + actionPath)
  }
  delete (actionPath) {
    return this.connection.delete(this.constructor.resourceTypeApiPath + actionPath)
  }
  put (actionPath) {
    return this.connection.put(this.constructor.resourceTypeApiPath + actionPath)
  }
}
