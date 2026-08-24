// let todos = require("../data/todos");

// module.exports = {
//   getTodos: () => todos,

//   getTodoById: (id) => todos.find((t) => t.id == id),

//   createTodo: (data) => {
//     const newTodo = {
//       id: Math.floor(Math.random() * 10000),
//       ...data,
//       userNames: data.userNames || [],
//     };

//     todos.push(newTodo);
//     return newTodo;
//   },

//   updateTodo: (id, data) => {
//     const index = todos.findIndex((t) => t.id == id);
//     if (index === -1) return null;

//     todos[index] = {
//       ...todos[index],
//       ...data,
//     };

//     return todos[index];
//   },

//   deleteTodo: (id) => {
//     const filtered = todos.filter((t) => t.id != id);
//     const deleted = filtered.length !== todos.length;

//     todos = filtered;
//     return deleted;
//   },

//   deleteAll: () => {
//     todos = [];
//     return [];
//   },
// };


// controllers/todoController.js

let todos = require("../data/todos");

module.exports = {
  getTodos: () => todos,

  getTodoById: (id) => todos.find((t) => String(t.id) === String(id)),

  createTodo: (data) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      ...data,
      userNames: data.userNames || [],
    };

    todos.push(newTodo);
    return newTodo;
  },

  updateTodo: (id, data) => {
    const index = todos.findIndex((t) => String(t.id) === String(id));
    if (index === -1) return null;
 
    todos[index] = {
      ...todos[index],
      ...data,
    };

    return todos[index];
  },

  deleteTodo: (id) => {
    const prevLen = todos.length;
    todos = todos.filter((t) => String(t.id) !== String(id));
    const deleted = todos.length !== prevLen;
    return deleted;
  },

  deleteAll: () => {
    todos = [];
    return todos;
  },

  // expose internal reference for debug if needed
  getTodosRef: () => todos,
};

