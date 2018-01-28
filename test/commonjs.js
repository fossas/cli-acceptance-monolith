const expect = require('expect')
const child_process = require('child_process')
const rimraf = require('rimraf')

describe('CommonJS Packages', () => {
  var buildData

  before(() => {
	 	rimraf.sync('recast/node_modules')
	 	rimraf.sync('optimistic/node_modules')
    var output = child_process.execSync('fossa -o --config ./config/commonjs-multi-module.yml --install')
    buildData = JSON.parse(output)
  })

  it('should handle multiple modules', () => {
  	expect(buildData.length).toBe(2)
  })

  it('should install yarn lockfiles', () => {
  	expect(buildData.length).toBe(2)
  })

  it('should ignore dev dependencies by default install', () => {
  	expect(buildData.length).toBe(2)
  })
})
