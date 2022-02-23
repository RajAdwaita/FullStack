import express from 'express';
import { createTodos, readTodos, updateTodo, deleteTodo } from '../controller/todos.js';

const router = express.Router();

router.get('/', readTodos)
router.post('/', createTodos)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)
export default router;