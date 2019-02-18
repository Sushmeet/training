// import myLocation, { message, name, greeting } from "./mymodule";
// import addition, { subtract } from "./math";

// console.log(message, name, myLocation);
// console.log(greeting("bonziii"));
// console.log(addition(7, 3));
// console.log(subtract(7, 3));
import { GraphQLServer } from "graphql-yoga";
// const { GraphQLServer } = require('graphql-yoga')

// Type definition schema
const typeDefs = `
 type Query {
    title(title: String): String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
    me: User!
    post: Post!
 }

 type User {
    id: ID!
    name: String!
    email: String!
    age: Int
 }

 type Post {
     id: ID!
     title: String!
     body: String!
     published: Boolean!
 }
 `;

// Application Resolvers
const resolvers = {
  Query: {
    title: () => "product sushi",
    price: () => 3.24,
    releaseYear: () => 1980,
    rating: () => null,
    inStock: () => true,
    me: () => {
      return {
        id: 1234,
        name: "Joomba",
        email: "Joomba@gmail.com",
        age: 23
      };
    },
    post: () => {
        return {
            id: 3,
            title: 'Great first post',
            body: 'Body of the great first post',
            published: true
        }
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("GraphQL Yoga Server has started"));
