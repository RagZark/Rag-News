import UolPortal from "./portais/uol_portal";

const portal = new UolPortal();

portal.process().then((articles) => {
  console.log(articles);
});
