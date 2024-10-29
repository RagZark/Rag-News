import G1Portal from "./portais/g1_portal";

const portal = new G1Portal();

portal.process().then((articles) => {
  console.log(articles);
});
