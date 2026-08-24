
const { ApolloServer } = require("apollo-server");
const jwt = require("jsonwebtoken");
const typeDefs = require("./grapghql/typeDefs");
const resolvers = require("./grapghql/resolvers");
const { JWT_SECRET } = require("./config");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const auth = req.headers.authorization || "";
    if (auth && auth.startsWith("Bearer ")) {
      const token = auth.replace("Bearer ", "");
      try {
        const payload = jwt.verify(token, JWT_SECRET);
        return { user: payload };
      } catch (err) {
        return {};
      }
    }
    return {};
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
