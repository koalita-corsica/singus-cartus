import { RiErrorWarningLine } from "react-icons/ri";

export default {
  name: "epis",
  type: "document",
  title: "EPIs",
  icon: RiErrorWarningLine,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
