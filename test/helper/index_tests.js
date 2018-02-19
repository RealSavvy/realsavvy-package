export default function indexTests(getClient, adapterPath, callback = null){
  it('#index', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].index().then(res => {
      assert.exists(res.body)
      callback();
    });
  });
}
