import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import "./i18n";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <SimpleReactLightbox>
    <Suspense fallback={<h1>Loading...</h1>}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </SimpleReactLightbox>,
  document.getElementById("root")
);
