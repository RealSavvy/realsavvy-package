export default (superclass) => class extends superclass {
  invite ({id = null, email = null}) {
    return this.put(`/${id}/invite`, {data: {email: email}})
  }

  acceptInvite ({id = null, given = null}) {
    return this.put(`/${id}/accept_invite`, {data: {given: given}})
  }

  uninvite ({id = null, email = null}) {
    return this.delete(`/${id}/uninvite`, {data: {email: email}})
  }
}
