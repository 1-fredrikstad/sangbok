import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import song from "./documents/song";
import category from "./documents/category";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    song,
    category,
  ]),
});
