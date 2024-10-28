import GenericPortal from "./generic_portal";
import PortalInterface from "../interfaces/portal_interface";

class UolPortal extends GenericPortal implements PortalInterface {
  constructor() {
    super();
    this.set_url("https://noticias.uol.com.br/ultimas/");
    this.set_articles_query("div.thumbnails-item");

    this.set_title({
      query: "h3.thumb-title",
      attribute: "text",
    });
    this.set_date({
      query: "time.thumb-date",
      attribute: "text",
    });
    this.set_font("UOL");
    this.set_image(false);
    this.set_url_new({
      query: "a",
      attribute: "href",
    });
  }
}

export default UolPortal;
