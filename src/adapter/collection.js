import Base from './base'
import CrudForAdapter from '../concern/crud_for_adapter'
import InvitesActionsForAdapter from '../concern/invite_actions_for_adapter'

export default class Collection extends InvitesActionsForAdapter(CrudForAdapter(Base)) {
  static get resourceType () { return 'collections' }

  add ({id = null, propertyIds = null}) {
    propertyIds = propertyIds || []
    return this.put(`/${id}/add`, {data: {property_ids: propertyIds}})
  }

  remove ({id = null, propertyIds = null}) {
    propertyIds = propertyIds || []
    return this.delete(`/${id}/remove`, {data: {property_ids: propertyIds}})
  }

  search ({id = null, filter = null, marketId = null, page = null}) {
    filter = filter || {}
    page = page || {}
    return this.post(`/${id}/properties/search`, {data: {filter: filter, market_id: marketId, page: page}})
  }

  cluster ({id = null, filter = null, marketId = null, page = null}) {
    filter = filter || {}
    page = page || {}
    return this.post(`/${id}/properties/map/clusters`, {data: {filter: filter, market_id: marketId, page: page}})
  }
}
