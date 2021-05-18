import { FaIcons } from "react-icons/fa";

export default {
  name: "icon",
  type: "document",
  title: "Icons",
  icon: FaIcons,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "iconsGallery",
      title: "Icons gallery",
      type: "image",
    },
  ],
};
