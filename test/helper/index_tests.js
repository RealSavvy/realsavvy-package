export default function indexTests(getClient, adapterPath, callback = null){
  it('#index', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].index().end((err, res) => {
      assert.exists(res.body)
      callback();
    });
  });
}
