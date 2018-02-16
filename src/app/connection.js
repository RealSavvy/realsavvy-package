import superagent from 'superagent'
import superagentPrefix from 'superagent-prefix'
import superagentJsonapify from 'superagent-jsonapify'

superagentJsonapify(superagent)

export default class Connection {
  constructor ({client = null}) {
    this.client = client
  }
  static get agent () { return superagent }
  generalRequestSettings (request) {
    return request.use(superagentPrefix(this.client.api_url)).set('Authorization', 'Bearer ' + this.client.token)
  }
  head (path) {
    return this.generalRequestSettings(superagent.head(path))
  }
  get (path) {
    return this.generalRequestSettings(superagent.get(path))
  }
  post (path) {
    return this.generalRequestSettings(superagent.post(path))
  }
  delete (path) {
    return this.generalRequestSettings(superagent.delete(path))
  }
  put (path) {
    return this.generalRequestSettings(superagent.put(path))
  }
}
