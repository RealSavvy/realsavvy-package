export default function createTests(getClient, adapterPath, attributes, callback = null){
  it('#create', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].create(attributes).then(res => {
      assert.exists(res.body)
      callback();
    });
  });
}
