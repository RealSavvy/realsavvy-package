export default function inviteTests(getClient, adapterPath, attributes, callback = null){
  it('#invite', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].invite({id: 5, email: 'foo@realsavvy.com'}).end((err, res) => {
      assert.exists(res.body)
      callback();
    });
  });
}
