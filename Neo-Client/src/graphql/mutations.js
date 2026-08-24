// import { gql } from "@apollo/client";

// export const ADD_TODO = gql`
//   mutation ($todoItem: addTodoItem!) {
//     addTodo(todoItem: $todoItem) {
//       id
//       title
//       author
//       status
//     }
//   }
// `;

// export const DELETE_TODO = gql`
//   mutation ($id: ID!) {
//     deleteTodoItem(id: $id) {
//       id
//       title
//       status
//     }
//   }
// `;

// export const UPDATE_STATUS = gql`
//   mutation ($id: ID!, $status: Boolean!) {
//     updateTodoStatus(id: $id, status: $status) {
//       id
//       title
//       status
//     }
//   }
// `;


import { gql } from "@apollo/client";

export const SIGNUP = gql`
mutation($data: SignupInput!) {
  signup(data: $data) {
    token
    user { id name email }
  }
}
`;

export const LOGIN = gql`
mutation($data: LoginInput!) {
  login(data: $data) {
    token
    user { id name email }
  }
}
`;

export const ADD_TODO = gql`
mutation($data: CreateTodoInput!) {
  addTodo(data: $data) {
    id
    title
    description
    status
    author
  }
}
`;

export const UPDATE_TODO = gql`
mutation($id: ID!, $data: UpdateTodoInput!) {
  updateTodo(id: $id, data: $data) {
    id
    title
    description
    status
  }
}
`;

export const DELETE_TODO = gql`
mutation($id: ID!) {
  deleteTodo(id: $id)
}
`;

export const DELETE_ALL = gql`
mutation {
  deleteAllTodo {
    id
  }
}
`;
