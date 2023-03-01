const Task = require('../models/Task');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { createCustomAPIError } = require('../errors/custom-api-error');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

const getTaskById = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomAPIError(`No task found with id : ${taskID}`, 404));
    }
    res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
    if (!task) {
        return next(createCustomAPIError(`No task found with id : ${taskID}`, 404));
    }
    res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomAPIError(`No task found with id : ${taskID}`, 404));
    }
    res.status(200).json({ msg: 'task deleted' });
});

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};
