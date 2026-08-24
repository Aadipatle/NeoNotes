// import { useMutation } from "@apollo/client";
// import { DELETE_TODO, UPDATE_STATUS } from "../graphql/mutations";
// import { GET_TODOS } from "../graphql/queries";

// export default function TodoItem({ todo }) {
//   const [deleteTodo] = useMutation(DELETE_TODO, { refetchQueries: [GET_TODOS] });
//   const [updateStatus] = useMutation(UPDATE_STATUS, { refetchQueries: [GET_TODOS] });

//   return (
//     <li>
//       <strong>{todo.title}</strong> — {todo.author}
//       <span> {todo.status ? "✔ Completed" : "❌ Pending"}</span>

//       <button onClick={() => updateStatus({ variables: { id: todo.id, status: !todo.status } })}>
//         Toggle
//       </button>

//       <button onClick={() => deleteTodo({ variables: { id: todo.id } })}>
//         Delete
//       </button>
//     </li>
//   );
// }

import { useMutation } from "@apollo/client";
import { UPDATE_TODO, DELETE_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";
import { useState } from "react";

export default function TodoItem({ todo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [GET_TODOS],
  });
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [GET_TODOS],
  });

  return (
    <li
      style={{
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <div onClick={() => setIsOpen(!isOpen)}>
        <strong>{todo.title}</strong>
      </div>

      {isOpen && (
        <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
          <p>
            <strong>Description:</strong> {todo.description}
          </p>
          <p>
            <strong>Author:</strong> {todo.author}
          </p>
          <p>
            <strong>Status:</strong> {todo.status ? "Done" : "Pending"}
          </p>

          {todo.status ? (
            <button
              disabled
              style={{ marginRight: "10px" }}
            >
              Toggle
            </button>
          ) : (
            <button
              onClick={() =>
                updateTodo(
                  {
                    variables: { id: todo.id, data: { status: !todo.status } },
                  },
                  setIsOpen(!isOpen)
                )
              }
              style={{ marginRight: "10px" }}
            >
              Toggle
            </button>
          )}

          <button
            onClick={() => deleteTodo({ variables: { id: todo.id } })}
            style={{ background: "red", color: "white" }}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}
