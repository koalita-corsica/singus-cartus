import {GiPresent} from 'react-icons/gi'

export default {
  name: "cadeau",
  type: "document",
  title: "Cadeau",
  icon: GiPresent,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      hidden: true,
      description:
        "Some frontends will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
    {
      name: "description",
      type: "bioPortableText",
      title: "Description du cadeau",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      media: "image",
    },
  },
};
