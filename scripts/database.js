var nano = require('nano');

module.exports = nano(process.env.DATABASE_URL || 'http://root:icesi-pass@mi-couchdb:5984');