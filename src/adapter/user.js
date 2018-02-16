import Base from './base'
import CrudForAdapter from '../concern/crud_for_adapter'

export default class User extends CrudForAdapter(Base) {
  static get resourceType () { return 'users' }

  me () {
    return this.get('/me')
  }
}
