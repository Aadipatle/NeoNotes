// import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_TODO } from "../graphql/mutations";
// import { GET_TODOS } from "../graphql/queries";

// export default function TodoForm() {
//   const [form, setForm] = useState({ title: "", author: "" });

//   const [addTodo] = useMutation(ADD_TODO, {
//     refetchQueries: [GET_TODOS],
//   });

//   const handleAdd = async () => {
//     if (!form.title || !form.author) return alert("Fill all fields");

//     await addTodo({
//       variables: {
//         todoItem: { ...form, status: false },
//       },
//     });

//     setForm({ title: "", author: "" });
//   };

//   return (
//     <div style={{ marginBottom: 20 }}>
//       <input
//         placeholder="Title"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//       />

//       <input
//         placeholder="Author"
//         value={form.author}
//         onChange={(e) => setForm({ ...form, author: e.target.value })}
//       />

//       <button onClick={handleAdd}>Add Todo</button>
//     </div>
//   );
// }

import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";
import { useState } from "react";

export default function TodoForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    author: "",
    userNames: [],
  });

  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [GET_TODOS],
  });

  const handleAdd = async () => {
    await addTodo({ variables: { data: { ...form, status: false } } });
    setForm({ title: "", description: "", author: "", userNames: [] });
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <textarea
            type="text"
            rows={7}
            placeholder="Description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          {/* <input
            type="text"
            placeholder="Author"
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            required
          /> */}
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
}
