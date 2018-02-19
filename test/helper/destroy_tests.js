export default function destroyTests(getClient, adapterPath, callback = null){
  it('#destroy', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].destroy({id: 5}).then(res => {
      assert.exists(res.body)
      callback();
    });
  });
}
