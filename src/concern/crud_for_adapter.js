import IndexForAdapter from '../concern/index_for_adapter'
import CreateForAdapter from '../concern/create_for_adapter'
import ShowForAdapter from '../concern/show_for_adapter'
import UpdateForAdapter from '../concern/update_for_adapter'
import DestroyForAdapter from '../concern/destroy_for_adapter'

export default (superclass) => class extends DestroyForAdapter(UpdateForAdapter(ShowForAdapter(CreateForAdapter(IndexForAdapter(superclass))))) {
  // Empty class
}
