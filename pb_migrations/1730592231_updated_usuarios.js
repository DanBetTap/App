/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdqmptpfdfxkz2f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x2qukfdr",
    "name": "usuario",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ck1uj67x",
    "name": "contrasena",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jdqmptpfdfxkz2f")

  // remove
  collection.schema.removeField("x2qukfdr")

  // remove
  collection.schema.removeField("ck1uj67x")

  return dao.saveCollection(collection)
})
