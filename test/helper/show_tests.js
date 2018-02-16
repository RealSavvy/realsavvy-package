export default function showTests(getClient, adapterPath, callback = null){
  it('#show', (done) => {
    getClient()[adapterPath].show({id: 5}).end((err, res) => {
      assert.exists(res.body)
      done();
    });
  });
}
