# babel-symlink-failing-demo
A showcase that demonstrates how a linked package (of some shared code) is failing to transpile in Babel


## Description

The setup consists of two packages: `main-package` and a `secondary-package`. Both are written using ES6 and relying on Babel to transpile its code. Both have the same set of core dependencies. Both use mocha-run unit tests. The latter runs its `npm test` with a 1 passing (of 1) test. The former, however, tries to import the constant declared in the secondary package - that's the essence of the test - and it fails.

The command showcasing the description:

```bash
./install-and-demo-all.sh
```

So, a bug report::

## Bug Report

**Current Behavior**
Referencing a 

**Input Code**
- REPL or Repo link if applicable:

```js
var your => (code) => here;
```

**Expected behavior/code**
A clear and concise description of what you expected to happen (or code).

**Babel Configuration (.babelrc, package.json, cli command)**

```js
{
  "your": { "config": "here" }
}
```

**Environment**
- Babel version(s): [e.g. v6.0.0, v7.0.0-beta.34]
- Node/npm version: [e.g. Node 8/npm 5]
- OS: [e.g. OSX 10.13.4, Windows 10]
- Monorepo: [e.g. yes/no/Lerna]
- How you are using Babel: [e.g. `cli`, `register`, `loader`]

**Possible Solution**
<!--- Only if you have suggestions on a fix for the bug -->

**Additional context/Screenshots**
Add any other context about the problem here. If applicable, add screenshots to help explain.


Failing:

```txt

$ npm test

> main-package@1.0.0 test ~/code/demos/failing-babel-demo/main-package
> mocha --require @babel/register

~/code/demos/failing-babel-demo/secondary-package/src/index.js:1
(function (exports, require, module, __filename, __dirname) { export const helloWorld = 'hello, world!';
                                                              ^^^^^^

SyntaxError: Unexpected token export
    at new Script (vm.js:74:7)
    at createScript (vm.js:246:10)
    at Object.runInThisContext (vm.js:298:10)
    at Module._compile (internal/modules/cjs/loader.js:670:28)
    at Module._compile (~/code/demos/failing-babel-demo/main-package/node_modules/pirates/lib/index.js:99:24)
    at Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Object.newLoader [as .js] (~/code/demos/failing-babel-demo/main-package/node_modules/pirates/lib/index.js:104:7)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (~/code/demos/failing-babel-demo/main-package/src/index.js:1:1)
    at Module._compile (internal/modules/cjs/loader.js:702:30)
    at Module._compile (~/code/demos/failing-babel-demo/main-package/node_modules/pirates/lib/index.js:99:24)
    at Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Object.newLoader [as .js] (~/code/demos/failing-babel-demo/main-package/node_modules/pirates/lib/index.js:104:7)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (~/code/demos/failing-babel-demo/main-package/test/index.test.js:2:1)
    at Module._compile (internal/modules/cjs/loader.js:702:30)
    at Module._compile (~/code/demos/failing-babel-demo/main-package/node_modules/pirates/lib/index.js:99:24)
    at Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Object.newLoader [as .js] (~/code/demos/failing-babel-demo/main-package/node_modules/pirates/lib/index.js:104:7)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at ~/code/demos/failing-babel-demo/main-package/node_modules/mocha/lib/mocha.js:334:36
    at Array.forEach (<anonymous>)
    at Mocha.loadFiles (~/code/demos/failing-babel-demo/main-package/node_modules/mocha/lib/mocha.js:331:14)
    at Mocha.run (~/code/demos/failing-babel-demo/main-package/node_modules/mocha/lib/mocha.js:811:10)
    at Object.exports.singleRun (~/code/demos/failing-babel-demo/main-package/node_modules/mocha/lib/cli/run-helpers.js:108:16)
    at exports.runMocha (~/code/demos/failing-babel-demo/main-package/node_modules/mocha/lib/cli/run-helpers.js:142:13)
    at Object.exports.handler.argv [as handler] (~/code/demos/failing-babel-demo/main-package/node_modules/mocha/lib/cli/run.js:292:3)
    at Object.runCommand (~/code/demos/failing-babel-demo/main-package/node_modules/yargs/lib/command.js:242:26)
    at Object.parseArgs [as _parseArgs] (~/code/demos/failing-babel-demo/main-package/node_modules/yargs/yargs.js:1104:24)
    at Object.parse (~/code/demos/failing-babel-demo/main-package/node_modules/yargs/yargs.js:566:25)
    at Object.exports.main (~/code/demos/failing-babel-demo/main-package/node_modules/mocha/lib/cli/cli.js:68:6)
    at Object.<anonymous> (~/code/demos/failing-babel-demo/main-package/node_modules/mocha/bin/mocha:154:29)
    at Module._compile (internal/modules/cjs/loader.js:702:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:744:10)
    at startup (internal/bootstrap/node.js:240:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:564:3)
npm ERR! Test failed.  See above for more details.

```

