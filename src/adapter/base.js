import DelegateToConnection from '../concern/delegate_to_connection'

class AbstractBase {
  constructor ({connection = null}) {
    this.connection = connection
  }
}

export default class Base extends DelegateToConnection(AbstractBase) {}
