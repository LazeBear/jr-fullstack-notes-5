const data = [];
let id = 1;

function addTask({ description }) {
  const task = {
    id: id++,
    description,
    done: false,
  };
  data.push(task);
  return task;
}

function getAllTasks({ description }) {
  if (description) {
    const filteredData = data.filter((i) =>
      i.description.includes(description)
    );
    return filteredData;
  }
  return data;
}

// id is Number type already
function getTaskById(id) {
  return data.find((task) => task.id === id);
}

// task must exist
function updateTaskById(id, { done, description }) {
  const task = data.find((i) => i.id === id);
  if (done !== undefined) {
    task.done = !!done;
  }
  if (description) {
    task.description = description;
  }
  return task;
}

function deleteTaskById(id) {
  const index = data.findIndex((i) => i.id === id);
  data.splice(index, 1);
}

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  addTask,
};
