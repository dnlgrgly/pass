const db = require("./db");
const { generate } = require("../utils/id");
const { throw400, checkDuplicates } = require("../utils/errors");

const collectionName = "articles";

async function search() {
  return db
    .collection(collectionName)
    .find()
    .sort({ title: 1 })
    .project({ id: 1 })
    .toArray();
}

async function all() {
  return db
    .collection(collectionName)
    .find()
    .toArray();
}

async function get(id) {
  const article = await db.collection(collectionName).findOne({ id });

  if (!article) {
    throw400({
      msg: "No post with matching ID found!"
    });
  }

  return article;
}

async function create({ title, content, tags }) {
  const article = { title, content, tags };
  article.id = generate(12);
  await db.collection(collectionName).insertOne(article);
  return article;
}

async function update(id, article) {
  await db.collection(collectionName).updateOne({ id: id }, { $set: article });
  return article;
}

async function deleteById({ id }) {
  await db.collection(collectionName).remove({ id: id });
  return "Success!";
}

module.exports = {
  get raw() {
    return db.collection(collectionName);
  },
  all,
  search,
  create,
  get,
  update,
  deleteById
};
