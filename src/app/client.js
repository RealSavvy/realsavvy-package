import URL from 'url-parse'

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

let base64 = {}

if (typeof btoa === 'undefined') {
  base64.btoa = function (str) {
    return Buffer.from(str).toString('base64')
  }
} else {
  base64.btoa = function (str) {
    return window.btoa(str)
  }
}

if (typeof atob === 'undefined') {
  base64.atob = function (b64Encoded) {
    return Buffer.from(b64Encoded, 'base64').toString('ascii')
  }
} else {
  base64.atob = function (b64b64Encoded) {
    return window.atob(b64b64Encoded)
  }
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

  get shareToken () {
    let tokenEncodedPayload = this.token.split('.')[1]
    let tokenPayload = JSON.parse(base64.atob(tokenEncodedPayload))
    let shareTokenPayload = {aud: tokenPayload.aud, sub: tokenPayload.sub}
    let shareToken = base64.btoa(JSON.stringify(shareTokenPayload))
    return shareToken
  }

  addShareTokenToUrl (urlStr) {
    let url = new URL(urlStr, null, true)
    url.query['rs_share_token'] = this.shareToken
    return url.toString()
  }
}
