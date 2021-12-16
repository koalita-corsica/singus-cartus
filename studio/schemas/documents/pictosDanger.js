import { RiSkull2Fill } from "react-icons/ri";

export default {
  name: "pictosD",
  type: "document",
  title: "Pictos Danger",
  icon: RiSkull2Fill,
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
