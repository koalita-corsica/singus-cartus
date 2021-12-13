import { BsCardChecklist } from "react-icons/bs";

export default {
  name: "pictosO",
  type: "document",
  title: "Pictos Obligation",
  icon: BsCardChecklist,
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
