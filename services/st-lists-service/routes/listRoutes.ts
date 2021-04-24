const express = require('express');
const ListController = require('../controllers/ListController');
const router = express.Router();

router.get('/list', ListController.getAllLists);
router.get('/list/:listId', ListController.getOneList);
router.post('/list', ListController.createList);
router.patch('/list/:listId', ListController.updateList);
router.delete('/list/:listId', ListController.deleteList);

export default router;
