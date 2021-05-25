/* eslint-disable no-unused-vars */
import React from "react";
import MyAssetSource from "./MyAssetSource";
import MyAssetSourceIcon from "./MyAssetSourceIcon";

export default {
  title: "Canvas Image",
  name: "canvasasset",
  icon: MyAssetSourceIcon,
  type: "object",
  component: MyAssetSource,
  fields: [
    {
      name: "nothing",
      Title: "Nothing",
      type: "string",
    },
  ],
};
