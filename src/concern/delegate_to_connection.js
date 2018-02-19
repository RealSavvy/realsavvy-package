export default (superclass) => class extends superclass {
  static get rootApiPath () { return '/api/v3/' }

  static get resourceTypeApiPath () { return this.rootApiPath + this.resourceType }

  head (actionPath, options = {}) {
    return this.connection.head(this.constructor.resourceTypeApiPath + actionPath, options)
  }
  get (actionPath, options = {}) {
    return this.connection.get(this.constructor.resourceTypeApiPath + actionPath, options)
  }
  post (actionPath, options = {}) {
    return this.connection.post(this.constructor.resourceTypeApiPath + actionPath, options)
  }
  delete (actionPath, options = {}) {
    return this.connection.delete(this.constructor.resourceTypeApiPath + actionPath, options)
  }
  put (actionPath, options = {}) {
    return this.connection.put(this.constructor.resourceTypeApiPath + actionPath, options)
  }
}
