import complexShowTests from './helper/complex_show_tests'
import createTests from './helper/create_tests'
import destroyTests from './helper/destroy_tests'
import indexTests from './helper/index_tests'
import showTests from './helper/show_tests'
import updateTests from './helper/update_tests'

import searchTests from './helper/search_tests'
import meTests from './helper/me_tests'

import inviteTests from './helper/invite_tests'
import acceptInviteTests from './helper/accept_invite_tests'
import uninviteTests from './helper/uninvite_tests'

export default class TestRunner {
  constructor ({ClientKlass = null, fixture = null}) {
    this.ClientKlass = ClientKlass
    this.ClientKlass.connection.agent = {
      create: function(baseOptions){
        return function(callOptions){
          return new Promise((resolve, reject) => {
            resolve(
              {
                settings: baseOptions,
                request: callOptions,
                body: fixture
              }
            );
          });
        }
      }
    }
  }

  run(){
    const sampleComplexId = 'north_texas_real_estate_information_systems~72621119';
    const token = 'ARealToken.JWT.Verified';

    const filter = {price:{max: 200000}};
    const market_id = 85;
    const page = {size: 100};

    describe('RealSavvyClient', () => {
      describe('#constructor()', () => {
        it('a new object can be created', () => {
          let client = new this.ClientKlass({token:token});
          assert.exists(client);
        });
      });

      describe('#adapters', () => {
        let client;
        beforeEach(() => {
          client = new this.ClientKlass({token:token});
        });

        function getClient(){
          return client;
        }

        describe('#agent', () => {
          let adapterPath = 'agents';

          showTests.call(this, getClient, adapterPath);
          indexTests.call(this, getClient, adapterPath);
        });

        describe('#agent_profile', () => {
          let adapterPath = 'agentProfiles';

          complexShowTests.call(this, getClient, adapterPath);
          indexTests.call(this, getClient, adapterPath);
        });

        describe('#broker_office', () => {
          let adapterPath = 'brokerOffices';

          complexShowTests.call(this, getClient, adapterPath);
          indexTests.call(this, getClient, adapterPath);
        });

        describe('#collection', () => {
          let adapterPath = 'collections';
          let attributes = {name: 'My Collection'};

          createTests.call(this, getClient, adapterPath, attributes);
          showTests.call(this, getClient, adapterPath);
          indexTests.call(this, getClient, adapterPath);
          updateTests.call(this, getClient, adapterPath, attributes);
          destroyTests.call(this, getClient, adapterPath);

          inviteTests.call(this, getClient, adapterPath);
          acceptInviteTests.call(this, getClient, adapterPath);
          uninviteTests.call(this, getClient, adapterPath);

          it('#add', (done) => {
            getClient()[adapterPath].add({id: 5, property_ids: [sampleComplexId]}).then(res => {
              assert.exists(res.body)
              done();
            });
          });

          it('#remove', (done) => {
            getClient()[adapterPath].remove({id: 5, property_ids: [sampleComplexId]}).then(res => {
              assert.exists(res.body)
              done();
            });
          });

          it('#search', (done) => {
            getClient()[adapterPath].search({id: 5, filter: filter, market_id: market_id, page: page}).then(res => {
              assert.exists(res.body)
              done();
            });
          });

          it('#cluster', (done) => {
            getClient()[adapterPath].cluster({id: 5, filter: filter, market_id: market_id, page: page}).then(res => {
              assert.exists(res.body)
              done();
            });
          });
        });

        describe('#market', () => {
          let adapterPath = 'markets';
          let attributes = {name: 'Greater Austin TX'};

          createTests.call(this, getClient, adapterPath, attributes);
          showTests.call(this, getClient, adapterPath);
          indexTests.call(this, getClient, adapterPath);
          updateTests.call(this, getClient, adapterPath, attributes);
          destroyTests.call(this, getClient, adapterPath);
        });

        describe('#open_house', () => {
          let adapterPath = 'openHouses';

          complexShowTests.call(this, getClient, adapterPath);
          indexTests.call(this, getClient, adapterPath);
        });

        describe('#property', () => {
          let adapterPath = 'properties';

          complexShowTests.call(this, getClient, adapterPath);

          it('#search', (done) => {
            getClient()[adapterPath].search({filter: filter, market_id: market_id, page: page}).then(res => {
              assert.exists(res.body)
              done();
            });
          });

          it('#cluster', (done) => {
            getClient()[adapterPath].cluster({filter: filter, market_id: market_id, page: page}).then(res => {
              assert.exists(res.body)
              done();
            });
          });
        });

        describe('#saved_search', () => {
          let adapterPath = 'savedSearches';
          let attributes = {name: 'My Saved Search'};

          createTests.call(this, getClient, adapterPath, attributes);
          showTests.call(this, getClient, adapterPath);
          indexTests.call(this, getClient, adapterPath);
          updateTests.call(this, getClient, adapterPath, attributes);
          destroyTests.call(this, getClient, adapterPath);

          inviteTests.call(this, getClient, adapterPath);
          acceptInviteTests.call(this, getClient, adapterPath);
          uninviteTests.call(this, getClient, adapterPath);

          it('#search', (done) => {
            getClient()[adapterPath].search({id: 5, filter: filter, market_id: market_id, page: page}).then(res => {
              assert.exists(res.body)
              done();
            });
          });

          it('#cluster', (done) => {
            getClient()[adapterPath].cluster({id: 5, filter: filter, market_id: market_id, page: page}).then(res => {
              assert.exists(res.body)
              done();
            });
          });
        });

        describe('#site', () => {
          let adapterPath = 'sites';

          meTests.call(this, getClient, adapterPath);
        });

        describe('#user', () => {
          let adapterPath = 'users';
          let attributes = {email: 'foo@realsavvy.com'};

          createTests.call(this, getClient, adapterPath, attributes);
          showTests.call(this, getClient, adapterPath);
          indexTests.call(this, getClient, adapterPath);
          updateTests.call(this, getClient, adapterPath, attributes);
          destroyTests.call(this, getClient, adapterPath);

          meTests.call(this, getClient, adapterPath);
        });
      });
    });
  }
}
