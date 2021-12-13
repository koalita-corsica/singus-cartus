import { MdOutlineDangerous } from "react-icons/md";

export default {
  name: "pictosD",
  type: "document",
  title: "Pictos Danger",
  icon: MdOutlineDangerous,
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
