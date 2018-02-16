import Base from './base'
import CrudForAdapter from '../concern/crud_for_adapter'

export default class Market extends CrudForAdapter(Base) {
  static get resourceType () { return 'markets' }
}
