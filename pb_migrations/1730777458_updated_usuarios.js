/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ffm8odgwcsxpxqe")

  // remove
  collection.schema.removeField("xjhkvkad")

  // remove
  collection.schema.removeField("osr7irmy")

  // remove
  collection.schema.removeField("9ndgml0q")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ffm8odgwcsxpxqe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xjhkvkad",
    "name": "usuario",
    "type": "text",
    "required": true,
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
    "id": "osr7irmy",
    "name": "contrasena",
    "type": "text",
    "required": true,
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
    "id": "9ndgml0q",
    "name": "contrasena_conf",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
