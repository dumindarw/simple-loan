const { GraphQLInputObjectType, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } = require("graphql");

export const ClientType = new GraphQLObjectType({
    name: "client",
    fields: {
        name:{
            type: GraphQLString
        },
        amount: {
            type: GraphQLFloat
        },
        image : {
            type: GraphQLString
        }
    }
})