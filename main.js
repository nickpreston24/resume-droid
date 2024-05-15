// import './dist/style.css'
import Alpine from "alpinejs";
import persist from "@alpinejs/persist";

window.Alpine = Alpine;
Alpine.plugin(persist);
Alpine.start();

Alpine.store("darkMode", {
  on: Alpine.$persist(true).as("darkMode_on"),
});

// from: https://github.com/quilljs/webpack-example/blob/main/src/index.html
import "quill/dist/quill.snow.css";

import Quill from "quill/core";

import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";

import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";

Quill.register({
  "modules/toolbar": Toolbar,
  "themes/snow": Snow,
  "formats/bold": Bold,
  "formats/italic": Italic,
  "formats/header": Header,
});

new Quill("#editor", {
  theme: "snow",
});

export default Quill;
