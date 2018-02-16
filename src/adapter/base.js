import DelegateToConnection from '../concern/delegate_to_connection'

export default DelegateToConnection(
  class Base {
    constructor ({connection = null}) {
      this.connection = connection
    }
  }
)
