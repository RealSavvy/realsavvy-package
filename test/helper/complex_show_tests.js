export default function complexShowTests(getClient, adapterPath, callback = null){
  it('#show with 1 part', (done) => {
    let onePartCallback = callback || function(done){ done(); };
    onePartCallback = onePartCallback.bind(this, done);
    getClient()[adapterPath].show({complex_id: 'foo~bar'}).end((err, res) => {
      assert.exists(res.body);
      onePartCallback();
    });
  });

  it('#show with 2 part', (done) => {
    let twoPartCallback = callback || function(done){ done(); };
    twoPartCallback = twoPartCallback.bind(this, done);
    getClient()[adapterPath].show({key: 'foo', feed: 'bar'}).end((err, res) => {
      assert.exists(res.body);
      twoPartCallback();
    });
  });
}
