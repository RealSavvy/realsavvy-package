import Base from './base'
import IndexForAdapter from '../concern/index_for_adapter'

export default class Suggestion extends IndexForAdapter(Base) {
  static get resourceType () { return 'suggestions' }

  search ({filter = null, marketId = null, page = null, query = null}) {
    filter = filter || {}
    page = page || {}
    return this.post(`/search`, {data: {filter: filter, market_id: marketId, page: page, q: query}})
  }
}
