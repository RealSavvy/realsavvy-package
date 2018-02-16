import Base from './base'
import ShowForAdapter from '../concern/show_for_adapter'
import IndexForAdapter from '../concern/index_for_adapter'

export default class Agent extends IndexForAdapter(ShowForAdapter(Base)) {
  static get resourceType () { return 'agents' }
}
