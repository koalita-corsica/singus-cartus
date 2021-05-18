import React from "react";
const redIcon = () => <span style={{ fontWeight: "bold" }}>Red</span>;
const colorRed = (props) => (
  <span style={{ color: "red" }}>{props.children}</span>
);
export default {
  name: "articleNoImage",
  type: "array",
  title: "Article no Image",
  of: [
    {
      type: "block",
      title: "Block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: redIcon,
              render: colorRed,
            },
          },
        ],
      },
    },
  ],
};
