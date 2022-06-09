import { GraphQLInt, GraphQLString, GraphQLObjectType } from "graphql";

export const Response = new GraphQLObjectType({
    name: "Response",
    fields: {
      message: {
        type: GraphQLString
      },
      code: {
        type: GraphQLInt
      }
    }
  })