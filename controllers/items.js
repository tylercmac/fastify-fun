const itemArr = require("../Items");

const getItems = (req, reply) => {
  reply.send(itemArr)
}

const getItem = (req, reply) => {
  const { id } = req.params;

  const item = itemArr.find((item) => item.id === id);

  reply.send(item);
}

module.exports = {
  getItems,
  getItem
}