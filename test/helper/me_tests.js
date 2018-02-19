export default function meTests(getClient, adapterPath, callback = null){
  it('#me', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].me().then(res => {
      assert.exists(res.body)
      callback();
    });
  });
}
