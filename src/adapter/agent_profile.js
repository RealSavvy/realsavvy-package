import Base from './base'
import ComplexShowForAdapter from '../concern/complex_show_for_adapter'
import IndexForAdapter from '../concern/index_for_adapter'

export default class AgentProfile extends IndexForAdapter(ComplexShowForAdapter(Base)) {
  static get resourceType () { return 'agent_profiles' }
}
