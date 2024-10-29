import TerraPortal from "./portais/terra_portal";

const portal = new TerraPortal();

portal.process().then((articles) => {
  console.log(articles);
});
