import TestRunner from './test_runner'

let runner = new TestRunner({ClientKlass: RealSavvy.Client, fixture: window.__fixtures__['jsonapi']})
runner.run();
