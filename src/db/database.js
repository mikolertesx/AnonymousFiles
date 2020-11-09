const path = require('path');
const getPath = require('../util/getPath');
const Datastore = require('nedb-promises');

const dbPath = path.join(getPath.AppData, 'anonymous-files', 'files.db');
let datastore = Datastore.create(path.join(dbPath));
module.exports = datastore;