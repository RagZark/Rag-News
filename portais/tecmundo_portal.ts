import GenericPortal from "./generic_portal";
import PortalInterface from "../interfaces/portal_interface";

class TecMundoPortal extends GenericPortal implements PortalInterface {
  constructor() {
    super();
    this.set_url("https://www.tecmundo.com.br/novidades");
    this.set_articles_query("article.tec--card.tec--card--medium");

    this.set_title({
      query: "h4.tec--card__title",
      attribute: "text",
    });
    this.set_date({
      query: "div.tec--timestamp__item",
      attribute: "text",
    });
    this.set_source({
      query: "div>a",
      attribute: "text",
    });
    this.set_image({
      query: ".tec--card__thumb__image",
      attribute: "data-src",
    });
    this.set_image({
      query: "figure>a",
      attribute: "data-src",
    });
  }
}

export default TecMundoPortal;
