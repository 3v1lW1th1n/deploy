#!/usr/bin/env node
const {dirname, join} = require('path')
const deploy = require('./src/deploy')

const args = process.argv.slice(2)
console.log('💩💩💩 args in entrypoint', args)

deploy(...args)
  .then(res => {
    console.warn(`[deploy] deployed: ${JSON.stringify(res)}`)
  })
  .catch(error => {
    console.error(`[deploy] ERROR: ${error}`)
    process.exitCode = 1
  })
