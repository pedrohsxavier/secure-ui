const taskRepository = require('../repositories/task.repository');

async function getTasks(req, res) {
    const tasks = await taskRepository.findByUser(req.userId);
    res.json(tasks);
}

async function createTask(req, res) {
    const { text } = req.body;

    const task = await taskRepository.create({
        text,
        userId: req.userId
    });

    res.json(task);
}

async function updateTask(req, res) {
    const id = Number(req.params.id);

    const task = await taskRepository.update(id, req.body);

    res.json(task);
}

async function deleteTask(req, res) {
    const id = Number(req.params.id);

    await taskRepository.remove(id);

    res.json({ message: 'deleted' });
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};