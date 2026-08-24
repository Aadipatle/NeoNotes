
const { gql } = require("apollo-server");

module.exports = gql`
type User {
  id: ID
  name: String
  age: Int
  email: String
}

type TodoItem {
  id: ID!
  title: String!
  description:String
  status: Boolean
  author: String!
  user: [User!]
  userNames: [String]
}

type Query {
  ab: String
  users: [User!]
  todoList: [TodoItem!]
  getTodo(id: ID!): TodoItem
}

input CreateTodoInput {
  title: String!
    description:String
  status: Boolean
  author: String!
  userNames: [String]
}

input UpdateTodoInput {
  title: String
    description:String
  status: Boolean
  author: String
  userNames: [String]
}

type AuthPayload {
  token: String!
  user: User
}

input SignupInput {
  name: String!
  email: String!
  password: String!
  age: Int
}

input LoginInput {
  email: String!
  password: String!
}

type Mutation {
  # Auth
  signup(data: SignupInput!): AuthPayload
  login(data: LoginInput!): AuthPayload

  # Todo operations (protected)
  addTodo(data: CreateTodoInput!): TodoItem
  updateTodo(id: ID!, data: UpdateTodoInput!): TodoItem
  deleteTodo(id: ID!): Boolean
  deleteAllTodo: [TodoItem!]
}
`;
