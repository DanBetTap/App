/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ffm8odgwcsxpxqe")

  collection.name = "usuarios"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ffm8odgwcsxpxqe")

  collection.name = "usuarios_duplicate"

  return dao.saveCollection(collection)
})
