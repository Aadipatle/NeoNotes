// import { useQuery } from "@apollo/client";
// import { GET_TODOS } from "../graphql/queries";
// import TodoItem from "./TodoItem";

// export default function TodoList() {
//   const { data, loading, error } = useQuery(GET_TODOS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Failed to load</p>;

//   return (
//     <ul>
//       {data.todoList.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} />
//       ))}
//     </ul>
//   );
// }

import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { data, loading } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.todoList.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
}
