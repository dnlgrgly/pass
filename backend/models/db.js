const { MongoClient } = require("mongodb");
const config = require("../config");

let client;

async function init() {
  client = await MongoClient.connect(
    config.db.uri,
    {
      poolSize: config.db.poolSize,
      useNewUrlParser: true
    },
  );
}

async function close() {
  if (client) {
    await client.close();
    client = undefined;
  }
}

function collection(collectionName) {
  return client.db(config.db.name).collection(collectionName);
}

module.exports = {
  get raw() {
    return client.db(config.db.name);
  },
  init,
  close,
  collection
};
