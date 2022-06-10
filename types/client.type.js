const { GraphQLInputObjectType, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } = require("graphql");


export const ClientInputType = new GraphQLInputObjectType({
    name: "client",
    fields: {
        name:{
            type: GraphQLString
        },
        amount: {
            type: GraphQLFloat
        }
    }
})

export const ClientType = new GraphQLObjectType({
    name: "client",
    fields: {
        name:{
            type: GraphQLString
        },
        amount: {
            type: GraphQLFloat
        }
    }
})