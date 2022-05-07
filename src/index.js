import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import "./i18n";

ReactDOM.render(
  <SimpleReactLightbox>
    <Suspense fallback={<span>Loading...</span>}>
      <App />
    </Suspense>
  </SimpleReactLightbox>,
  document.getElementById("root")
);
