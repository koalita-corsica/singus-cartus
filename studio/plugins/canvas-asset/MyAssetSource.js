/* eslint-disable no-unused-vars */
/* eslint-disable react/no-string-refs */
import React, { Component, useRef, useState } from "react";
import Dialog from "part:@sanity/components/dialogs/fullscreen";

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import styles from "./MyAssetSource.css";

export default class CanvasCreator extends Component {
  static defaultProps = {
    selectedAssets: undefined,
  };

  handleSelect = () => {
    var target = new Image();
    target.src = this.refs.canvas.toDataURL();
    this.props.onSelect([
      {
        kind: "url",
        value: target.src,
        assetDocumentProps: {
          source: {
            // The source this image is from
            name: "my own",
            // A string that uniquely idenitfies it within the source.
            // In this example the URL is the closest thing we have as an actual ID.
            id: "1",
          },
          description: "Uploaded image",
          creditLine: "By EvrPRO",
        },
      },
    ]);
  };

  getPosition(event) {
    var rect = this.refs.canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    this.drawCoordinates(x, y);
  }

  drawCoordinates(x, y) {
    var pointSize = 6;
    var ctx = this.refs.canvas.getContext("2d");

    ctx.fillStyle = "#ff2626"; // Red color

    ctx.beginPath();
    ctx.arc(0, 0, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
  }

  handleClose = () => {
    this.props.onClose();
  };

  getMousePos(canvas, evt) {
    var rect = this.refs.canvas.getBoundingClientRect();
    return {
      x:
        ((evt.clientX - rect.left) / (rect.right - rect.left)) *
        this.refs.canvas.width,
      y:
        ((evt.clientY - rect.top) / (rect.bottom - rect.top)) *
        this.refs.canvas.height,
    };
  }

  componentDidMount() {
    this.updateCanvas();
    var clicks = this.refs.canvas.onclick;
    this.refs.canvas.addEventListener("click", (e) => {
      var pointSize = 15;
      var ctx = this.refs.canvas.getContext("2d");
      var pos = this.getMousePos(this.refs.canvas, e);

      ctx.fillStyle = "#ff2626"; // Red color

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, pointSize, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.font = "10pt Calibri";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(++clicks, pos.x, pos.y + 3);
    });
  }

  updateCanvas() {
    const canvas = this.refs.canvas;
    const ctx = this.refs.canvas.getContext("2d");
    let fileInput = document.getElementById("myImg");
    fileInput.addEventListener("change", function (ev) {
      if (ev.target.files) {
        let file = ev.target.files[0];

        var reader = new FileReader();

        reader.readAsDataURL(file);
      }

      reader.onloadend = function (e) {
        var image = new Image();
        image.src = e.target.result;
        image.onload = function (ev) {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
        };
      };
    });
  }

  render() {
    return (
      <Dialog title="Canvas" onClose={this.handleClose} isOpen>
        <input type="file" id="myImg" />
        <canvas ref="canvas"> </canvas>
        <button onClick={this.handleSelect}> Sauvegarder </button>
        <button
          onClick={() =>
            this.refs.canvas
              .getContext("2d")
              .clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height)
          }
        >
          {" "}
          Éliminer{" "}
        </button>
      </Dialog>
    );
  }
}
