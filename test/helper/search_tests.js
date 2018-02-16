export default function updateTests(getClient, adapterPath, options = {}, callback = null){
  it('#search', (done) => {
    callback = (callback || function(done){ done(); }).bind(this, done);
    getClient()[adapterPath].search({filter: options.filter, market_id: options.market_id, page: options.page}).end((err, res) => {
      assert.exists(res.body)
      callback();
    });
  });
}
