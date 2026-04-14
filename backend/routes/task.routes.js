const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/task.controller');

router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, createTask);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;