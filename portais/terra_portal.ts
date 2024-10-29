import GenericPortal from "./generic_portal";
import PortalInterface from "../interfaces/portal_interface";

class TerraPortal extends GenericPortal implements PortalInterface {
  constructor() {
    super();
    this.set_url("https://www.terra.com.br/ultimas/");
    this.set_articles_query("div.card-news");

    this.set_title({
      query: "h3",
      attribute: "text",
    });
    this.set_date("Não especificada");
    this.set_font("Nunito Sans");
    this.set_image({
      query: ".card-news__image>a>img",
      attribute: "src",
    });
    this.set_url_new({
      query: "a",
      attribute: "href",
    });
  }
}

export default TerraPortal;
