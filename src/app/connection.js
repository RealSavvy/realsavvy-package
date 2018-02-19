import 'es6-promise/auto';
import axios from 'axios'

export default class Connection {
  constructor ({client = null}) {
    this.client = client
    this.agent = this.constructor.agent.create({
      baseURL: this.client.apiUrl,
      headers: {'Authorization': 'Bearer ' + this.client.token}
    });
  }

  static get agent() { return this.agentOverwrite || axios }
  static set agent(newAgent) { return this.agentOverwrite = newAgent }

  head (path, options={}) {
    options.url = path
    options.method = 'HEAD'
    return this.agent(options)
  }
  get (path, options={}) {
    options.url = path
    options.method = 'GET'
    return this.agent(options)
  }
  post (path, options={}) {
    options.url = path
    options.method = 'POST'
    return this.agent(options)
  }
  delete (path, options={}) {
    options.url = path
    options.method = 'DELETE'
    return this.agent(options)
  }
  put (path, options={}) {
    options.url = path
    options.method = 'PUT'
    return this.agent(options)
  }
}
