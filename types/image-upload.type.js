const { GraphQLInputObjectType, GraphQLScalarType } = require("graphql");
const {  GraphQLUpload } = require("graphql-upload");


export const ImageUploadType = new GraphQLScalarType({
    name: "image",
    fields:{
        file: {
            type: !GraphQLUpload,
        }
    },
})