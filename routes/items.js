const { getItems, getItem, addItem, removeItem, updateItem } = require("../controllers/items");

// Item schema
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: { 
        type: "array",
        items: Item
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const addItemOpts = {
  schema: {
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const removeItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string',}
        },
      },
    },
  },
  handler: removeItem,
};

const updateItemOpts = {
  schema: {
    response: {
      200: Item
    },
  },
  handler: updateItem,
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOpts);

  // Get single item
  fastify.get("/items/:id", getItemOpts);
  
  // Add item 
  fastify.post("/items", addItemOpts);
  
  // Update item 
  fastify.put("/items/:id", updateItemOpts);

  done();
}

module.exports = itemRoutes;
