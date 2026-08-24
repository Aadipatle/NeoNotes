
const TodoController = require("../controllers/todoController");
const AuthController = require("../controllers/authController");
const usersRef = require("../controllers/authController").getUsersRef(); // current user list
const users = require("../data/users"); // fallback / read-only

function requireAuth(context) {
  if (!context.user) {
    throw new Error("Authentication required. Please provide a valid Authorization header.");
  }
  return context.user;
}

module.exports = {
  Query: {
    ab: () => "Aadi",
    users: () => AuthController.getUsersRef(),
    todoList: () => TodoController.getTodos(),
    getTodo: (_, { id }) => TodoController.getTodoById(id),
  },

  TodoItem: {
    user: (parent) => {
      if (!parent.userNames || !Array.isArray(parent.userNames)) return [];
      return AuthController.getUsersRef().filter((u) => parent.userNames.includes(u.name));
    },
  },

  Mutation: {
    // Auth
    signup: (_, { data }) => {
      return AuthController.signup(data);
    },

    login: (_, { data }) => {
      return AuthController.login(data);
    },

    // Protected Todo mutations
    addTodo: (_, { data }, context) => {
      requireAuth(context);
      return TodoController.createTodo(data);
    },

    updateTodo: (_, { id, data }, context) => {
      requireAuth(context);
      return TodoController.updateTodo(id, data);
    },

    deleteTodo: (_, { id }, context) => {
      requireAuth(context);
      return TodoController.deleteTodo(id);
    },

    deleteAllTodo: (_, __, context) => {
      requireAuth(context);
      return TodoController.deleteAll();
    },
  },
};
