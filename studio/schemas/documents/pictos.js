import { BiSticker } from "react-icons/bi";

export default {
  name: "pictos",
  type: "document",
  title: "Pictos",
  icon: BiSticker,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "picto",
      type: "image",
      title: "Picto Image",
    },
  ],
};
