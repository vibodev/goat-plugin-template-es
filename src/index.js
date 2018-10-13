'use strict'
import path from 'path'
export default (app) => {
  let cfg = app.config['plugin_name']
  console.log(cfg)
  //
  console.log(path.join(process.cwd(), './dist/index.js'))
  //
  var middleware = async (ctx, next) => {
    await next()
  }
  return middleware
}
