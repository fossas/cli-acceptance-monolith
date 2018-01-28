const expect = require('expect')
const child_process = require('child_process')
const rimraf = require('rimraf')
const fs = require('fs')

describe('CommonJS Packages', () => {
  var buildData
  var recastBuild
  var optimisticBuild

  before(() => {
	 	rimraf.sync('recast/node_modules')
	 	rimraf.sync('optimistic/node_modules')
    var output = child_process.execSync('fossa -o --config ./config/commonjs-multi-module.yml --install')
    buildData = JSON.parse(output)
    recastBuild = buildData[0]
    optimisticBuild = buildData[1]
  })

  it('should handle multiple modules', () => {
  	expect(buildData.length).toBe(2)
  })

  it('should prefer yarn install over npm install', () => {
    fs.statSync('recast/node_modules/.yarn-integrity')
    expect(recastBuild.Build.Context.HasYarnLockFile).toBe(true)
  })

  it('should run production installs', () => {
  	// yarn
  	expect(recastBuild.Build.Dependencies.length).toBe(4)
  	// bare npm
  	expect(optimisticBuild.Build.Dependencies.length).toBe(4)
  })
})
