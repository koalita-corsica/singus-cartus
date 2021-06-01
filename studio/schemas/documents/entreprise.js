import { BiCopyright } from "react-icons/bi";

export default {
  name: "entreprise",
  type: "document",
  title: "Entreprise",
  icon: BiCopyright,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nom de l'entrprise",
    },
    {
      name: "logo",
      type: "image",
      title: "Logo de l'entreprise",
    },
  ],
};
