import Base from './base'
import CrudForAdapter from '../concern/crud_for_adapter'
import InvitesActionsForAdapter from '../concern/invite_actions_for_adapter'

export default class SavedSearch extends InvitesActionsForAdapter(CrudForAdapter(Base)) {
  static get resourceType () { return 'saved_searches' }

  search ({id = null, filter = null, marketId = null, page = null}) {
    filter = filter || {}
    page = page || {}
    return this.post(`/${id}/properties/search`).send({filter: filter, market_id: marketId, page: page})
  }

  cluster ({id = null, filter = null, marketId = null, page = null}) {
    filter = filter || {}
    page = page || {}
    return this.post(`/${id}/properties/map/clusters`).send({filter: filter, market_id: marketId, page: page})
  }
}
