import { GiInterdiction } from "react-icons/gi";

export default {
  name: "pictosI",
  type: "document",
  title: "Pictos Interdiction",
  icon: GiInterdiction,
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
