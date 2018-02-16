import Base from './base'

export default class Site extends Base {
  static get resourceType () { return 'sites' }

  me () {
    return this.get('/me')
  }
}
