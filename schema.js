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

  type Group {
    id: ID!
    features: [GroupFeatures!]!
    applyFeaturesSeparately: Boolean!
    cars: [Car!]!
    name: String!
    imageId: ID!
    bodyHtml: String!
  }

  type GroupFeatures {
    feature: String!
  }
`;

module.exports = typeDefs;
