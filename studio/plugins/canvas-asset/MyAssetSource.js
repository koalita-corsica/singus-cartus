/* eslint-disable react/no-string-refs */
/* eslint-disable no-unused-vars */
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
  componentDidMount() {
    updateCanvas();
    let points = [];
    let canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    var clicks = canvas.onclick;
    var mouse = { x: 0, y: 0 };
    var previous = { x: 0, y: 0 };
    var pointSize = 15;

    canvas.addEventListener("click", function (e) {
      previous = { x: mouse.x, y: mouse.y };
      mouse = oMousePos(canvas, e);
      points.push({ x: mouse.x, y: mouse.y });

      ctx.fillStyle = "#ff2626"; // Red color

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, pointSize, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.font = "10pt Calibri";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(++clicks, mouse.x, mouse.y + 3);
    });

    document.getElementById("undo").addEventListener("click", Undo);

    function Undo() {
      points.splice(-1, 1);
      var clicks2 = clicks--;
      // delete everything
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let file = document.getElementById("myImg").files[0];

      var reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        var image = new Image();
        image.src = e.target.result;
        image.onload = function (ev) {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
        };
      };

      function pintar() {
        points.forEach((item, i) => {
          ctx.fillStyle = "#ff2626"; // Red color
          ctx.beginPath();
          ctx.arc(item.x, item.y, pointSize, 0, Math.PI * 2, true);
          ctx.fill();
          ctx.font = "10pt Calibri";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.fillText(i + 1, item.x, item.y + 3);
        });
      }

      setTimeout(pintar, 100);
    }

    // a function to detect the mouse position
    function oMousePos(canvas, evt) {
      var ClientRect = canvas.getBoundingClientRect();
      return {
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top),
      };
    }

    function updateCanvas() {
      const canvas = document.getElementById("mycanvas");
      const ctx = canvas.getContext("2d");
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

    function clearAll() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let file = document.getElementById("myImg").files[0];

      var reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        var image = new Image();
        image.src = e.target.result;
        image.onload = function (ev) {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
        };
      };

      clicks = 0;
      points = [];
    }

    document.getElementById("clear").addEventListener("click", clearAll);

    function removeAll() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      clicks = 0;
      points = [];

      document.getElementById("myImg").value = "";
    }

    document.getElementById("remove").addEventListener("click", removeAll);
  }

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Dialog title="Canvas" onClose={this.handleClose} isOpen>
        <input type="file" id="myImg" />
        <div>
          <canvas ref="canvas" id="mycanvas"></canvas>
        </div>
        <div>
          <button onClick={this.handleSelect}> Sauvegarder </button>
          <button id="undo"> Annuler </button>
          <div>
            <button id="clear"> Tout Effacer </button>
            <button id="remove"> Supprimer </button>
          </div>
        </div>
      </Dialog>
    );
  }
}
