export default function acceptInviteTests(getClient, adapterPath, attributes, callback = null){
  it('#acceptInvite', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].acceptInvite({id: 5, given: 'asdf813613'}).then(res => {
      assert.exists(res.body)
      callback();
    });
  });
}
