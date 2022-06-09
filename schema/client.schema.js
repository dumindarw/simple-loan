import { ImageUploadType } from "../types/image-upload.type";
import { Response } from "../types/response.type";

import { CreateClient } from "../db/neo4j";

import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLFloat } from "graphql";


const ClientSchema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: {
          ADD_CLIENT: {
              type: Response,
              args:{
                  name: {
                      type: GraphQLString,
                  },
                  amount: {
                      type: GraphQLFloat
                  }
                  /*image: {
                    type: ImageUploadType
                  }*/
              },
              resolve: async (root, args, context, info) => {
                data = await CreateClient(args);
                console.log(data);
                return data;
              }
          }
      }
  }),
  query : new GraphQLObjectType({
    name: 'Query',
    fields: {
      _dummy: { type: GraphQLString }
    }
  }) 
})

export default ClientSchema;