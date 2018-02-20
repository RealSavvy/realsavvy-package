import Connection from './connection'

// Import Adapters
import AgentProfileAdapter from '../adapter/agent_profile'
import AgentAdapter from '../adapter/agent'
import BrokerOfficeAdapter from '../adapter/broker_office'
import CollectionAdapter from '../adapter/collection'
import MarketAdapter from '../adapter/market'
import OpenHouseAdapter from '../adapter/open_house'
import PropertyAdapter from '../adapter/property'
import SavedSearchAdapter from '../adapter/saved_search'
import SiteAdapter from '../adapter/site'
import SuggestionAdapter from '../adapter/suggestion'
import UserAdapter from '../adapter/user'

const adapaterLookup = {
  agent_profiles: AgentProfileAdapter,
  agents: AgentAdapter,
  broker_offices: BrokerOfficeAdapter,
  collections: CollectionAdapter,
  markets: MarketAdapter,
  open_houses: OpenHouseAdapter,
  properties: PropertyAdapter,
  saved_searches: SavedSearchAdapter,
  sites: SiteAdapter,
  suggestions: SuggestionAdapter,
  users: UserAdapter
}

export default class Client {
  constructor ({token = null, apiUrl = 'https://api.realsavvy.com'}) {
    this.token = token
    this.apiUrl = apiUrl
    this.adapters = {}
  }

  static get connection () { return Connection }

  fetchAdapater (name) {
    this.adapters[name] = this.adapters[name] || new adapaterLookup[name]({connection: this.connection})
    return this.adapters[name]
  }

  get connection () {
    /* eslint-disable new-cap */
    this.connectionObject = this.connectionObject || new this.constructor.connection({client: this})
    /* eslint-enable new-cap */
    return this.connectionObject
  }

  get agentProfiles () {
    return this.fetchAdapater('agent_profiles')
  }

  get agents () {
    return this.fetchAdapater('agents')
  }

  get brokerOffices () {
    return this.fetchAdapater('broker_offices')
  }

  get collections () {
    return this.fetchAdapater('collections')
  }

  get markets () {
    return this.fetchAdapater('markets')
  }

  get openHouses () {
    return this.fetchAdapater('open_houses')
  }

  get properties () {
    return this.fetchAdapater('properties')
  }

  get savedSearches () {
    return this.fetchAdapater('saved_searches')
  }

  get sites () {
    return this.fetchAdapater('sites')
  }

  get suggestions () {
    return this.fetchAdapater('suggestions')
  }

  get users () {
    return this.fetchAdapater('users')
  }
}
