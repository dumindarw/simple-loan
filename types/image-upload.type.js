const { GraphQLScalarType } = require("graphql");

export const ImageUploadType = new GraphQLScalarType({
    name: "Upload"
})