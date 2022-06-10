import { ImageUploadType } from "../types/image-upload.type";
import { Response } from "../types/response.type";

import { CreateClient, GetClients } from "../db/neo4j";

import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from "graphql";
import { ClientType } from "../types/client.type";
import { storeFS } from "../utils/file.util";
import { GraphQLUpload } from "graphql-upload";

const ClientSchema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: {
          ADD_CLIENT: {
              type: ClientType,
              args:{
                  name: {
                      type: GraphQLString,
                  },
                  amount: {
                      type: GraphQLFloat
                  },
                  file: {
                    type: ImageUploadType,
                    resolve: GraphQLUpload
                  }
              },
              resolve: async (root, args, context, info) => {
                const { file } = await args.file;
                const filename = file.filename;
                const stream = file.createReadStream();
                const pathObj = await storeFS({ stream, filename });
                const fileLocation = pathObj.path;
                return CreateClient(args).then(data => {
                  if(data){
                    return data;
                  }
                });
              }
          }
      }
  }),
  query : new GraphQLObjectType({
    name: 'Query',
    fields: {
      LIST_CLIENTS: { 
        type: new GraphQLList(ClientType),
        resolve: async (parent, args) => {
          return GetClients().then(data => {
            return data;
          })
        }
      }
}
  }) 
})

export default ClientSchema;