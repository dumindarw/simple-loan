const { GraphQLInputObjectType, GraphQLID, GraphQLString, GraphQLFloat } = require("graphql");


export const clientInputType = new GraphQLInputObjectType({
    name: "client",
    fields: {
        id: {
            type: GraphQLID
        },
        name:{
            type: GraphQLString
        },
        amount: {
            type: GraphQLFloat
        }
    }
})