export default function uninviteTests(getClient, adapterPath, attributes, callback = null){
  it('#uninvite', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].uninvite({id: 5, email: 'foo@realsavvy.com'}).end((err, res) => {
      assert.exists(res.body)
      callback();
    });
  });
}
