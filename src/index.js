import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import "./i18n";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <SimpleReactLightbox>
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </SimpleReactLightbox>,
  document.getElementById("root")
);
