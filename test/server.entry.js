import {Client as RealSavvyClient} from '../src/index.js'

import TestRunner from './test_runner'

console.log(RealSavvyClient)

let fixture = require('./fixtures/jsonapi')

global.assert = require('chai').assert

let runner = new TestRunner({ClientKlass: RealSavvyClient, fixture: fixture})
runner.run();
