const { getItems, getItem, addItem, removeItem } = require("../controllers/items");

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

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOpts);

  // Get single item
  fastify.get("/items/:id", getItemOpts);
  
  // Add item 
  fastify.post("/items", addItemOpts);
  
  // Delete item 
  fastify.delete("/items/:id", removeItemOpts);

  done();
}

module.exports = itemRoutes;
