export default function updateTests(getClient, adapterPath, attributes, callback = null){
  it('#update', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].update({id: 5, attributes: attributes}).then(res => {
      assert.exists(res.body)
      callback();
    });
  });
}
