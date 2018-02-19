export default function showTests(getClient, adapterPath, callback = null){
  it('#show', (done) => {
    getClient()[adapterPath].show({id: 5}).then(res => {
      assert.exists(res.body)
      done();
    })
  });
}
