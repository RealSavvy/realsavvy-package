export default (superclass) => class extends superclass {
  invite ({id = null, email = null}) {
    return this.put(`/${id}/invite`).send({email: email})
  }

  acceptInvite ({id = null, given = null}) {
    return this.put(`/${id}/accept_invite`).send({given: given})
  }

  uninvite ({id = null, email = null}) {
    return this.delete(`/${id}/uninvite`).send({email: email})
  }
}
