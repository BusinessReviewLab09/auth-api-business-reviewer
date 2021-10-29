'use strict';

const express = require('express');
const dataModules = require('../modelinstance/index.js');
const basicAuth = require('../auth/middleware/basic.js');
const bearerAuth = require('../auth/middleware/bearer.js');
const permissions = require('../auth/middleware/acl.js');

const router = express.Router();

router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

async function handleComments(req) {
  const id = req.params.id;

  req.model = dataModules['comments'];

  let comments = await req.model.get(id);


  return comments;
}

async function handleStars(req) {
  const id = req.params.id;

  req.model = dataModules['stars'];

  let comments = await req.model.get(id);


  return comments;
}

router.get('/:model', basicAuth, handleGetAll);
router.get('/:model/:id', handleGetOne);
router.post('/:model', bearerAuth, permissions('create'), handleCreate);
router.put('/:model/:id', bearerAuth, permissions('update'), handleUpdate);
router.delete('/:model/:id', bearerAuth, permissions('delete'), handleDelete);

async function handleGetAll(req, res) {
  try {
    let allRecords = await req.model.get();
    res.status(200).json(allRecords);
  } catch (error) {console.log(error, '<-- get all error --<<'); res.status(400).send(error)}
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let bizRecord = await req.model.get(id);

  let comments = null;
  let stars = null;

  if (bizRecord.type) {

    comments = await handleComments(req);
    stars = await handleStars(req);

  };

  res.status(200).json({bizRecord, comments, stars});
}

async function handleCreate(req, res) {
  try {
    let obj = req.body;
    let newRecord = await req.model.create(obj);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}

module.exports = router;