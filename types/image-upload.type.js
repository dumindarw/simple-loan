const { GraphQLInputObjectType } = require("graphql");
const { Upload } = require("graphql-upload");


export const ImageUploadType = new GraphQLInputObjectType({
    name: "image",
    fields:{
        file: {
            type: !Upload
        }
    }
})