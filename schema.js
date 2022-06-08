const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  }

  type ManualGroup {
   Image
   [Car]
  }

  type AutomaticGroup {
   Image
   [Car]
   [AutomaticGroupFeatures]
  }

  type AutomaticGroupFeatures {}
`;

module.exports = typeDefs;
