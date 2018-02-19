import Base from './base'
import ComplexShowForAdapter from '../concern/complex_show_for_adapter'

export default class Property extends ComplexShowForAdapter(Base) {
  static get resourceType () { return 'properties' }

  search ({filter = null, marketId = null, page = null}) {
    filter = filter || {}
    page = page || {}
    return this.post(`/search`, {data: {filter: filter, market_id: marketId, page: page}})
  }

  cluster ({filter = null, marketId = null, page = null}) {
    filter = filter || {}
    page = page || {}
    return this.post(`/map/clusters`, {data: {filter: filter, market_id: marketId, page: page}})
  }
}
