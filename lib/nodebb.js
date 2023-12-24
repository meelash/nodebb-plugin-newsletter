// nodebb-plugin-newsletter
// Require modules from NodeBB

const nodebb = path => require.main.require(path)

exports.SocketUser = nodebb('./src/socket.io/user')

exports.db = nodebb('./src/database')
exports.Emailer = nodebb('./src/emailer')
exports.Meta = nodebb('./src/meta')
exports.Plugins = nodebb('./src/plugins')
exports.User = nodebb('./src/user')
exports.privileges = nodebb('./src/privileges')

exports.async = nodebb('async')
exports.nconf = nodebb('nconf')
exports.winston = nodebb('winston')
exports.jwt = nodebb('jsonwebtoken')
exports.url = nodebb('url')
exports.util = nodebb('util')
