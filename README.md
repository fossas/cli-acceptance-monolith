# FOSSA-CLI Acceptance Test Monolith

A collection of git modules and fossa config scenarios to test `fossa-cli` against.

Requires to be run on a host machine with `fossa-cli` and `NodeJS` installed.

## Getting Started

 1. Install latest `fossa-cli`.
 2. Run `npm install` or `yarn`
 3. `yarn run test`

## Test Cases

**CommonJS Packages**
 - Recast (yarn, lots of dev dependencies)
 - Optimistic (vanilla npm / package.json, no lockfile)

To add test cases, fork an attractive repo into the FOSSA org (to pin version) and then add them with `git submodule add https://github.com/fossas/{REPONAME}`.

You can create test cases under `test/{TEST_FILE}.js` with any configuration dependencies under `/config/{TEST_CONFIG).yml`.

The idiomatic test's bootstrap logic should be:

 1. Invalidate existing builds (i.e. delete any `node_modules` directory in a submodule)
 2. Run FOSSA in "output" mode with the `--install` flag pointed at test config, i.e. (`fossa -o --config ./config/{TEST_CONFIG}.yml --install`)
 3. Parse stdout and write test logic around it