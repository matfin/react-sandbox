// import { ApolloServer, gql } from 'apollo-server';
const { ApolloServer, gql } = require('apollo-server');

const stories = [
  {
    author: 'Matt Finucane',
    title: 'Chapter One'
  },
  {
    author: 'Matt Finucane',
    title: 'Chapter Two'
  }
];

const typeDefs = gql`
  type Story {
    author: String,
    title: String
  }

  type Query {
    stories: [Story]
  }
`;

const resolvers = {
  Query: {
    stories: () => stories
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Apollo server listening at: ${url}`);
});
