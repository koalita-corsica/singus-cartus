// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas

import siteSettings from "./documents/siteSettings";
import newsletter from "./documents/newsletter";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import articleNoImage from "./objects/articleNoImage";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import iconImage from "./objects/iconImage";
import icon from "./documents/icon";
import fichepost from "./documents/fichepost";
import entreprise from "./documents/entreprise";
import epis from "./documents/epis";
import tache from "./objects/tache";
import pictos from "./documents/pictos";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    newsletter,
    mainImage,
    iconImage,
    bodyPortableText,
    articleNoImage,
    bioPortableText,
    excerptPortableText,
    icon,
    fichepost,
    entreprise,
    epis,
    tache,
    pictos,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
