const { v4: uuidv4 } = require('uuid')
let itemArr = require("../Items");

const getItems = (req, reply) => {

  reply.send(itemArr)
}

const getItem = (req, reply) => {
  const { id } = req.params;

  const item = itemArr.find((item) => item.id === id);

  reply.send(item);
}

const addItem = (req, reply) => {
  const {name} = req.body

  const item = {
    id: uuidv4(),
    name,
  }

  itemArr = [...itemArr, item]

  reply.code(201).send(item);
}

const removeItem = (req, reply) => {
  const { id } = req.params;

  itemArr = itemArr.filter(item => item.id !== id);

  reply.send({message: `item ${id} deleted`});
}

module.exports = {
  getItems,
  getItem,
  addItem,
  removeItem
}