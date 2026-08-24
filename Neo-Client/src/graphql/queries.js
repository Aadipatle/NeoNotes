// import { gql } from "@apollo/client";

// export const GET_TODOS = gql`
//   query {
//     todoList {
//       id
//       title
//       author
//       status
//     }
//   }
// `;

import { gql } from "@apollo/client";

export const GET_TODOS = gql`
query {
  todoList {
    id
    title
    description
    author
    status
  }
}
`;
