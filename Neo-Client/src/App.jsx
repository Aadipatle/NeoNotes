

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoPage from "./pages/TodoPage";
import { isLoggedIn } from "./utils/auth";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={isLoggedIn() ? <TodoPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
