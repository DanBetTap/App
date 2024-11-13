/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jdqmptpfdfxkz2f");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jdqmptpfdfxkz2f",
    "created": "2024-11-02 22:54:00.072Z",
    "updated": "2024-11-05 02:33:24.221Z",
    "name": "usuarios",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3erniuvo",
        "name": "nombre",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hfe2zwen",
        "name": "apellido",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "joqg2cdy",
        "name": "correo",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "2rhcpulu",
        "name": "rut",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vgs58pw6",
        "name": "tipo",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "estudiante",
            "profesor"
          ]
        }
      },
      {
        "system": false,
        "id": "x2qukfdr",
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
      },
      {
        "system": false,
        "id": "ck1uj67x",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
